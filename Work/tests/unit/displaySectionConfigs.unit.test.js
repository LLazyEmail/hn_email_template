import { footerSectionConfig } from '../../src/display/displayFooter';
import { headSectionConfig } from '../../src/display/displayHead';
import { bodySectionConfig } from '../../src/display/displayBody';
import { mainSectionConfig } from '../../src/display/displayMain';
import { mainFrontSectionConfig } from '../../src/display/displayMainFront';
import { contentSectionConfig } from '../../src/display/displayContent';

// ---------------------------------------------------------------------------
// Shared helper: assert a config object satisfies the createDisplaySection contract
// ---------------------------------------------------------------------------

function assertValidConfig(config) {
  expect(config).toBeDefined();
  expect(typeof config.sectionName).toBe('string');
  expect(config.sectionName.length).toBeGreaterThan(0);
  if (config.requiredFields !== undefined) {
    expect(Array.isArray(config.requiredFields)).toBe(true);
  }
  if (config.defaults !== undefined) {
    expect(typeof config.defaults).toBe('object');
  }
  if (config.mapToFactorySettings !== undefined) {
    expect(typeof config.mapToFactorySettings).toBe('function');
  }
  expect(typeof config.render).toBe('function');
}

// ---------------------------------------------------------------------------
// footerSectionConfig
// ---------------------------------------------------------------------------

