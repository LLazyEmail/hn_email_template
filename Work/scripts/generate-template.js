#!/usr/bin/env node
/**
 * @deprecated Canonical location is now scripts/generate-template.js at the project root.
 * This file is kept for backward compatibility with `npm run generate:template` (run from Work/).
 *
 * To use the new canonical script directly (from project root):
 *   node scripts/generate-template.js [options]
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const { renderTemplate } = require('../dist/index.cjs.js');

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

const usage = `
Usage:
  npm run generate:template -- --template=hn --data=../content/content2.js --out=generated/hn.html [--content=src/content.html]

Arguments:
  --template   Template id from registry (default: "hn")
  --data       Path to data module (.js/.mjs/.cjs/.json). For front-matter templates, data should contain title and preview.
               Default: ../content/content2.js (new canonical location)
  --out        Output HTML file path
  --content    Optional path to HTML content file. If omitted, a basic content block is generated from data.title/data.preview.
`.trim();

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

const run = async () => {
  const args = parseArgv(process.argv);

  if (args.help || args.h) {
    console.log(usage);
    return;
  }

  const templateId = ensureString(args.template || 'hn', '--template');
  // Default data path points to the new canonical content/ location.
  // This script maintains its own implementation (rather than delegating to
  // scripts/generate-template.js) to preserve `npm run generate:template`
  // backward compatibility for consumers running from within Work/.
  // Both scripts use the same logic; the top-level script is the canonical one.
  const dataPath = ensureString(args.data || '../content/content2.js', '--data');
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
