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
const {
  createRegistry,
  renderTemplate: engineRenderById,
} = require('../../src/engine/templates');

describe('template registry', () => {
  test('contains the "hn" template', () => {
    expect(registry).toHaveProperty('hn');
    expect(typeof registry.hn.render).toBe('function');
  });

  test('legacy template registry delegates to engine registry', () => {
    expect(registry).toEqual(createRegistry([registry.hn, registry['hn-without-ads']]));
  });
});

describe('renderTemplate — success path', () => {
  test('renders the hn template and returns a non-empty string', () => {
    const result = renderTemplate('hn', '<p>Hello</p>');
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('legacy renderTemplate delegates to engine renderTemplate', () => {
    const payload = '<p>Delegation check</p>';
    expect(renderTemplate('hn', payload)).toBe(engineRenderById(registry, 'hn', payload));
  });
});

describe('renderTemplate — error path', () => {
  test('throws an error for an unknown template id', () => {
    expect(() => renderTemplate('unknown_template', {})).toThrow(
      'Unknown template: "unknown_template"'
    );
  });
});