describe('footerSectionConfig - structure', () => {
  test('satisfies createDisplaySection contract', () => {
    assertValidConfig(footerSectionConfig);
  });

  test('sectionName is "displayFooter"', () => {
    expect(footerSectionConfig.sectionName).toBe('displayFooter');
  });

  test('requiredFields contains address, sponsor, copyright, unsubscribe', () => {
    expect(footerSectionConfig.requiredFields).toEqual(
      expect.arrayContaining(['address', 'sponsor', 'copyright', 'unsubscribe'])
    );
  });

  test('defaults provides all required fields', () => {
    const { defaults, requiredFields } = footerSectionConfig;
    for (const field of requiredFields) {
      expect(defaults[field]).toBeDefined();
      expect(defaults[field]).not.toBe('');
    }
  });

  test('mapToFactorySettings passes all four keys through', () => {
    const input = { address: 'a', sponsor: 's', copyright: 'c', unsubscribe: 'u' };
    const result = footerSectionConfig.mapToFactorySettings(input);
    expect(result).toEqual({ address: 'a', sponsor: 's', copyright: 'c', unsubscribe: 'u' });
  });

  test('render is a function that returns a string', () => {
    const result = footerSectionConfig.render({
      address: footerSectionConfig.defaults.address,
      sponsor: footerSectionConfig.defaults.sponsor,
      copyright: footerSectionConfig.defaults.copyright,
      unsubscribe: footerSectionConfig.defaults.unsubscribe,
    });
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// headSectionConfig
// ---------------------------------------------------------------------------

describe('headSectionConfig - structure', () => {
  test('satisfies createDisplaySection contract', () => {
    assertValidConfig(headSectionConfig);
  });

  test('sectionName is "displayHead"', () => {
    expect(headSectionConfig.sectionName).toBe('displayHead');
  });

  test('requiredFields contains title, headStyles, fonts', () => {
    expect(headSectionConfig.requiredFields).toEqual(
      expect.arrayContaining(['title', 'headStyles', 'fonts'])
    );
  });

  test('defaults.title is the expected DevOps string', () => {
    expect(headSectionConfig.defaults.title).toBe(
      'The Secrets of High-Performing DevOps teams'
    );
  });

  test('mapToFactorySettings passes title, headStyles, fonts through', () => {
    const input = { title: 't', headStyles: 'hs', fonts: 'f' };
    const result = headSectionConfig.mapToFactorySettings(input);
    expect(result).toEqual({ title: 't', headStyles: 'hs', fonts: 'f' });
  });

  test('render returns a string containing <head>', () => {
    const result = headSectionConfig.render({
      title: headSectionConfig.defaults.title,
      headStyles: headSectionConfig.defaults.headStyles,
      fonts: headSectionConfig.defaults.fonts,
    });
    expect(typeof result).toBe('string');
    expect(result).toContain('<head>');
  });
});

// ---------------------------------------------------------------------------
// bodySectionConfig
// ---------------------------------------------------------------------------

describe('bodySectionConfig - structure', () => {
  test('satisfies createDisplaySection contract', () => {
    assertValidConfig(bodySectionConfig);
  });

  test('sectionName is "displayBody"', () => {
    expect(bodySectionConfig.sectionName).toBe('displayBody');
  });

  test('requiredFields contains footer, logoTop, logoBottom, content, previewText', () => {
    expect(bodySectionConfig.requiredFields).toEqual(
      expect.arrayContaining(['footer', 'logoTop', 'logoBottom', 'content', 'previewText'])
    );
  });

  test('defaults provides all required fields', () => {
    const { defaults, requiredFields } = bodySectionConfig;
    for (const field of requiredFields) {
      expect(defaults[field]).toBeDefined();
      expect(defaults[field]).not.toBe('');
    }
  });

  test('mapToFactorySettings passes all five keys through', () => {
    const input = {
      footer: 'f',
      logoTop: 'lt',
      logoBottom: 'lb',
      content: 'c',
      previewText: 'pt',
    };
    const result = bodySectionConfig.mapToFactorySettings(input);
    expect(result).toEqual(input);
  });
});

// ---------------------------------------------------------------------------
// mainSectionConfig
// ---------------------------------------------------------------------------

describe('mainSectionConfig - structure', () => {
  test('satisfies createDisplaySection contract', () => {
    assertValidConfig(mainSectionConfig);
  });

  test('sectionName is "displayMain"', () => {
    expect(mainSectionConfig.sectionName).toBe('displayMain');
  });

  test('requiredFields contains head and body', () => {
    expect(mainSectionConfig.requiredFields).toEqual(
      expect.arrayContaining(['head', 'body'])
    );
  });

  test('mapToFactorySettings passes head and body through', () => {
    const input = { head: '<head/>', body: '<body/>' };
    expect(mainSectionConfig.mapToFactorySettings(input)).toEqual(input);
  });

  test('render returns a string containing DOCTYPE', () => {
    const result = mainSectionConfig.render({
      head: mainSectionConfig.defaults.head,
      body: mainSectionConfig.defaults.body,
    });
    expect(typeof result).toBe('string');
    expect(result).toContain('<!DOCTYPE html>');
  });
});

// ---------------------------------------------------------------------------
// mainFrontSectionConfig
// ---------------------------------------------------------------------------

describe('mainFrontSectionConfig - structure', () => {
  test('satisfies createDisplaySection contract', () => {
    assertValidConfig(mainFrontSectionConfig);
  });

  test('sectionName is "displayMainFront"', () => {
    expect(mainFrontSectionConfig.sectionName).toBe('displayMainFront');
  });

  test('requiredFields contains head and body', () => {
    expect(mainFrontSectionConfig.requiredFields).toEqual(
      expect.arrayContaining(['head', 'body'])
    );
  });

  test('mapToFactorySettings passes head and body through', () => {
    const input = { head: '<head/>', body: '<body/>' };
    expect(mainFrontSectionConfig.mapToFactorySettings(input)).toEqual(input);
  });
});

// ---------------------------------------------------------------------------
// contentSectionConfig
// ---------------------------------------------------------------------------

describe('contentSectionConfig - structure', () => {
  test('satisfies createDisplaySection contract', () => {
    assertValidConfig(contentSectionConfig);
  });

  test('sectionName is "displayContent"', () => {
    expect(contentSectionConfig.sectionName).toBe('displayContent');
  });

  test('requiredFields is empty or absent (content has no required inputs)', () => {
    const fields = contentSectionConfig.requiredFields;
    expect(fields === undefined || fields.length === 0).toBe(true);
  });

  test('render returns a non-empty string', () => {
    const result = contentSectionConfig.render();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
