import headComponent from '../../src/components/headComponent/index';

const validParams = {
  title: 'Test Email Title',
  headStyles: '<style>body { margin: 0; }</style>',
  fonts: '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />',
};

describe('headComponent - throws on missing required params', () => {
  test('throws when title is missing', () => {
    const { title, ...rest } = validParams;
    expect(() => headComponent(rest)).toThrow('no title was passed');
  });

  test('throws when title is null', () => {
    expect(() => headComponent({ ...validParams, title: null })).toThrow('no title was passed');
  });

  test('throws when title is empty string', () => {
    expect(() => headComponent({ ...validParams, title: '' })).toThrow('no title was passed');
  });

  test('throws when headStyles is missing', () => {
    const { headStyles, ...rest } = validParams;
    expect(() => headComponent(rest)).toThrow('no headStyles was passed');
  });

  test('throws when headStyles is null', () => {
    expect(() => headComponent({ ...validParams, headStyles: null })).toThrow('no headStyles was passed');
  });

  test('throws when fonts is missing', () => {
    const { fonts, ...rest } = validParams;
    expect(() => headComponent(rest)).toThrow('no fonts was passed');
  });

  test('throws when fonts is null', () => {
    expect(() => headComponent({ ...validParams, fonts: null })).toThrow('no fonts was passed');
  });

  test('throws when fonts is empty string', () => {
    expect(() => headComponent({ ...validParams, fonts: '' })).toThrow('no fonts was passed');
  });
});

describe('headComponent - renders HTML when valid params are passed', () => {
  test('returns a string', () => {
    const result = headComponent(validParams);
    expect(typeof result).toBe('string');
  });

  test('rendered HTML contains the title', () => {
    const result = headComponent(validParams);
    expect(result).toContain(validParams.title);
  });

  test('rendered HTML contains the headStyles', () => {
    const result = headComponent(validParams);
    expect(result).toContain(validParams.headStyles);
  });

  test('rendered HTML contains the fonts', () => {
    const result = headComponent(validParams);
    expect(result).toContain(validParams.fonts);
  });

  test('rendered HTML contains a <head> tag', () => {
    const result = headComponent(validParams);
    expect(result).toContain('<head>');
    expect(result).toContain('</head>');
  });

  test('rendered HTML contains UTF-8 charset meta tag', () => {
    const result = headComponent(validParams);
    expect(result).toContain('charset="UTF-8"');
  });
});
