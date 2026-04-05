/**
 * data-sources.files.test.js
 *
 * Validates that every dataset under files/ can be loaded, has the
 * expected shape, and can be used by the template-generation pipeline.
 *
 * Three content sources are exercised here (one test suite per file):
 *   1. files/data.js               — canonical dataset
 *   2. files/data-hn.js            — HN json-authored variant (also used by Work/src/data.js)
 *   3. files/data-from-markdown.js — markdown-derived meta-data (also used by Work/src/data-from-markdown.js)
 *
 * Backward-compat re-export paths are also verified so that any code still
 * importing from the old locations continues to receive the correct data.
 */

import fs from 'fs';
import path from 'path';

import { renderTemplate } from 'atherdon-newsletter-js-layouts-outertemplate';

import dataCanonical from '../../../files/data.js';
import dataHn from '../../../files/data-hn.js';
import dataFromMarkdown from '../../../files/data-from-markdown.js';

// Legacy re-export paths — must resolve to the same payload as the direct imports above.
import dataLegacySrc from '../../src/data';
import dataLegacyMarkdown from '../../src/data-from-markdown';

const OUTPUT_DIR = path.resolve(__dirname, '../../generated');
const CONTENT_FROM_MARKDOWN = path.resolve(__dirname, '../../src/content-from-markdown.html');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

const expectValidDataShape = (data) => {
  expect(data).toBeDefined();
  expect(typeof data).toBe('object');
  expect(typeof data.title).toBe('string');
  expect(data.title.length).toBeGreaterThan(0);
  expect(typeof data.preview).toBe('string');
  expect(data.preview.length).toBeGreaterThan(0);
  expect(Array.isArray(data.ads)).toBe(true);
  expect(data.ads.length).toBeGreaterThan(0);
  expect(Array.isArray(data.images)).toBe(true);
  expect(data.images.length).toBeGreaterThan(0);

  // Each image entry must be a single-key wrapper object { imageN: { src, link } }
  data.images.forEach((entry) => {
    const keys = Object.keys(entry);
    expect(keys.length).toBe(1);
    const img = Object.values(entry)[0];
    expect(typeof img.src).toBe('string');
    expect(typeof img.link).toBe('string');
  });
};

// ---------------------------------------------------------------------------
// Parameterized: shape validation for every files/ source
// ---------------------------------------------------------------------------

const DATA_SOURCES = [
  { label: 'files/data.js', data: dataCanonical },
  { label: 'files/data-hn.js', data: dataHn },
  { label: 'files/data-from-markdown.js', data: dataFromMarkdown },
];

describe('files/ data sources — shape validation', () => {
  test.each(DATA_SOURCES)('$label has the expected template-data shape', ({ data }) => {
    expectValidDataShape(data);
  });
});

// ---------------------------------------------------------------------------
// Parameterized: each source can drive template generation
// ---------------------------------------------------------------------------

describe('files/ data sources — template generation', () => {
  test.each(DATA_SOURCES)(
    '$label generates a valid HTML email template',
    ({ label, data }) => {
      const content = buildFallbackContent(data);
      const html = renderTemplate('hn', { string: content, data });

      expect(typeof html).toBe('string');
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain(data.title);
    }
  );

  test('files/data-from-markdown.js generates template with real markdown content', () => {
    const content = fs.readFileSync(CONTENT_FROM_MARKDOWN, 'utf8');
    const html = renderTemplate('hn', { string: content, data: dataFromMarkdown });

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const outFile = path.join(OUTPUT_DIR, 'files-data-from-markdown.html');
    fs.writeFileSync(outFile, html, 'utf8');

    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(dataFromMarkdown.title);
    expect(fs.existsSync(outFile)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Backward-compatibility: legacy re-export paths must resolve correctly
// ---------------------------------------------------------------------------

describe('backward-compat re-export paths', () => {
  test('Work/src/data.js re-exports files/data-hn.js', () => {
    expect(dataLegacySrc).toEqual(dataHn);
  });

  test('Work/src/data-from-markdown.js re-exports files/data-from-markdown.js', () => {
    expect(dataLegacyMarkdown).toEqual(dataFromMarkdown);
  });
});
