# Hostinger Deployment

Deploy this project as a Node.js Web App, not as static files in `public_html`.
The Angular site is served by Node SSR and LeanBot needs the Express route `POST /api/chat`.

## Build Check

Run this locally before uploading:

```powershell
npm install
npm run build
npm start
```

Open these local URLs:

```text
http://localhost:4000/uae
http://localhost:4000/api/health
```

`/api/health` should return JSON with `status: "ok"`.

## Hostinger hPanel Values

Use these exact settings for the Node.js app:

```text
App type: Node.js Web App
Node version: 20.x or 22.x
Application root: repository root
Install command: npm install
Build command: npm run build
Start command: npm start
Startup file, if asked: dist/booklean/server/server.mjs
```

If Hostinger hPanel has an older startup file value saved as `server.js`, either change it to
`dist/booklean/server/server.mjs` or leave it as `server.js`; the root `server.js` file is included
as a compatibility wrapper and starts the same compiled server after build.

Do not use only `dist/booklean/browser` for this project. That would host the page, but LeanBot chat would not work because `/api/chat` runs on the Node server.

## Environment Variables

Add these in Hostinger hPanel under the Node.js app environment variables:

```text
OPENAI_API_KEY=your_openai_key
OPENAI_MODEL=gpt-4o-mini
GEMINI_API_KEY=your_gemini_key
GEMINI_MODEL=gemini-3.5-flash
GEMINI_FALLBACK_MODELS=gemini-3.1-flash-lite,gemini-2.5-flash,gemini-2.5-flash-lite
```

`OPENAI_API_KEY` is the main key. Gemini is the fallback. If OpenAI quota is exhausted,
LeanBot will use Gemini; if the main Gemini model returns temporary high-demand errors,
the server will try the fallback models in order.
Do not put API keys in Angular/browser files.

After changing environment variables, redeploy or restart the Node.js app.

## GitHub Deploy

1. Push this full project to GitHub.
2. In Hostinger hPanel, open your website.
3. Go to Web Apps or Node.js Web Apps.
4. Choose Deploy from GitHub.
5. Select this repository and branch.
6. Set the hPanel values from this file.
7. Add the environment variables.
8. Click Deploy.

## Manual ZIP Deploy

Use this only if you are not connecting GitHub:

1. Run `powershell -ExecutionPolicy Bypass -File scripts/create-deploy-zip.ps1`.
2. Upload `booklean-hostinger-deploy.zip`.
3. Do not include `node_modules`, `.env`, `.git`, `.angular`, `tmp`, or `dist`.
4. Upload and extract the ZIP in Hostinger.
5. Create a Node.js Web App pointing to the extracted project root.
6. Set the hPanel values from this file.
7. Add the environment variables.
8. Deploy or restart the app.

## After Deploy

Test these URLs:

```text
https://yourdomain.com/
https://yourdomain.com/uae
https://yourdomain.com/api/health
```

`/api/health` should return:

```json
{
  "status": "ok",
  "app": "booklean",
  "leanbot": true
}
```

If `leanbot` is `false`, the Node app is running but the API key is missing.

Then open LeanBot and send a message. The browser should call:

```text
POST https://yourdomain.com/api/chat
```

If chat returns `502`, open Hostinger runtime logs. The server logs the exact provider failure,
such as missing API key, invalid model, quota/billing issue, or provider HTTP status. An
OpenAI `insufficient_quota` error must be fixed in OpenAI billing/credits or by replacing
the key with one from an account that has quota.
