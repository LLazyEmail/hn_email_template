import headingComponent from '../src/components/heading';
import titleComponent from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import subtitleComponent from '../src/components/subtitle';
import linkComponent from '../src/components/link';
import separatorComponent from '../src/components/separator';
import strongComponent from '../src/components/strong';
import italicComponent from '../src/components/italic';
import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';

import presets, { FONT_FAMILY } from '../src/presets';

// ---------------------------------------------------------------------------
// Preset shape tests
// ---------------------------------------------------------------------------

describe('presets', () => {
  test('exports the expected preset keys', () => {
    expect(Object.keys(presets)).toEqual(
      expect.arrayContaining(['title', 'subtitle', 'heading', 'body', 'meta', 'link'])
    );
  });

  test('title preset snapshot', () => {
    expect(presets.title).toMatchSnapshot();
  });

  test('subtitle preset snapshot', () => {
    expect(presets.subtitle).toMatchSnapshot();
  });

  test('heading preset snapshot', () => {
    expect(presets.heading).toMatchSnapshot();
  });

  test('body preset snapshot', () => {
    expect(presets.body).toMatchSnapshot();
  });

  test('meta preset snapshot', () => {
    expect(presets.meta).toMatchSnapshot();
  });

  test('link preset snapshot', () => {
    expect(presets.link).toMatchSnapshot();
  });

  test('FONT_FAMILY is a non-empty string', () => {
    expect(typeof FONT_FAMILY).toBe('string');
    expect(FONT_FAMILY.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Component HTML snapshot tests
// ---------------------------------------------------------------------------

describe('component HTML snapshots', () => {
  test('titleComponent renders expected HTML', () => {
    expect(titleComponent({ content: 'Top Stories' })).toMatchSnapshot();
  });

  test('subtitleComponent renders expected HTML', () => {
    expect(subtitleComponent({ content: 'Section intro' })).toMatchSnapshot();
  });

  test('headingComponent renders expected HTML', () => {
    expect(headingComponent({ content: 'Article Title' })).toMatchSnapshot();
  });

  test('paragraphComponent renders expected HTML', () => {
    expect(paragraphComponent({ content: 'Hello world.' })).toMatchSnapshot();
  });

  test('linkComponent renders expected HTML', () => {
    expect(
      linkComponent({ href: 'https://hackernoon.com', content: 'Read more' })
    ).toMatchSnapshot();
  });

  test('separatorComponent renders expected HTML', () => {
    expect(separatorComponent()).toMatchSnapshot();
  });

  test('strongComponent renders expected HTML', () => {
    expect(strongComponent({ content: 'important' })).toMatchSnapshot();
  });

  test('italicComponent renders expected HTML', () => {
    expect(italicComponent({ content: 'emphasis' })).toMatchSnapshot();
  });

  test('listItemComponent renders expected HTML', () => {
    expect(listItemComponent({ content: 'List entry' })).toMatchSnapshot();
  });

  test('listComponent with a single item renders expected HTML', () => {
    const item = listItemComponent({ content: 'Item one' });
    expect(listComponent({ content: item })).toMatchSnapshot();
  });
});
