import {
  InnerComponentsValidationError,
  assertRequired,
  assertNonEmptyString,
} from '../src/validation';

import headlineComponent from '../src/components/headline';
import previewTextComponent from '../src/components/previewText';
import sectionComponent from '../src/components/section';
import sponsorComponent from '../src/components/sponsor';

// ---------------------------------------------------------------------------
// InnerComponentsValidationError class
// ---------------------------------------------------------------------------

describe('InnerComponentsValidationError', () => {
  test('is an instance of Error', () => {
    const err = new InnerComponentsValidationError('test message');
    expect(err).toBeInstanceOf(Error);
  });

  test('has name InnerComponentsValidationError', () => {
    const err = new InnerComponentsValidationError('test message');
    expect(err.name).toBe('InnerComponentsValidationError');
  });

  test('preserves the message', () => {
    const msg = '[innerComponents.foo] Missing required param "bar". Expected a value. Received: undefined.';
    const err = new InnerComponentsValidationError(msg);
    expect(err.message).toBe(msg);
  });
});

// ---------------------------------------------------------------------------
// assertRequired
// ---------------------------------------------------------------------------

describe('assertRequired', () => {
  test('does not throw when value is a string', () => {
    expect(() => assertRequired('ctx', 'field', 'hello')).not.toThrow();
  });

  test('does not throw when value is 0', () => {
    expect(() => assertRequired('ctx', 'field', 0)).not.toThrow();
  });

  test('throws InnerComponentsValidationError for undefined', () => {
    expect(() => assertRequired('ctx', 'field', undefined)).toThrow(InnerComponentsValidationError);
  });

  test('throws InnerComponentsValidationError for null', () => {
    expect(() => assertRequired('ctx', 'field', null)).toThrow(InnerComponentsValidationError);
  });

  test('error message contains context, field name, and received value', () => {
    expect(() => assertRequired('myComponent', 'title', undefined)).toThrow(
      '[innerComponents.myComponent] Missing required param "title". Expected a value. Received: undefined.'
    );
  });
});

// ---------------------------------------------------------------------------
// assertNonEmptyString
// ---------------------------------------------------------------------------

describe('assertNonEmptyString', () => {
  test('does not throw for a valid non-empty string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', 'hello')).not.toThrow();
  });

  test('throws for undefined', () => {
    expect(() => assertNonEmptyString('ctx', 'field', undefined)).toThrow(InnerComponentsValidationError);
  });

  test('throws for null', () => {
    expect(() => assertNonEmptyString('ctx', 'field', null)).toThrow(InnerComponentsValidationError);
  });

  test('throws for an empty string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', '')).toThrow(InnerComponentsValidationError);
  });

  test('throws for a whitespace-only string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', '   ')).toThrow(InnerComponentsValidationError);
  });

  test('throws for a number', () => {
    expect(() => assertNonEmptyString('ctx', 'field', 42)).toThrow(InnerComponentsValidationError);
  });

  test('error message for empty string contains context, field, and received value', () => {
    expect(() => assertNonEmptyString('sectionComponent', 'content', '')).toThrow(
      '[innerComponents.sectionComponent] Invalid param "content". Expected a non-empty string. Received: "".'
    );
  });

  test('error message for wrong type contains context, field, and received value', () => {
    expect(() => assertNonEmptyString('previewTextComponent', 'content', 123)).toThrow(
      '[innerComponents.previewTextComponent] Invalid param "content". Expected a non-empty string. Received: 123.'
    );
  });
});

// ---------------------------------------------------------------------------
// Component-level validation — missing required params
// ---------------------------------------------------------------------------

describe('headlineComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => headlineComponent(undefined)).toThrow(InnerComponentsValidationError);
  });

  test('throws when content is null', () => {
    expect(() => headlineComponent(null)).toThrow(InnerComponentsValidationError);
  });

  test('throws when content is an empty string', () => {
    expect(() => headlineComponent('')).toThrow(InnerComponentsValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => headlineComponent(undefined)).toThrow(
      '[innerComponents.headlineComponent] Missing required param "content".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => headlineComponent('Top Tech Stories')).not.toThrow();
  });

  test('returns the content string', () => {
    expect(headlineComponent('Top Tech Stories')).toBe('Top Tech Stories');
  });
});

describe('previewTextComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => previewTextComponent({})).toThrow(InnerComponentsValidationError);
  });

  test('throws when content is an empty string', () => {
    expect(() => previewTextComponent({ content: '' })).toThrow(InnerComponentsValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => previewTextComponent({})).toThrow(
      '[innerComponents.previewTextComponent] Missing required param "content".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => previewTextComponent({ content: 'Preview text here' })).not.toThrow();
  });
});

describe('sectionComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => sectionComponent(undefined)).toThrow(InnerComponentsValidationError);
  });

  test('throws when content is null', () => {
    expect(() => sectionComponent(null)).toThrow(InnerComponentsValidationError);
  });

  test('throws when content is an empty string', () => {
    expect(() => sectionComponent('')).toThrow(InnerComponentsValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => sectionComponent(undefined)).toThrow(
      '[innerComponents.sectionComponent] Missing required param "content".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => sectionComponent('<p>Article content.</p>')).not.toThrow();
  });
});

describe('sponsorComponent validation', () => {
  test('throws when href is missing', () => {
    expect(() => sponsorComponent({ src: 'img.png', content: 'Acme Corp' })).toThrow(
      InnerComponentsValidationError
    );
  });

  test('throws when src is missing', () => {
    expect(() => sponsorComponent({ href: 'https://example.com', content: 'Acme Corp' })).toThrow(
      InnerComponentsValidationError
    );
  });

  test('throws when content is missing', () => {
    expect(() =>
      sponsorComponent({ href: 'https://example.com', src: 'img.png' })
    ).toThrow(InnerComponentsValidationError);
  });

  test('throws when href is an empty string', () => {
    expect(() =>
      sponsorComponent({ href: '', src: 'img.png', content: 'Acme Corp' })
    ).toThrow(InnerComponentsValidationError);
  });

  test('error message identifies the component and href field', () => {
    expect(() => sponsorComponent({ src: 'img.png', content: 'Acme Corp' })).toThrow(
      '[innerComponents.sponsorComponent] Missing required param "href".'
    );
  });

  test('error message identifies the component and src field', () => {
    expect(() => sponsorComponent({ href: 'https://example.com', content: 'Acme Corp' })).toThrow(
      '[innerComponents.sponsorComponent] Missing required param "src".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() =>
      sponsorComponent({
        href: 'https://sponsor.example.com',
        src: 'https://example.com/logo.png',
        content: 'Sponsored by Acme Corp',
      })
    ).not.toThrow();
  });
});
