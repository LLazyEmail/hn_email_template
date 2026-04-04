import fs from 'fs';
import path from 'path';

import { displayHead } from '../../src/display/sections/head';
import { displayFooter } from '../../src/display/sections/footer';
import { displayBody } from '../../src/display/sections/body';
import { displayMain } from '../../src/display/sections/main';
import previewTextComponent from '../../src/components/previewText';

const FIXTURES_DIR = path.resolve(__dirname, '../../fixtures');
const OUTPUT_DIR = path.resolve(__dirname, '../../generated/fixtures');

const flattenObjectEntries = (items = []) =>
  items.reduce((acc, item) => ({ ...acc, ...item }), {});

const buildAdsMarkup = (ads = []) => {
  const mergedAds = flattenObjectEntries(ads);
  const sloganText = mergedAds.slogan || '';
  const href = mergedAds.link || '#';
  const logoSrc = mergedAds.logo || '';

  return `
    <tr>
      <td style="padding: 12px 18px; text-align: center;">
        <h2 style="margin: 0 0 10px 0;">${sloganText}</h2>
        <a href="${href}" target="_blank" rel="noreferrer" style="display: inline-block; margin-bottom: 10px;">
          Learn more
        </a>
        <br />
        <img src="${logoSrc}" alt="Sponsor logo" style="max-width: 260px; width: 100%; height: auto;" />
      </td>
    </tr>
  `;
};

const buildImageRowsMarkup = (images = []) => {
  return images
    .map((entry) => {
      const image = Object.values(entry)[0];
      if (!image) return '';
      return `
        <tr>
          <td style="padding: 12px 18px; text-align: center;">
            <a href="${image.link}" target="_blank" rel="noreferrer">
              <img src="${image.src}" alt="Newsletter visual" style="max-width: 520px; width: 100%; height: auto;" />
            </a>
          </td>
        </tr>
      `;
    })
    .join('\n');
};

const buildFixtureContent = (fixtureData) => {
  return `
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
      <tbody>
        <tr>
          <td style="padding: 12px 18px; text-align: center;">
            <h1 style="margin: 0 0 8px 0;">${fixtureData.title}</h1>
            <p style="margin: 0;">${fixtureData.preview}</p>
          </td>
        </tr>
        ${buildAdsMarkup(fixtureData.ads)}
        ${buildImageRowsMarkup(fixtureData.images)}
      </tbody>
    </table>
  `;
};

const loadFixtures = () => {
  return fs
    .readdirSync(FIXTURES_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((filename) => {
      const name = path.basename(filename, '.json');
      const filePath = path.join(FIXTURES_DIR, filename);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return { name, data };
    });
};

describe('multi-fixture display pipeline generation', () => {
  const fixtures = loadFixtures();

  test('at least one fixture is defined', () => {
    expect(fixtures.length).toBeGreaterThan(0);
  });

  test.each(fixtures.map(({ name }) => [name]))(
    'renders and writes HTML for fixture: %s',
    (fixtureName) => {
      const { data } = fixtures.find(({ name }) => name === fixtureName);
      const outFile = path.join(OUTPUT_DIR, `${fixtureName}.html`);

      const head = displayHead({ title: data.title });
      const footer = displayFooter();
      const body = displayBody({
        content: buildFixtureContent(data),
        footer,
        previewText: previewTextComponent(data.preview),
      });
      const html = displayMain({ head, body });

      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
      fs.writeFileSync(outFile, html, 'utf8');

      expect(typeof html).toBe('string');
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain(data.title);
      expect(html).toContain(data.preview.slice(0, 40));
      expect(fs.existsSync(outFile)).toBe(true);
    }
  );
});
