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

const outerTemplateModule = require('atherdon-newsletter-js-layouts-outertemplate');
const outerTemplate = outerTemplateModule.default;
const data = require('../../src/data').default;
const { innerContentComponent } = require('../../src/components');

describe('outerTemplate runtime extended coverage', () => {
  test('named exports and default exports align for runtime APIs', () => {
    expect(outerTemplateModule.renderTemplate).toBe(outerTemplate.renderTemplate);
    expect(outerTemplateModule.registry).toBe(outerTemplate.registry);
    expect(outerTemplateModule.methods).toBe(outerTemplate.methods);
  });

  test('top-level method aliases point to methods object', () => {
    expect(outerTemplate.printTemplate).toBe(outerTemplate.methods.printTemplate);
    expect(outerTemplate.printTemplateData).toBe(
      outerTemplate.methods.printTemplateData
    );
    expect(outerTemplate.printHead).toBe(outerTemplate.methods.printHead);
    expect(outerTemplate.printBody).toBe(outerTemplate.methods.printBody);
    expect(outerTemplate.printFooter).toBe(outerTemplate.methods.printFooter);
    expect(outerTemplate.printMain).toBe(outerTemplate.methods.printMain);
  });

  test('registry contains hn template with callable renderer', () => {
    expect(Object.keys(outerTemplate.registry)).toEqual(['hn']);
    expect(typeof outerTemplate.registry.hn.render).toBe('function');
  });

  test('renderTemplate supports simple payloads', () => {
    const html = outerTemplate.renderTemplate('hn', '<p>outer-template-simple</p>');
    expect(typeof html).toBe('string');
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('outer-template-simple');
  });

  test('renderTemplate supports front-matter payloads', () => {
    const html = outerTemplate.renderTemplate('hn', {
      string: innerContentComponent(),
      data,
    });
    expect(typeof html).toBe('string');
    expect(html).toContain(data.title);
    expect(html).toContain(data.preview.slice(0, 24));
  });

  test('renderTemplate throws for unknown template id', () => {
    expect(() => outerTemplate.renderTemplate('missing-template', {})).toThrow(
      'Unknown template: "missing-template"'
    );
  });

  test('printTemplate mirrors renderTemplate("hn", string)', () => {
    const payload = '<p>method-path</p>';
    expect(outerTemplate.printTemplate(payload)).toBe(
      outerTemplate.renderTemplate('hn', payload)
    );
  });

  test('printTemplateData mirrors renderTemplate("hn", frontMatterPayload)', () => {
    const payload = {
      string: innerContentComponent(),
      data,
    };
    expect(outerTemplate.printTemplateData(payload)).toBe(
      outerTemplate.renderTemplate('hn', payload)
    );
  });
});
