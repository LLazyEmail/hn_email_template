import markdownData from '../../../files/data-hn.js';
import { renderTemplate } from 'atherdon-newsletter-js-layouts-outertemplate';
import { displayHead } from '../../src/display/sections/head';
import { displayBody } from '../../src/display/sections/body';
import { displayFooter } from '../../src/display/sections/footer';
import { displayMain } from '../../src/display/sections/main';
import { innerContentComponent, previewTextComponent } from '../../src/components';

const CONTENT_MARKER = 'Ultra-fast innovation holds the key';

describe('display methods with real data payload', () => {
  test('builds full template via section-level display methods', () => {
    const content = innerContentComponent();
    const preview = previewTextComponent(markdownData.preview);

    const head = displayHead({ title: markdownData.title });
    const footer = displayFooter();
    const body = displayBody({ content, previewText: preview, footer });
    const html = displayMain({ head, body });

    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(`<title>${markdownData.title}</title>`);
    expect(html).toContain(markdownData.preview);
    expect(html).toContain(CONTENT_MARKER);
  });

  test('builds full template via template registry using real data object', () => {
    const html = renderTemplate('hn', {
      string: innerContentComponent(),
      data: markdownData,
    });

    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(`<title>${markdownData.title}</title>`);
    expect(html).toContain(markdownData.preview);
    expect(html).toContain(CONTENT_MARKER);
  });

  test('accepts additional data fields (ads, images) without render failure', () => {
    expect(markdownData.ads.length).toBeGreaterThan(0);
    expect(markdownData.images.length).toBeGreaterThan(0);

    expect(() =>
      renderTemplate('hn', {
        string: innerContentComponent(),
        data: markdownData,
      })
    ).not.toThrow();
  });
});
