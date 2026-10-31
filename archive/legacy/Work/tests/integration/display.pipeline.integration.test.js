/**
 * Integration tests for display* pipeline functions.
 *
 * Each suite exercises the full end-to-end flow:
 *   input → defaults/validation → mapping → renderer output
 *
 * Representative modules covered: displayFooter, displayHead,
 * displayBody, displayContent, displayMain.
 *
 * Negative-path assertions are included to confirm that the
 * validation layer fires correctly within the full pipeline.
 */

import { displayFooter } from '../../src/display/sections/footer';
import { displayHead } from '../../src/display/sections/head';
import { displayBody } from '../../src/display/sections/body';
import { displayContent } from '../../src/display/sections/content';
import { displayMain } from '../../src/display/sections/main';

// ---------------------------------------------------------------------------
// Realistic payloads
// ---------------------------------------------------------------------------

const FOOTER_PAYLOAD = {
  address: '<span>123 Main Street, San Francisco CA, 94105, U.S.A.</span>',
  sponsor: '<a href="https://sponsor.hackernoon.com">Become a Sponsor</a>',
  copyright: '<span>© 2024 HackerNoon All Rights Reserved.</span>',
  unsubscribe: '<a href="https://hackernoon.com/unsubscribe">Unsubscribe Here</a>',
};

const HEAD_PAYLOAD = {
  title: 'Weekly HackerNoon Newsletter — Top Stories',
  headStyles: '<style type="text/css">body { margin: 0; padding: 0; }</style>',
  fonts: '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />',
};

// ---------------------------------------------------------------------------
// displayFooter — end-to-end pipeline
// ---------------------------------------------------------------------------

describe('displayFooter — end-to-end pipeline', () => {
  test('renders a non-empty HTML string from a realistic payload', () => {
    const result = displayFooter(FOOTER_PAYLOAD);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('output includes the custom address', () => {
    const result = displayFooter(FOOTER_PAYLOAD);
    expect(result).toContain('123 Main Street');
  });

  test('output includes the custom sponsor link text', () => {
    const result = displayFooter(FOOTER_PAYLOAD);
    expect(result).toContain('Become a Sponsor');
  });

  test('output includes the copyright notice', () => {
    const result = displayFooter(FOOTER_PAYLOAD);
    expect(result).toContain('HackerNoon All Rights Reserved');
  });

  test('output includes the unsubscribe link text', () => {
    const result = displayFooter(FOOTER_PAYLOAD);
    expect(result).toContain('Unsubscribe Here');
  });

  test('output contains a <table> element (email table layout)', () => {
    const result = displayFooter(FOOTER_PAYLOAD);
    expect(result).toContain('<table');
  });

  // negative paths
  test('throws with correct message when address is null', () => {
    expect(() => displayFooter({ ...FOOTER_PAYLOAD, address: null })).toThrow(
      '[displayFooter] missing required field: address'
    );
  });

  test('throws with correct message when sponsor is an empty string', () => {
    expect(() => displayFooter({ ...FOOTER_PAYLOAD, sponsor: '' })).toThrow(
      '[displayFooter] missing required field: sponsor'
    );
  });

  test('throws with correct message when copyright is null', () => {
    expect(() => displayFooter({ ...FOOTER_PAYLOAD, copyright: null })).toThrow(
      '[displayFooter] missing required field: copyright'
    );
  });
});

// ---------------------------------------------------------------------------
// displayHead — end-to-end pipeline
// ---------------------------------------------------------------------------

describe('displayHead — end-to-end pipeline', () => {
  test('renders a non-empty HTML string from a realistic payload', () => {
    const result = displayHead(HEAD_PAYLOAD);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('output contains a <head> element', () => {
    const result = displayHead(HEAD_PAYLOAD);
    expect(result).toContain('<head>');
  });

  test('output includes the custom title', () => {
    const result = displayHead(HEAD_PAYLOAD);
    expect(result).toContain('Weekly HackerNoon Newsletter');
  });

  test('output includes the headStyles block', () => {
    const result = displayHead(HEAD_PAYLOAD);
    expect(result).toContain('margin: 0');
  });

  test('output includes the fonts link', () => {
    const result = displayHead(HEAD_PAYLOAD);
    expect(result).toContain('fonts.googleapis.com');
  });

  // negative paths
  test('throws with correct message when title is null', () => {
    expect(() => displayHead({ ...HEAD_PAYLOAD, title: null })).toThrow(
      '[displayHead] missing required field: title'
    );
  });

  test('throws with correct message when title is an empty string', () => {
    expect(() => displayHead({ ...HEAD_PAYLOAD, title: '' })).toThrow(
      '[displayHead] missing required field: title'
    );
  });

  test('throws with correct message when headStyles is null', () => {
    expect(() => displayHead({ ...HEAD_PAYLOAD, headStyles: null })).toThrow(
      '[displayHead] missing required field: headStyles'
    );
  });
});

// ---------------------------------------------------------------------------
// displayContent — end-to-end pipeline (no required inputs)
// ---------------------------------------------------------------------------

describe('displayContent — end-to-end pipeline', () => {
  test('renders a non-empty HTML string with no inputs', () => {
    const result = displayContent();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('output contains a <table> element', () => {
    const result = displayContent();
    expect(result).toContain('<table');
  });

  test('is deterministic across repeated calls', () => {
    expect(displayContent()).toBe(displayContent());
  });
});

// ---------------------------------------------------------------------------
// displayBody — end-to-end pipeline
// ---------------------------------------------------------------------------

describe('displayBody — end-to-end pipeline', () => {
  test('renders a non-empty HTML string from defaults', () => {
    const result = displayBody();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('output contains a <body> element', () => {
    const result = displayBody();
    expect(result).toContain('<body');
  });

  test('custom footer content is reflected in rendered output', () => {
    const customFooter = '<tr><td>Custom Footer: San Francisco HQ</td></tr>';
    const result = displayBody({ footer: customFooter });
    expect(result).toContain('San Francisco HQ');
  });

  // negative paths
  test('throws with correct message when footer is null', () => {
    expect(() => displayBody({ footer: null })).toThrow(
      '[displayBody] missing required field: footer'
    );
  });

  test('throws with correct message when footer is an empty string', () => {
    expect(() => displayBody({ footer: '' })).toThrow(
      '[displayBody] missing required field: footer'
    );
  });
});

// ---------------------------------------------------------------------------
// displayMain — end-to-end pipeline
// ---------------------------------------------------------------------------

describe('displayMain — end-to-end pipeline', () => {
  test('renders a non-empty HTML document from defaults', () => {
    const result = displayMain();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('output contains a DOCTYPE declaration', () => {
    const result = displayMain();
    expect(result).toContain('<!DOCTYPE html>');
  });

  test('custom head and body strings appear in the rendered document', () => {
    const customHead = '<head><title>Integration Test Email</title></head>';
    const customBody = '<body><p>Hello from the integration test</p></body>';
    const result = displayMain({ head: customHead, body: customBody });
    expect(result).toContain('Integration Test Email');
    expect(result).toContain('Hello from the integration test');
  });

  // negative paths
  test('throws with correct message when head is null', () => {
    expect(() => displayMain({ head: null })).toThrow(
      '[displayMain] missing required field: head'
    );
  });

  test('throws with correct message when body is an empty string', () => {
    expect(() => displayMain({ body: '' })).toThrow(
      '[displayMain] missing required field: body'
    );
  });
});
