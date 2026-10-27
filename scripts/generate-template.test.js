import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderHn } from './generate-template.js';

test('renders an XHTML HN email via template-runtime-display', () => {
  const html = renderHn({ data: { title: 'Hello', preview: 'Preview text' } });
  assert.match(html, /^<!DOCTYPE html PUBLIC "-\/\/W3C\/\/DTD XHTML 1.0 Transitional/);
  assert.match(html, /<html xmlns="http:\/\/www.w3.org\/1999\/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">/);
  assert.match(html, /<body style="height: 100%; margin: 0;[^"]*background-color: #ffffff;">/);
  assert.match(html, /<title>Hello<\/title>/);
  assert.match(html, /mcnPreviewText[^>]*>Preview text</);
  for (const id of ['bodyTable', 'bodyCell', 'templatePreheader', 'templateHeader', 'templateBody', 'templateFooter']) {
    assert.ok(html.includes(`id="${id}"`), id);
  }
});
