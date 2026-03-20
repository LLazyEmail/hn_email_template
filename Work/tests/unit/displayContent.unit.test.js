import { displayContent, ContentHTMLString, contentSectionConfig } from '../../src/display/displayContent';

describe('displayContent function', () => {
  test('displayContent is a function', () => {
    expect(typeof displayContent).toBe('function');
  });

  test('displayContent() returns a string', () => {
    expect(typeof displayContent()).toBe('string');
  });

  test('displayContent() output is non-empty', () => {
    expect(displayContent().length).toBeGreaterThan(0);
  });

  test('displayContent() output contains a <table> element', () => {
    expect(displayContent()).toContain('<table');
  });

  test('displayContent() is deterministic (same output on repeated calls)', () => {
    expect(displayContent()).toBe(displayContent());
  });
});

describe('displayContent - ContentHTMLString', () => {
  test('ContentHTMLString is defined', () => {
    expect(ContentHTMLString).toBeDefined();
  });

  test('ContentHTMLString is a string', () => {
    expect(typeof ContentHTMLString).toBe('string');
  });

  test('ContentHTMLString is non-empty', () => {
    expect(ContentHTMLString.length).toBeGreaterThan(0);
  });

  test('ContentHTMLString equals displayContent() output', () => {
    expect(ContentHTMLString).toBe(displayContent());
  });
});

describe('displayContent - contentSectionConfig', () => {
  test('contentSectionConfig is exported', () => {
    expect(contentSectionConfig).toBeDefined();
  });

  test('contentSectionConfig.sectionName is "displayContent"', () => {
    expect(contentSectionConfig.sectionName).toBe('displayContent');
  });

  test('contentSectionConfig.render is a function', () => {
    expect(typeof contentSectionConfig.render).toBe('function');
  });

  test('contentSectionConfig.render() returns the same content as displayContent()', () => {
    expect(contentSectionConfig.render()).toBe(displayContent());
  });
});
