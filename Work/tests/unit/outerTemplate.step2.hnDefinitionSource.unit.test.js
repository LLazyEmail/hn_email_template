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

const { buildHnDefinition } = require('../../../sub-modules/outerTemplate/src/runtime/displayRuntimeDeps');
const { mapHnInputToVariant } = require('@llazyemail/template-presets-hn');

describe('outerTemplate step 2 definition source', () => {
  test('hn registry definition uses preset package mapping function', () => {
    const definition = buildHnDefinition();
    expect(definition.mapData).toBe(mapHnInputToVariant);
  });

  test('hn registry definition retains display section metadata', () => {
    const definition = buildHnDefinition();
    expect(definition.sections).toEqual({
      head: 'displayHead',
      body: 'displayBody',
      footer: 'displayFooter',
      main: 'displayMain',
    });
  });

  test('hn registry definition keeps expected feature flags', () => {
    const definition = buildHnDefinition();
    expect(definition.featureFlags).toEqual({
      ads: true,
      blocks: ['hero', 'ads', 'image-grid'],
    });
  });
});
