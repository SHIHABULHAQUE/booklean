// Hostinger entry file for the compiled Angular SSR server.
import { access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const compiledServerPath = join(rootDir, 'dist', 'booklean', 'server', 'server.mjs');

// Angular's generated server starts listening when it is the main module or when
// it is running under a process manager such as PM2. Hostinger commonly uses PM2.
process.env.pm_id = process.env.pm_id || 'hostinger';

try {
  await access(compiledServerPath);
  await import(pathToFileURL(compiledServerPath).href);
} catch (err) {
  console.error('Failed to start BookLean server.');
  console.error(`Expected compiled server at: ${compiledServerPath}`);
  console.error('Run `npm run build` before `npm start`, or set Hostinger build command to `npm run build`.');
  console.error(err);
  process.exit(1);
}
