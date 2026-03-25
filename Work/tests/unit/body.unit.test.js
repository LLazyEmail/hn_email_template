import EmailTemplateBodyComponent from '../../src/components/body/index';

const validParams = {
  footer: '<tr><td>Footer content</td></tr>',
  logoTop: '<img src="https://example.com/logo-top.png" alt="Logo Top" />',
  logoBottom: '<img src="https://example.com/logo-bottom.png" alt="Logo Bottom" />',
  content: '<table><tr><td>Article content</td></tr></table>',
  previewText: '<!--[if !gte mso 9]><!---->Preview text<!--<![endif]-->',
};

describe('EmailTemplateBodyComponent - throws on missing required params', () => {
  test('throws when footer is missing', () => {
    const { footer, ...rest } = validParams;
    expect(() => EmailTemplateBodyComponent(rest)).toThrow('no footer was passed');
  });

  test('throws when footer is null', () => {
    expect(() => EmailTemplateBodyComponent({ ...validParams, footer: null })).toThrow('no footer was passed');
  });

  test('throws when footer is empty string', () => {
    expect(() => EmailTemplateBodyComponent({ ...validParams, footer: '' })).toThrow('no footer was passed');
  });

  test('throws when logoTop is missing', () => {
    const { logoTop, ...rest } = validParams;
    expect(() => EmailTemplateBodyComponent(rest)).toThrow('invalid logo');
  });

  test('throws when logoTop is null', () => {
    expect(() => EmailTemplateBodyComponent({ ...validParams, logoTop: null })).toThrow('invalid logo');
  });

  test('throws when logoBottom is missing', () => {
    const { logoBottom, ...rest } = validParams;
    expect(() => EmailTemplateBodyComponent(rest)).toThrow('invalid logo');
  });

  test('throws when logoBottom is null', () => {
    expect(() => EmailTemplateBodyComponent({ ...validParams, logoBottom: null })).toThrow('invalid logo');
  });

  test('throws when previewText is missing', () => {
    const { previewText, ...rest } = validParams;
    expect(() => EmailTemplateBodyComponent(rest)).toThrow('invalid preview text');
  });

  test('throws when previewText is null', () => {
    expect(() => EmailTemplateBodyComponent({ ...validParams, previewText: null })).toThrow('invalid preview text');
  });

  test('throws when previewText is empty string', () => {
    expect(() => EmailTemplateBodyComponent({ ...validParams, previewText: '' })).toThrow('invalid preview text');
  });
});

describe('EmailTemplateBodyComponent - renders HTML when valid params are passed', () => {
  test('returns a string', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(typeof result).toBe('string');
  });

  test('rendered HTML contains a <body> tag', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(result).toContain('<body');
    expect(result).toContain('</body>');
  });

  test('rendered HTML contains the footer content', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(result).toContain(validParams.footer);
  });

  test('rendered HTML contains the logoTop content', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(result).toContain(validParams.logoTop);
  });

  test('rendered HTML contains the logoBottom content', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(result).toContain(validParams.logoBottom);
  });

  test('rendered HTML contains the previewText content', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(result).toContain(validParams.previewText);
  });

  test('rendered HTML is non-empty', () => {
    const result = EmailTemplateBodyComponent(validParams);
    expect(result.length).toBeGreaterThan(0);
  });
});
