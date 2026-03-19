import footerComponent from '../src/components/footer';

const validParams = {
  address: '<span>123 Main St</span>',
  sponsor: '<a href="https://example.com">Sponsor</a>',
  copyright: '<span>© 2024 HackerNoon</span>',
  unsubscribe: '<a href="https://example.com/unsubscribe">Unsubscribe</a>',
};

describe('footerComponent - throws on missing required params', () => {
  test('throws when copyright is missing', () => {
    const { copyright, ...rest } = validParams;
    expect(() => footerComponent(rest)).toThrow();
  });

  test('throws when address is missing', () => {
    const { address, ...rest } = validParams;
    expect(() => footerComponent(rest)).toThrow();
  });

  test('throws when unsubscribe is missing', () => {
    const { unsubscribe, ...rest } = validParams;
    expect(() => footerComponent(rest)).toThrow();
  });

  test('throws when sponsor is missing', () => {
    const { sponsor, ...rest } = validParams;
    expect(() => footerComponent(rest)).toThrow();
  });
});

describe('footerComponent - renders HTML when valid params are passed', () => {
  test('returns a string', () => {
    const result = footerComponent(validParams);
    expect(typeof result).toBe('string');
  });

  test('rendered HTML contains the address', () => {
    const result = footerComponent(validParams);
    expect(result).toContain(validParams.address);
  });

  test('rendered HTML contains the copyright', () => {
    const result = footerComponent(validParams);
    expect(result).toContain(validParams.copyright);
  });

  test('rendered HTML contains the unsubscribe link', () => {
    const result = footerComponent(validParams);
    expect(result).toContain(validParams.unsubscribe);
  });

  test('rendered HTML contains the sponsor link', () => {
    const result = footerComponent(validParams);
    expect(result).toContain(validParams.sponsor);
  });
});
