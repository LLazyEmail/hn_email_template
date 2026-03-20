import { buildHeadModel } from '../../../src/display/models/buildHeadModel';
import { buildFooterModel } from '../../../src/display/models/buildFooterModel';
import { buildBodyModel } from '../../../src/display/models/buildBodyModel';
import { buildMainModel } from '../../../src/display/models/buildMainModel';
import { buildMainFrontModel } from '../../../src/display/models/buildMainFrontModel';

// ---------------------------------------------------------------------------
// buildHeadModel
// ---------------------------------------------------------------------------

describe('buildHeadModel', () => {
  test('returns an object with title, headStyles, fonts', () => {
    const input = { title: 'My Title', headStyles: '<style/>', fonts: '<link/>' };
    expect(buildHeadModel(input)).toEqual({
      title: 'My Title',
      headStyles: '<style/>',
      fonts: '<link/>',
    });
  });

  test('passes values through without mutation', () => {
    const input = { title: 'T', headStyles: 'S', fonts: 'F', extra: 'ignored' };
    const model = buildHeadModel(input);
    expect(model.title).toBe('T');
    expect(model.headStyles).toBe('S');
    expect(model.fonts).toBe('F');
  });

  test('does not include extra fields from input', () => {
    const input = { title: 'T', headStyles: 'S', fonts: 'F', extra: 'ignored' };
    const model = buildHeadModel(input);
    expect(Object.keys(model)).toEqual(['title', 'headStyles', 'fonts']);
  });

  test('returns a new object each call (no shared reference)', () => {
    const input = { title: 'T', headStyles: 'S', fonts: 'F' };
    const a = buildHeadModel(input);
    const b = buildHeadModel(input);
    expect(a).not.toBe(b);
    expect(a).toEqual(b);
  });

  test('propagates undefined values (validation is responsibility of caller)', () => {
    const model = buildHeadModel({});
    expect(model).toEqual({ title: undefined, headStyles: undefined, fonts: undefined });
  });
});

// ---------------------------------------------------------------------------
// buildFooterModel
// ---------------------------------------------------------------------------

describe('buildFooterModel', () => {
  test('returns an object with address, sponsor, copyright, unsubscribe', () => {
    const input = {
      address: '<span>123 Street</span>',
      sponsor: '<a href="#">Sponsor</a>',
      copyright: '<span>© 2024</span>',
      unsubscribe: '<a href="#">Unsubscribe</a>',
    };
    expect(buildFooterModel(input)).toEqual(input);
  });

  test('does not include extra fields from input', () => {
    const input = {
      address: 'a',
      sponsor: 's',
      copyright: 'c',
      unsubscribe: 'u',
      extra: 'should not appear',
    };
    const model = buildFooterModel(input);
    expect(Object.keys(model)).toEqual(['address', 'sponsor', 'copyright', 'unsubscribe']);
  });

  test('returns a new object each call', () => {
    const input = { address: 'a', sponsor: 's', copyright: 'c', unsubscribe: 'u' };
    expect(buildFooterModel(input)).not.toBe(buildFooterModel(input));
  });

  test('propagates undefined values', () => {
    const model = buildFooterModel({});
    expect(model).toEqual({
      address: undefined,
      sponsor: undefined,
      copyright: undefined,
      unsubscribe: undefined,
    });
  });
});

// ---------------------------------------------------------------------------
// buildBodyModel
// ---------------------------------------------------------------------------

describe('buildBodyModel', () => {
  test('returns an object with footer, logoTop, logoBottom, content, previewText', () => {
    const input = {
      footer: '<footer/>',
      logoTop: '<img id="top"/>',
      logoBottom: '<img id="bottom"/>',
      content: '<article/>',
      previewText: '[Preview]',
    };
    expect(buildBodyModel(input)).toEqual(input);
  });

  test('does not include extra fields from input', () => {
    const input = {
      footer: 'f',
      logoTop: 'lt',
      logoBottom: 'lb',
      content: 'c',
      previewText: 'pt',
      extra: 'noise',
    };
    const model = buildBodyModel(input);
    expect(Object.keys(model)).toEqual([
      'footer',
      'logoTop',
      'logoBottom',
      'content',
      'previewText',
    ]);
  });

  test('returns a new object each call', () => {
    const input = { footer: 'f', logoTop: 'lt', logoBottom: 'lb', content: 'c', previewText: 'pt' };
    expect(buildBodyModel(input)).not.toBe(buildBodyModel(input));
  });

  test('propagates undefined values', () => {
    const model = buildBodyModel({});
    expect(model).toEqual({
      footer: undefined,
      logoTop: undefined,
      logoBottom: undefined,
      content: undefined,
      previewText: undefined,
    });
  });
});

// ---------------------------------------------------------------------------
// buildMainModel
// ---------------------------------------------------------------------------

describe('buildMainModel', () => {
  test('returns an object with head and body', () => {
    const input = { head: '<head/>', body: '<body/>' };
    expect(buildMainModel(input)).toEqual({ head: '<head/>', body: '<body/>' });
  });

  test('does not include extra fields from input', () => {
    const input = { head: 'h', body: 'b', extra: 'noise' };
    expect(Object.keys(buildMainModel(input))).toEqual(['head', 'body']);
  });

  test('returns a new object each call', () => {
    const input = { head: 'h', body: 'b' };
    expect(buildMainModel(input)).not.toBe(buildMainModel(input));
  });

  test('propagates undefined values', () => {
    expect(buildMainModel({})).toEqual({ head: undefined, body: undefined });
  });
});

// ---------------------------------------------------------------------------
// buildMainFrontModel
// ---------------------------------------------------------------------------

describe('buildMainFrontModel', () => {
  test('returns an object with head and body', () => {
    const input = { head: '<head/>', body: '<body/>' };
    expect(buildMainFrontModel(input)).toEqual({ head: '<head/>', body: '<body/>' });
  });

  test('does not include extra fields from input', () => {
    const input = { head: 'h', body: 'b', extra: 'noise' };
    expect(Object.keys(buildMainFrontModel(input))).toEqual(['head', 'body']);
  });

  test('returns a new object each call', () => {
    const input = { head: 'h', body: 'b' };
    expect(buildMainFrontModel(input)).not.toBe(buildMainFrontModel(input));
  });

  test('propagates undefined values', () => {
    expect(buildMainFrontModel({})).toEqual({ head: undefined, body: undefined });
  });
});
