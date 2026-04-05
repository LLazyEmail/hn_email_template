import fs from 'fs';
import path from 'path';

import { renderTemplate } from 'atherdon-newsletter-js-layouts-outertemplate';
import dataFromJson from '../../../files/data-hn.js';
import dataFromMarkdown from '../../../files/data-from-markdown.js';

const OUTPUT_DIR = path.resolve(__dirname, '../../generated');
const CONTENT_FROM_MARKDOWN = path.resolve(__dirname, '../../src/content-from-markdown.html');

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

describe('side-by-side comparison generation', () => {
  test('generates compare-from-json.html from src/data.js', () => {
    const content = buildFallbackContent(dataFromJson);
    const html = renderTemplate('hn', { string: content, data: dataFromJson });

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const outFile = path.join(OUTPUT_DIR, 'compare-from-json.html');
    fs.writeFileSync(outFile, html, 'utf8');

    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(dataFromJson.title);
    expect(fs.existsSync(outFile)).toBe(true);
  });

  test('generates compare-from-markdown.html from src/data-from-markdown.js + src/content-from-markdown.html', () => {
    const content = fs.readFileSync(CONTENT_FROM_MARKDOWN, 'utf8');
    const html = renderTemplate('hn', { string: content, data: dataFromMarkdown });

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const outFile = path.join(OUTPUT_DIR, 'compare-from-markdown.html');
    fs.writeFileSync(outFile, html, 'utf8');

    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(dataFromMarkdown.title);
    expect(fs.existsSync(outFile)).toBe(true);
  });
});
