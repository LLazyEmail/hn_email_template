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
const { createRegistry, renderTemplate } = require('../../src/engine/templates');

describe('template engine contract', () => {
  test('createTemplateRegistry indexes templates by id', () => {
    const registry = createRegistry([hnTemplate]);
    expect(Object.keys(registry)).toEqual(['hn']);
    expect(typeof registry.hn.render).toBe('function');
  });

  test('renderById renders known template id', () => {
    const registry = createRegistry([hnTemplate]);
    const html = renderTemplate(registry, 'hn', '<p>engine contract</p>');
    expect(typeof html).toBe('string');
    expect(html.length).toBeGreaterThan(0);
  });

  test('renderById throws for unknown id', () => {
    const registry = createRegistry([hnTemplate]);
    expect(() => renderTemplate(registry, 'missing', {})).toThrow('Unknown template: "missing"');
  });
});
