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

const { renderDisplayTemplate, renderDisplayFrontMatterTemplate } = require('../../src/engine/display');
const { settings: headSettings } = require('../../src/display/sections/head');
const { settings: bodySettings } = require('../../src/display/sections/body');
const { settings: mainSettings } = require('../../src/display/sections/main');
const data = require('../../src/data').default;
const { innerContentComponent } = require('../../src/components');

describe('display renderers remain pure and non-mutating', () => {
  test('renderDisplayTemplate does not mutate shared settings objects', () => {
    const before = {
      bodyContent: bodySettings.params.content,
      mainBody: mainSettings.params.body,
    };

    const html = renderDisplayTemplate('<p>new content</p>');

    expect(typeof html).toBe('string');
    expect(bodySettings.params.content).toBe(before.bodyContent);
    expect(mainSettings.params.body).toBe(before.mainBody);
  });

  test('renderDisplayFrontMatterTemplate does not mutate shared settings objects', () => {
    const before = {
      headTitle: headSettings.params.title,
      bodyContent: bodySettings.params.content,
      bodyPreview: bodySettings.params.previewText,
      mainHead: mainSettings.params.head,
      mainBody: mainSettings.params.body,
    };

    const html = renderDisplayFrontMatterTemplate({
      string: innerContentComponent(),
      data,
    });

    expect(typeof html).toBe('string');
    expect(headSettings.params.title).toBe(before.headTitle);
    expect(bodySettings.params.content).toBe(before.bodyContent);
    expect(bodySettings.params.previewText).toBe(before.bodyPreview);
    expect(mainSettings.params.head).toBe(before.mainHead);
    expect(mainSettings.params.body).toBe(before.mainBody);
  });
});
