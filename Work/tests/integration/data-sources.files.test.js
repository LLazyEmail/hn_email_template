/**
 * data-sources.files.test.js
 *
 * Validates that every dataset under files/ and content/ can be loaded, has the
 * expected shape, and can be used by the template-generation pipeline.
 *
 * Three content sources are exercised in two locations:
 *   Legacy paths (files/ — backward-compat re-exports):
 *     1. files/data.js               — re-exports content/content1.js
 *     2. files/data-hn.js            — re-exports content/content2.js
 *     3. files/data-from-markdown.js — re-exports content/content3.js
 *
 *   New canonical paths (content/):
 *     4. content/content1.js — canonical dataset
 *     5. content/content2.js — HN JSON-authored variant
 *     6. content/content3.js — markdown-derived variant
 */

import fs from 'fs';
import path from 'path';

import { renderTemplate } from 'atherdon-newsletter-js-layouts-outertemplate';

// Legacy paths (backward-compat re-exports — still used by existing code)
import dataCanonical from '../../../files/data.js';
import dataHn from '../../../files/data-hn.js';
import dataFromMarkdown from '../../../files/data-from-markdown.js';

// New canonical paths
import content1 from '../../../content/content1.js';
import content2 from '../../../content/content2.js';
import content3 from '../../../content/content3.js';

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
    ({ data }) => {
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
// content/ sources — new canonical paths (steps 7-8 of reorganization)
// ---------------------------------------------------------------------------

const CONTENT_SOURCES = [
  { label: 'content/content1.js', data: content1 },
  { label: 'content/content2.js', data: content2 },
  { label: 'content/content3.js', data: content3 },
];

describe('content/ sources — shape validation', () => {
  test.each(CONTENT_SOURCES)('$label has the expected template-data shape', ({ data }) => {
    expectValidDataShape(data);
  });
});

describe('content/ sources — template generation', () => {
  test.each(CONTENT_SOURCES)(
    '$label generates a valid HTML email template',
    ({ data }) => {
      const content = buildFallbackContent(data);
      const html = renderTemplate('hn', { string: content, data });

      expect(typeof html).toBe('string');
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain(data.title);
    }
  );

  test('content/content3.js generates template with real markdown content', () => {
    const content = fs.readFileSync(CONTENT_FROM_MARKDOWN, 'utf8');
    const html = renderTemplate('hn', { string: content, data: content3 });

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const outFile = path.join(OUTPUT_DIR, 'content3-from-markdown.html');
    fs.writeFileSync(outFile, html, 'utf8');

    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(content3.title);
    expect(fs.existsSync(outFile)).toBe(true);
  });
});

describe('content/ sources — backward compat: files/ re-exports match content/', () => {
  test('files/data.js re-exports the same data as content/content1.js', () => {
    expect(JSON.stringify(dataCanonical)).toBe(JSON.stringify(content1));
  });

  test('files/data-hn.js re-exports the same data as content/content2.js', () => {
    expect(JSON.stringify(dataHn)).toBe(JSON.stringify(content2));
  });

  test('files/data-from-markdown.js re-exports the same data as content/content3.js', () => {
    expect(JSON.stringify(dataFromMarkdown)).toBe(JSON.stringify(content3));
  });
});
