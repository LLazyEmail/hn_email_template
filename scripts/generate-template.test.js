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

test('renders HN ads and image grid from content2 and passes lintEmail', async (t) => {
  const { lintEmail } = await import('@llazyemail/template-runtime-display/quality');
  const { default: data } = await import('../content/content2.js');
  const html = renderHn({ data });
  assert.match(html, /class="hnAds"/);
  assert.match(html, /Bridgecrew_stacked\.jpg/);
  assert.equal((html.match(/alt="Image \d"/g) || []).length, data.images.length);

  const result = { templateId: 'hn', ok: true, html, parts: [{ id: 'document', status: 'ok', html, chars: html.length, ms: 0 }] };
  // The Google Fonts <link> sits in <!--[if !mso]> on purpose (progressive web font).
  const findings = lintEmail(result, { off: ['no-external-stylesheet'] });
  findings.forEach((f) => t.diagnostic(`[lint ${f.severity}] ${f.rule}: ${f.message}`));
  assert.deepEqual(findings.filter((f) => f.severity === 'error'), []);
});

test('hn-without-ads skips ads block but keeps image grid (preset featureFlags.ads:false)', async () => {
  const { default: data } = await import('../content/content2.js');
  const withAds = renderHn({ data, templateId: 'hn' });
  const withoutAds = renderHn({ data, templateId: 'hn-without-ads' });

  assert.match(withAds, /class="hnAds"/);
  assert.doesNotMatch(withoutAds, /class="hnAds"/);
  assert.doesNotMatch(withoutAds, /Bridgecrew_stacked\.jpg/);
  assert.equal((withoutAds.match(/alt="Image \d"/g) || []).length, data.images.length);
  assert.match(withoutAds, /id="templateFooter"/);
  assert.match(withoutAds, /id="bodyTable"/);
});
