# Booklean

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Ask Lean Bot backend

The Ask Lean Bot uses the Express backend route `POST /api/chat`. Keep API keys on the backend host only; never put them in Angular environment files or browser code.

Create runtime environment variables based on `.env.example`:

```bash
OPENAI_API_KEY=your_rotated_openai_key
OPENAI_MODEL=gpt-4o-mini
GEMINI_API_KEY=your_rotated_gemini_key
GEMINI_MODEL=gemini-3.5-flash
GEMINI_FALLBACK_MODELS=gemini-3.1-flash-lite,gemini-2.5-flash,gemini-2.5-flash-lite
```

OpenAI is used first. If it fails, the backend falls back to Gemini. Gemini temporary
high-demand errors are retried and then routed through the configured fallback models.
After building, run the SSR/Express server with:

```bash
npm run build
npm run serve:ssr:booklean
```

GitHub Pages is static and cannot run this backend or protect API keys. On static hosting, the chat widget falls back to its built-in replies.

If the backend is deployed separately, expose its public origin in the page before Angular starts:

```html
<script>
  window.BOOKLEAN_CHAT_API_URL = 'https://your-node-backend.example.com';
</script>
```

The browser will call `https://your-node-backend.example.com/api/chat`. API keys must stay on that backend only.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
