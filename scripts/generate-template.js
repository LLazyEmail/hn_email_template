#!/usr/bin/env node
/**
 * generate-template.js
 * Top-level generator script. Canonical location: scripts/generate-template.js.
 *
 * Previously located at Work/scripts/generate-template.js (which now delegates
 * here). Content datasets have moved to content/ (content1.js, content2.js,
 * content3.js); old files/ paths remain as backward-compat re-exports.
 *
 * Usage (run from project root or Work/):
 *   node scripts/generate-template.js [options]
 *   npm run generate:template      (inside Work/, uses this script)
 *
 * Arguments:
 *   --template   Template id from registry (default: "hn")
 *   --data       Path to data module (.js/.mjs/.cjs/.json). Resolved from CWD.
 *                Default: content/content2.js (relative to project root)
 *   --out        Output HTML file path (resolved from CWD)
 *   --content    Optional path to HTML content file (resolved from CWD).
 *                If omitted, a basic fallback block is generated from data.title/preview.
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

// The compiled bundle lives in Work/dist/ — path is relative to this script file.
const { renderTemplate } = require('../Work/dist/index.cjs.js');

const usage = `
Usage:
  node scripts/generate-template.js --template=hn --data=content/content2.js --out=generated/hn.html [--content=Work/src/content-from-markdown.html]

Arguments:
  --template   Template id from registry (default: "hn")
  --data       Path to data module (.js/.mjs/.cjs/.json). Resolved from CWD.
               Default: content/content2.js
  --out        Output HTML file path (resolved from CWD)
  --content    Optional path to HTML content file. If omitted, a basic content
               block is generated from data.title/data.preview.
`.trim();

const parseArgv = (argv) => {
  const args = {};
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) continue;

    const [rawKey, inlineValue] = token.slice(2).split('=');
    if (inlineValue !== undefined) {
      args[rawKey] = inlineValue;
      continue;
    }

    const next = argv[i + 1];
    if (next && !next.startsWith('--')) {
      args[rawKey] = next;
      i += 1;
    } else {
      args[rawKey] = true;
    }
  }
  return args;
};

const asAbsolute = (value) => path.resolve(process.cwd(), value);

const ensureString = (value, flagName) => {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`[generate-template] ${flagName} must be a non-empty string`);
  }
  return value.trim();
};

const loadData = async (dataPath) => {
  const absolutePath = asAbsolute(dataPath);
  const ext = path.extname(absolutePath).toLowerCase();

  if (ext === '.json') {
    const raw = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(raw);
  }

  const mod = await import(pathToFileURL(absolutePath).href);
  return mod.default ?? mod;
};

const loadContent = (contentPath) => {
  if (!contentPath) return null;
  const absolutePath = asAbsolute(contentPath);
  return fs.readFileSync(absolutePath, 'utf8');
};

const buildFallbackContent = (data) => {
  const title = data?.title || '[Generated Template]';
  const preview = data?.preview || '';

  return `
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
  <tbody>
    <tr>
      <td style="padding: 12px 18px; text-align: center;">
        <h1 style="margin: 0 0 8px 0;">${title}</h1>
        <p style="margin: 0;">${preview}</p>
      </td>
    </tr>
  </tbody>
</table>
`.trim();
};

const writeOutput = (outPath, html) => {
  const absolutePath = asAbsolute(outPath);
  const outputDir = path.dirname(absolutePath);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(absolutePath, html, 'utf8');
  return absolutePath;
};

// Default data path is relative to project root (one level up from this script's dir).
const DEFAULT_DATA_PATH = path.resolve(__dirname, '../content/content2.js');

const run = async () => {
  const args = parseArgv(process.argv);

  if (args.help || args.h) {
    console.log(usage);
    return;
  }

  const templateId = ensureString(args.template || 'hn', '--template');
  const dataPath = args.data ? asAbsolute(args.data) : DEFAULT_DATA_PATH;
  const outPath = ensureString(args.out || `generated/${templateId}.html`, '--out');

  const data = await loadData(dataPath);
  const content = loadContent(args.content) || buildFallbackContent(data);

  const html = renderTemplate(templateId, {
    string: content,
    data,
  });

  const outputFile = writeOutput(outPath, html);
  console.log(`[generate-template] generated: ${outputFile}`);
};

run().catch((error) => {
  console.error(`[generate-template] failed: ${error.message}`);
  process.exit(1);
});
