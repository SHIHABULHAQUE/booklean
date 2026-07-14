// Hostinger compatibility entry file.
// Prefer `npm start`, which runs dist/booklean/server/server.mjs directly.
const { access } = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const compiledServerPath = path.join(__dirname, 'dist', 'booklean', 'server', 'server.mjs');

process.env.pm_id = process.env.pm_id || 'hostinger';

access(compiledServerPath)
  .then(() => import(pathToFileURL(compiledServerPath).href))
  .catch((err) => {
    console.error('Failed to start BookLean server from server.js.');
    console.error(`Expected compiled server at: ${compiledServerPath}`);
    console.error('Run `npm run build` before starting the app.');
    console.error(err);
    process.exit(1);
  });
