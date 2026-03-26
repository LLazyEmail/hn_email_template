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

const {
  buildHnWithoutAdsDefinition,
} = require('../../../sub-modules/outerTemplate/src/runtime/displayRuntimeDeps');
const {
  mapHnWithoutAdsInputToVariant,
} = require('@llazyemail/template-presets-hn');

describe('outerTemplate step 3 definition source', () => {
  test('hn-without-ads definition uses preset package mapping function', () => {
    const definition = buildHnWithoutAdsDefinition();
    expect(definition.mapData).toBe(mapHnWithoutAdsInputToVariant);
  });

  test('hn-without-ads definition retains display section metadata', () => {
    const definition = buildHnWithoutAdsDefinition();
    expect(definition.sections).toEqual({
      head: 'displayHead',
      body: 'displayBody',
      footer: 'displayFooter',
      main: 'displayMain',
    });
  });

  test('hn-without-ads definition keeps expected feature flags', () => {
    const definition = buildHnWithoutAdsDefinition();
    expect(definition.featureFlags).toEqual({
      ads: false,
      blocks: ['hero', 'image-grid'],
    });
  });
});
