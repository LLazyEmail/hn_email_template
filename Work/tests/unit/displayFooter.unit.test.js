import { displayFooter, FooterHTMLString } from '../../src/display/sections/footer';

describe('displayFooter function', () => {
  test('displayFooter is a function', () => {
    expect(typeof displayFooter).toBe('function');
  });

  test('displayFooter() returns a string', () => {
    const result = displayFooter();
    expect(typeof result).toBe('string');
  });

  test('displayFooter() output is non-empty', () => {
    expect(displayFooter().length).toBeGreaterThan(0);
  });

  test('displayFooter() output contains a <table> element', () => {
    expect(displayFooter()).toContain('<table');
  });

  test('displayFooter() uses default address', () => {
    const result = displayFooter();
    expect(result).toContain('PO Box 2206');
  });

  test('displayFooter() uses default sponsor link', () => {
    const result = displayFooter();
    expect(result).toContain('sponsor.hackernoon.com');
  });

  test('displayFooter() output contains unsubscribe link element', () => {
    const result = displayFooter();
    expect(result).toContain('unsubscribe');
  });

  test('displayFooter() with custom address includes it in output', () => {
    const { addressComponent } = require('atherdon-newsletter-js-layouts-misc');
    const customAddress = addressComponent({ mailingAddress: '123 Custom St, Denver CO, 80202' });
    const result = displayFooter({ address: customAddress });
    expect(result).toContain('123 Custom St');
  });

  test('displayFooter() throws for missing required field: address', () => {
    expect(() => displayFooter({ address: null })).toThrow(
      '[displayFooter] missing required field: address'
    );
  });

  test('displayFooter() throws for empty string required field: sponsor', () => {
    expect(() => displayFooter({ sponsor: '' })).toThrow(
      '[displayFooter] missing required field: sponsor'
    );
  });
});

describe('displayFooter - FooterHTMLString', () => {
  test('FooterHTMLString is defined', () => {
    expect(FooterHTMLString).toBeDefined();
  });

  test('FooterHTMLString is a string', () => {
    expect(typeof FooterHTMLString).toBe('string');
  });

  test('FooterHTMLString is non-empty', () => {
    expect(FooterHTMLString.length).toBeGreaterThan(0);
  });

  test('FooterHTMLString contains the default address', () => {
    expect(FooterHTMLString).toContain('PO Box 2206');
  });

  test('FooterHTMLString contains the default sponsor link', () => {
    expect(FooterHTMLString).toContain('sponsor.hackernoon.com');
  });

  test('FooterHTMLString contains an unsubscribe link element', () => {
    expect(FooterHTMLString).toContain('unsubscribe');
  });

  test('FooterHTMLString contains a <table> element (email table layout)', () => {
    expect(FooterHTMLString).toContain('<table');
  });

  test('FooterHTMLString equals displayFooter() output', () => {
    expect(FooterHTMLString).toBe(displayFooter());
  });
});
