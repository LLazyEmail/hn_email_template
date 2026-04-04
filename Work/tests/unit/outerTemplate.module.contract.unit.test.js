jest.mock('atherdon-newsletter-js-layouts-misc', () => ({
  __esModule: true,
  default: {
    fontsComponent: () => '<fonts-component />',
    addressComponent: ({ mailingAddress }) =>
      `<address>${mailingAddress}</address>`,
    copyrightsComponent: () => '<copyrights-component />',
    newsletterSponsorshipLinkComponent: ({ contact }) =>
      `<sponsor>${contact}</sponsor>`,
    unsubscribeComponent: ({ unsubscribeLink }) =>
      `<unsubscribe>${unsubscribeLink}</unsubscribe>`,
  },
}), { virtual: true });

jest.mock('atherdon-newsletter-js-layouts-body', () => ({
  __esModule: true,
  default: {
    logoTopComponent: () => '<logo-top-component />',
    logoBottomComponent: () => '<logo-bottom-component />',
  },
}), { virtual: true });

const workModule = require('../../src').default;
const workMethods = require('../../src/methods');
const outerTemplate = require('atherdon-newsletter-js-layouts-outertemplate').default;

describe('Work delegates template runtime to outerTemplate module', () => {
  test('renderTemplate reference is delegated', () => {
    expect(workModule.renderTemplate).toBe(outerTemplate.renderTemplate);
  });

  test('printTemplate delegates to outerTemplate implementation', () => {
    const payload = '<p>delegation check</p>';
    expect(workMethods.printTemplate(payload)).toBe(
      outerTemplate.printTemplate(payload)
    );
  });

  test('printTemplateData delegates to outerTemplate implementation', () => {
    const payload = {
      string: '<p>delegation check</p>',
      data: { title: 'Delegation', preview: 'preview text' },
    };
    expect(workMethods.printTemplateData(payload)).toBe(
      outerTemplate.printTemplateData(payload)
    );
  });
});
