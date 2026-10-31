import outerTemplate from '../src/index';

describe('outerTemplate components', () => {
  test('exports component functions', () => {
    expect(typeof outerTemplate).toBe('object');
    expect(outerTemplate).not.toBeNull();
    expect(typeof outerTemplate.bodyComponent).toBe('function');
    expect(typeof outerTemplate.headComponent).toBe('function');
    expect(typeof outerTemplate.mainComponent).toBe('function');
    expect(typeof outerTemplate.footerComponent).toBe('function');
    expect(typeof outerTemplate.headStylesComponent).toBe('function');
  });

  test('headComponent renders title when required fields are present', () => {
    const html = outerTemplate.headComponent({
      title: 'Newsletter',
      headStyles: '<style></style>',
      fonts: '<link />',
    });
    expect(html).toContain('<head>');
    expect(html).toContain('Newsletter');
  });

  test('mainComponent wraps head and body', () => {
    const html = outerTemplate.mainComponent({
      head: '<head></head>',
      body: '<body>content</body>',
    });
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('<head></head>');
    expect(html).toContain('<body>content</body>');
  });

  test('exports renderTemplate and methods facade', () => {
    expect(typeof outerTemplate.renderTemplate).toBe('function');
    expect(typeof outerTemplate.methods).toBe('object');
    expect(typeof outerTemplate.methods.printTemplate).toBe('function');
    expect(typeof outerTemplate.methods.printTemplateData).toBe('function');
  });
});
