import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import { ɵsetAngularAppEngineManifest, ɵsetAngularAppManifest } from '@angular/ssr';
import express from 'express';
import { join } from 'node:path';
import { readFileSync, existsSync } from 'node:fs';

// Load local .env file in development environment
if (existsSync('.env')) {
  try {
    const envContent = readFileSync('.env', 'utf-8');
    for (const line of envContent.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let value = trimmed.slice(eqIdx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    }
  } catch (e) {
    console.warn('Failed to load local .env file:', e);
  }
}

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();

type ManifestModule = {
  default: unknown;
};

async function registerAngularManifests() {
  const runtimeImport = new Function('specifier', 'return import(specifier)') as (
    specifier: string,
  ) => Promise<ManifestModule>;

  const [appManifest, appEngineManifest] = await Promise.all([
    runtimeImport(new URL('./angular-app-manifest.mjs', import.meta.url).href),
    runtimeImport(new URL('./angular-app-engine-manifest.mjs', import.meta.url).href),
  ]);

  ɵsetAngularAppManifest(appManifest.default as Parameters<typeof ɵsetAngularAppManifest>[0]);
  ɵsetAngularAppEngineManifest(
    appEngineManifest.default as Parameters<typeof ɵsetAngularAppEngineManifest>[0],
  );
}

await registerAngularManifests();

const angularApp = new AngularNodeAppEngine();

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message?: string;
  history?: ChatMessage[];
}

interface OpenAIResponse {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      text?: string;
      type?: string;
    }>;
  }>;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
}

class ProviderRequestError extends Error {
  constructor(
    readonly provider: 'OpenAI' | 'Gemini',
    readonly status: number,
    readonly body: string,
    readonly model?: string,
  ) {
    super(
      `${provider} request failed${model ? ` (${model})` : ''}: ${status} ${body}`,
    );
  }

  get retriable(): boolean {
    if (this.status === 429 && this.body.includes('insufficient_quota')) {
      return false;
    }

    return [408, 409, 429, 500, 502, 503, 504].includes(this.status);
  }
}

const chatRateWindowMs = 60_000;
const chatRateLimit = 20;
const chatRateStore = new Map<string, { count: number; resetAt: number }>();

const leanBotInstructions = [
  "You are Hey Lean, BookLean Global UAE's helpful website assistant.",
  'Help UAE business owners with accounting, VAT, Corporate Tax, audit, payroll, e-invoicing, bookkeeping, and CFO-service questions.',
  'Be concise, practical, and friendly. Use UAE-specific context where useful.',
  'Do not claim to be a lawyer or the FTA. For complex tax positions, recommend booking a BookLean CA review.',
  'Never ask for card numbers, passwords, OTPs, tax portal credentials, or private API keys.',
].join(' ');

app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'booklean',
    leanbot: Boolean(process.env['OPENAI_API_KEY'] || process.env['GEMINI_API_KEY']),
  });
});

app.post('/api/chat', async (req, res) => {
  const rateKey = req.ip || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(rateKey)) {
    res.status(429).json({
      error: 'Too many chat requests. Please try again in a minute.',
    });
    return;
  }

  const body = req.body as ChatRequest;
  const message = sanitizeChatText(body.message || '');

  if (!message) {
    res.status(400).json({ error: 'Message is required.' });
    return;
  }

  const history = sanitizeHistory(body.history || []);

  try {
    const result = await askAiProvider(message, history);
    res.json(result);
  } catch (err) {
    console.error('LeanBot failed after all providers:', err);
    res.status(502).json({
      error: 'LeanBot is temporarily unavailable. Please try again or WhatsApp the BookLean team.',
    });
  }
});

async function askAiProvider(message: string, history: ChatMessage[]) {
  const errors: string[] = [];

  try {
    return await askOpenAI(message, history);
  } catch (err) {
    const reason = describeProviderError(err);
    errors.push(`OpenAI: ${reason}`);
    console.warn(`LeanBot OpenAI fallback triggered: ${reason}`);
  }

  try {
    return await askGemini(message, history);
  } catch (err) {
    const reason = describeProviderError(err);
    errors.push(`Gemini: ${reason}`);
    console.warn(`LeanBot Gemini fallback failed: ${reason}`);
  }

  throw new Error(errors.join(' | '));
}

