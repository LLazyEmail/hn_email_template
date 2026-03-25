jest.mock('atherdon-newsletter-js-layouts-misc', () => {
  const mock = {
    addressComponent: ({ mailingAddress }) => `<address>${mailingAddress}</address>`,
    copyrightsComponent: () => '<span>copyright</span>',
    newsletterSponsorshipLinkComponent: ({ contact }) => `<a href="${contact}">sponsor</a>`,
    unsubscribeComponent: ({ unsubscribe, unsubscribeLink }) =>
      `<a href="${unsubscribe ?? unsubscribeLink}">unsubscribe</a>`,
    fontsComponent: () => '<style>.mock-fonts{}</style>',
  };
  return {
    __esModule: true,
    default: mock,
  };
}, { virtual: true });

jest.mock('atherdon-newsletter-js-layouts-body', () => {
  const mock = {
    logoBottomComponent: () => '<div>logo-bottom</div>',
    logoTopComponent: () => '<div>logo-top</div>',
  };
  return {
    __esModule: true,
    default: mock,
  };
}, { virtual: true });

const { registry, renderTemplate } = require('../../src/templates');
const displayTemplate = require('../../src/t/displayTemplate').default;
const displayFrontMatterTemplate = require('../../src/t/displayFrontMatterTemplate').default;
const data = require('../../src/data').default;
const { innerContentComponent } = require('../../src/components');

describe('Phase 1 freeze: template behavior contract', () => {
  test('registry keeps current template ids stable', () => {
    expect(Object.keys(registry)).toEqual(['hn']);
  });

  test('hn template delegates string payloads to displayTemplate', () => {
    const content = '<p>Phase 1 freeze content</p>';
    const viaRegistry = registry.hn.render(content);
    const direct = displayTemplate(content);
    expect(viaRegistry).toBe(direct);
  });

  test('hn template delegates front-matter payloads to displayFrontMatterTemplate', () => {
    const payload = { string: innerContentComponent(), data };
    const viaRegistry = registry.hn.render(payload);
    const direct = displayFrontMatterTemplate(payload);
    expect(viaRegistry).toBe(direct);
  });
});

describe('Phase 1 freeze: renderTemplate snapshots', () => {
  test('renderTemplate("hn", string) output is stable', () => {
    const result = renderTemplate('hn', '<p>Phase 1 snapshot content</p>');
    expect(result).toMatchSnapshot();
  });

  test('renderTemplate("hn", { string, data }) output is stable', () => {
    const result = renderTemplate('hn', { string: innerContentComponent(), data });
    expect(result).toMatchSnapshot();
  });
});
