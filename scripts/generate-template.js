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
#!/usr/bin/env node
/**
 * generate-template.js — now delegates file writing to markup-generator.
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { writeGeneratedEmail, MarkupGeneratorError } = require('markup-generator');

const { renderTemplate } = require('../Work/dist/index.cjs.js');

const usage = `...`; // unchanged

const parseArgv = (argv) => { /* unchanged */ };
const asAbsolute = (value) => path.resolve(process.cwd(), value);
const ensureString = (value, flagName) => { /* unchanged */ };

const loadData = async (dataPath) => { /* unchanged — stays local, out of markup-generator's scope */ };
const loadContent = (contentPath) => { /* unchanged — stays local */ };
const buildFallbackContent = (data) => { /* unchanged */ };

const DEFAULT_DATA_PATH = path.resolve(__dirname, '../content/content2.js');

const run = async () => {
  const args = parseArgv(process.argv);
  if (args.help || args.h) { console.log(usage); return; }

  const templateId = ensureString(args.template || 'hn', '--template');
  const dataPath = args.data ? asAbsolute(args.data) : DEFAULT_DATA_PATH;

  // --out used to be a full path like "generated/hn.html".
  // writeGeneratedEmail wants { dir, fileName } separately.
  const outPath = ensureString(args.out || `generated/${templateId}.html`, '--out');
  const absoluteOut = asAbsolute(outPath);
  const dir = path.dirname(absoluteOut);
  const fileName = path.basename(absoluteOut);

  const data = await loadData(dataPath);
  const content = loadContent(args.content) || buildFallbackContent(data);

  const html = renderTemplate(templateId, { string: content, data });

  try {
    const written = await writeGeneratedEmail({
      content: html,
      fileName,
      dir,
      label: templateId,
    });
    console.log(`[generate-template] generated: ${written}`);
  } catch (error) {
    if (error instanceof MarkupGeneratorError) {
      console.error(`[generate-template] failed to write ${fileName} [${error.code}]: ${error.message}`);
      process.exitCode = 1;
      return;
    }
    throw error;
  }
};

run().catch((error) => {
  console.error(`[generate-template] failed: ${error.message}`);
  process.exit(1);
});
