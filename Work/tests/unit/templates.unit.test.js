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

const { registry, renderTemplate } = require('../../src/templates');

describe('template registry', () => {
  test('contains the "hn" template', () => {
    expect(registry).toHaveProperty('hn');
    expect(typeof registry.hn.render).toBe('function');
  });
});

describe('renderTemplate — success path', () => {
  test('renders the hn template and returns a non-empty string', () => {
    const result = renderTemplate('hn', '<p>Hello</p>');
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('renderTemplate — error path', () => {
  test('throws an error for an unknown template id', () => {
    expect(() => renderTemplate('unknown_template', {})).toThrow(
      'Unknown template: "unknown_template"'
    );
  });
});
