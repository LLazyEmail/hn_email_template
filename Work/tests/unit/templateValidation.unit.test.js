jest.mock('atherdon-newsletter-js-layouts-misc', () => ({
  __esModule: true,
  default: {
    fontsComponent: () => '<fonts-component />',
    addressComponent: ({ mailingAddress }) => `<address>${mailingAddress}</address>`,
    copyrightsComponent: () => '<copyrights-component />',
    newsletterSponsorshipLinkComponent: ({ contact }) => `<sponsor>${contact}</sponsor>`,
    unsubscribeComponent: ({ unsubscribeLink }) => `<unsubscribe>${unsubscribeLink}</unsubscribe>`,
  },
}), { virtual: true });

jest.mock('atherdon-newsletter-js-layouts-body', () => ({
  __esModule: true,
  default: {
    logoTopComponent: () => '<logo-top-component />',
    logoBottomComponent: () => '<logo-bottom-component />',
  },
}), { virtual: true });

const hnTemplate = require('../../src/templates/hn').default;
const hnWithoutAdsTemplate = require('../../src/templates/hn-without-ads').default;

describe('template input schema validation', () => {
  test('allows simple string payloads for hn', () => {
    const html = hnTemplate.render('<p>hello</p>');
    expect(typeof html).toBe('string');
    expect(html.length).toBeGreaterThan(0);
  });

  test('throws for front-matter payload without data.title', () => {
    expect(() =>
      hnTemplate.render({
        string: '<p>x</p>',
        data: { preview: 'preview only' },
      })
    ).toThrow('[template:hn] missing required field for frontMatter payload: data.title');
  });

  test('throws for front-matter payload without data.preview', () => {
    expect(() =>
      hnTemplate.render({
        string: '<p>x</p>',
        data: { title: 'Title only' },
      })
    ).toThrow('[template:hn] missing required field for frontMatter payload: data.preview');
  });

  test('throws for front-matter payload without string content', () => {
    expect(() =>
      hnTemplate.render({
        data: { title: 'Title', preview: 'Preview' },
      })
    ).toThrow('[template:hn] missing required field for frontMatter payload: string');
  });

  test('hn-without-ads uses template-scoped validation errors', () => {
    expect(() =>
      hnWithoutAdsTemplate.render({
        string: '<p>x</p>',
        data: { preview: 'preview only' },
      })
    ).toThrow(
      '[template:hn-without-ads] missing required field for frontMatter payload: data.title'
    );
  });
});
