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

const { createTemplateFromDefinition } = require('../../src/templates/definitions');
const {
  hnDefinition,
  hnWithoutAdsDefinition,
} = require('../../src/templates/definitions');

describe('template definitions', () => {
  test('hn definition has expected metadata and maps plain string to simple variant', () => {
    const mapped = hnDefinition.mapData('<p>Hello</p>');
    expect(hnDefinition.id).toBe('hn');
    expect(hnDefinition.sections).toEqual({
      head: 'displayHead',
      body: 'displayBody',
      footer: 'displayFooter',
      main: 'displayMain',
    });
    expect(mapped).toEqual({
      variant: 'simple',
      payload: '<p>Hello</p>',
    });
  });

  test('hn definition maps front-matter payload to frontMatter variant', () => {
    const payload = { string: '<p>x</p>', data: { title: 'Title' } };
    expect(hnDefinition.mapData(payload)).toEqual({
      variant: 'frontMatter',
      payload,
    });
  });

  test('hn-without-ads definition exposes expected metadata', () => {
    expect(hnWithoutAdsDefinition.id).toBe('hn-without-ads');
    expect(hnWithoutAdsDefinition.featureFlags.ads).toBe(false);
    expect(hnWithoutAdsDefinition.sections.main).toBe('displayMain');
  });
});

describe('createTemplateFromDefinition', () => {
  test('routes payloads to correct renderer variant', () => {
    const template = createTemplateFromDefinition({
      id: 'demo',
      mapData: (input) => input,
      renderers: {
        simple: (payload) => `simple:${payload}`,
        frontMatter: (payload) => `front:${payload.value}`,
      },
    });

    expect(template.render({ variant: 'simple', payload: 'x' })).toBe('simple:x');
    expect(template.render({ variant: 'frontMatter', payload: { value: 'y' } })).toBe('front:y');
  });

  test('throws a clear error for unsupported variants', () => {
    const template = createTemplateFromDefinition({
      id: 'demo',
      mapData: () => ({ variant: 'missing', payload: {} }),
      renderers: {},
    });

    expect(() => template.render({})).toThrow(
      '[template:demo] unsupported render variant: missing'
    );
  });
});
