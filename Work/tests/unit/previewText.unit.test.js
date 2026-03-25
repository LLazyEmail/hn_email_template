import previewTextComponent from '../../src/components/previewText/index';

describe('previewTextComponent - throws on missing or invalid content', () => {
  test('throws when content is not provided', () => {
    expect(() => previewTextComponent()).toThrow('invalid preview text');
  });

  test('throws when content is null', () => {
    expect(() => previewTextComponent(null)).toThrow('invalid preview text');
  });

  test('throws when content is undefined', () => {
    expect(() => previewTextComponent(undefined)).toThrow('invalid preview text');
  });

  test('throws when content is an empty string', () => {
    expect(() => previewTextComponent('')).toThrow('invalid preview text');
  });
});

describe('previewTextComponent - renders output when valid content is passed', () => {
  test('returns a string', () => {
    const result = previewTextComponent('Preview of the email');
    expect(typeof result).toBe('string');
  });

  test('rendered output contains the provided content', () => {
    const content = 'Preview of the email subject line';
    const result = previewTextComponent(content);
    expect(result).toContain(content);
  });

  test('rendered output contains conditional comment markers', () => {
    const result = previewTextComponent('Some preview text');
    expect(result).toContain('<!--[if !gte mso 9]>');
    expect(result).toContain('<![endif]-->');
  });

  test('works with special characters in content', () => {
    const content = 'Preview with <special> & "characters"';
    const result = previewTextComponent(content);
    expect(result).toContain(content);
  });

  test('works with a long preview text string', () => {
    const content = 'A'.repeat(200);
    const result = previewTextComponent(content);
    expect(result).toContain(content);
  });
});
