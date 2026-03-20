import mainComponent from '../../src/components/mainComponent';

const validParams = {
  head: '<head><title>Test</title></head>',
  body: '<body><p>Hello</p></body>',
};

describe('mainComponent - throws on missing or invalid params', () => {
  test('throws when no params are passed', () => {
    expect(() => mainComponent()).toThrow('no Sub Components was passed');
  });

  test('throws when params is null', () => {
    expect(() => mainComponent(null)).toThrow('no Sub Components was passed');
  });

  test('throws when head is missing', () => {
    const { head, ...rest } = validParams;
    expect(() => mainComponent(rest)).toThrow('no head was passed');
  });

  test('throws when head is null', () => {
    expect(() => mainComponent({ ...validParams, head: null })).toThrow('no head was passed');
  });

  test('throws when head is empty string', () => {
    expect(() => mainComponent({ ...validParams, head: '' })).toThrow('no head was passed');
  });

  test('throws when head is a non-string value', () => {
    expect(() => mainComponent({ ...validParams, head: 123 })).toThrow('no head was passed');
  });

  test('throws when body is missing', () => {
    const { body, ...rest } = validParams;
    expect(() => mainComponent(rest)).toThrow('no body was passed');
  });

  test('throws when body is null', () => {
    expect(() => mainComponent({ ...validParams, body: null })).toThrow('no body was passed');
  });

  test('throws when body is empty string', () => {
    expect(() => mainComponent({ ...validParams, body: '' })).toThrow('no body was passed');
  });

  test('throws when body is a non-string value', () => {
    expect(() => mainComponent({ ...validParams, body: 456 })).toThrow('no body was passed');
  });
});

describe('mainComponent - renders HTML when valid params are passed', () => {
  test('returns a string', () => {
    const result = mainComponent(validParams);
    expect(typeof result).toBe('string');
  });

  test('rendered HTML contains a DOCTYPE declaration', () => {
    const result = mainComponent(validParams);
    expect(result).toContain('<!DOCTYPE html>');
  });

  test('rendered HTML contains the head content', () => {
    const result = mainComponent(validParams);
    expect(result).toContain(validParams.head);
  });

  test('rendered HTML contains the body content', () => {
    const result = mainComponent(validParams);
    expect(result).toContain(validParams.body);
  });

  test('rendered HTML wraps content in an <html> element', () => {
    const result = mainComponent(validParams);
    expect(result).toContain('<html');
    expect(result).toContain('</html>');
  });
});