function describeProviderError(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = chatRateStore.get(key);

  if (!current || current.resetAt <= now) {
    chatRateStore.set(key, { count: 1, resetAt: now + chatRateWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > chatRateLimit;
}

function sanitizeChatText(value: string): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, 1200);
}

function sanitizeHistory(history: ChatMessage[]): ChatMessage[] {
  return history
    .filter((item) => item.role === 'user' || item.role === 'assistant')
    .map((item) => ({
      role: item.role,
      content: sanitizeChatText(item.content || ''),
    }))
    .filter((item) => item.content)
    .slice(-8);
}

async function askOpenAI(message: string, history: ChatMessage[]) {
  const apiKey = process.env['OPENAI_API_KEY'];
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not configured.');
  }

  const model = process.env['OPENAI_MODEL'] || 'gpt-4o-mini';
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      instructions: leanBotInstructions,
      input: [...history, { role: 'user', content: message }],
      max_output_tokens: 450,
      store: false,
    }),
  });

  if (!response.ok) {
    throw new ProviderRequestError('OpenAI', response.status, await readErrorBody(response), model);
  }

  const data = (await response.json()) as OpenAIResponse;
  return {
    provider: 'chatgpt',
    reply: extractOpenAIText(data),
  };
}

function extractOpenAIText(data: OpenAIResponse): string {
  const outputText = data.output_text?.trim();
  if (outputText) {
    return outputText;
  }

  const nestedText = data.output
    ?.flatMap((item) => item.content || [])
    .map((item) => item.text)
    .find((text) => text?.trim());

  if (nestedText) {
    return nestedText.trim();
  }

  throw new Error('OpenAI response did not include text.');
}

async function askGemini(message: string, history: ChatMessage[]) {
  const apiKey = process.env['GEMINI_API_KEY'];
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured.');
  }

  const models = getGeminiModels();
  const errors: string[] = [];

  for (const model of models) {
    try {
      return await askGeminiModel(apiKey, model, message, history);
    } catch (err) {
      const reason = describeProviderError(err);
      errors.push(reason);

      if (err instanceof ProviderRequestError && err.retriable) {
        console.warn(`LeanBot Gemini model retryable failure: ${reason}`);
        await sleep(650);

        try {
          return await askGeminiModel(apiKey, model, message, history);
        } catch (retryErr) {
          errors.push(describeProviderError(retryErr));
        }
      }
    }
  }

  throw new Error(errors.join(' | '));
}

function getGeminiModels(): string[] {
  const configured = [
    process.env['GEMINI_MODEL'],
    process.env['GEMINI_FALLBACK_MODELS'],
  ]
    .filter(Boolean)
    .flatMap((value) => value!.split(','));

  return uniqueModels([
    ...configured,
    'gemini-3.5-flash',
    'gemini-3.1-flash-lite',
    'gemini-2.5-flash',
    'gemini-2.5-flash-lite',
  ]);
}

function uniqueModels(models: string[]): string[] {
  const seen = new Set<string>();

  return models
    .map((model) => model.trim().replace(/^models\//, ''))
    .filter((model) => {
      if (!model || seen.has(model)) {
        return false;
      }

      seen.add(model);
      return true;
    });
}

async function askGeminiModel(
  apiKey: string,
  model: string,
  message: string,
  history: ChatMessage[],
) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: leanBotInstructions }],
        },
        contents: [...history, { role: 'user', content: message }].map((item) => ({
          role: item.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: item.content }],
        })),
        generationConfig: {
          maxOutputTokens: 450,
          temperature: 0.4,
        },
      }),
    },
  );

  if (!response.ok) {
    throw new ProviderRequestError('Gemini', response.status, await readErrorBody(response), model);
  }

  const data = (await response.json()) as GeminiResponse;
  const reply = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .join('')
    .trim();

  if (!reply) {
    throw new Error('Gemini response did not include text.');
  }

  return {
    provider: 'gemini',
    reply,
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function readErrorBody(response: Response): Promise<string> {
  const text = await response.text().catch(() => '');
  return text.replace(/\s+/g, ' ').trim().slice(0, 500);
}

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
