import {
  MiscValidationError,
  assertRequired,
  assertNonEmptyString,
} from '../src/validation';

import addressComponent from '../src/components/address';
import newsletterSponsorshipLinkComponent from '../src/components/newsletter-sponsorship-link';
import unsubscribeComponent from '../src/components/unsubscribe';

// ---------------------------------------------------------------------------
// MiscValidationError class
// ---------------------------------------------------------------------------

describe('MiscValidationError', () => {
  test('is an instance of Error', () => {
    const err = new MiscValidationError('test message');
    expect(err).toBeInstanceOf(Error);
  });

  test('has name MiscValidationError', () => {
    const err = new MiscValidationError('test message');
    expect(err.name).toBe('MiscValidationError');
  });

  test('preserves the message', () => {
    const msg = '[Miscellaneous.foo] Missing required param "bar". Expected a value. Received: undefined.';
    const err = new MiscValidationError(msg);
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

  test('throws MiscValidationError for undefined', () => {
    expect(() => assertRequired('ctx', 'field', undefined)).toThrow(MiscValidationError);
  });

  test('throws MiscValidationError for null', () => {
    expect(() => assertRequired('ctx', 'field', null)).toThrow(MiscValidationError);
  });

  test('error message contains context, field name, and received value', () => {
    expect(() => assertRequired('myComponent', 'title', undefined)).toThrow(
      '[Miscellaneous.myComponent] Missing required param "title". Expected a value. Received: undefined.'
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
    expect(() => assertNonEmptyString('ctx', 'field', undefined)).toThrow(MiscValidationError);
  });

  test('throws for null', () => {
    expect(() => assertNonEmptyString('ctx', 'field', null)).toThrow(MiscValidationError);
  });

  test('throws for an empty string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', '')).toThrow(MiscValidationError);
  });

  test('throws for a whitespace-only string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', '   ')).toThrow(MiscValidationError);
  });

  test('throws for a number', () => {
    expect(() => assertNonEmptyString('ctx', 'field', 42)).toThrow(MiscValidationError);
  });

  test('error message for empty string contains context, field, and received value', () => {
    expect(() => assertNonEmptyString('addressComponent', 'mailingAddress', '')).toThrow(
      '[Miscellaneous.addressComponent] Invalid param "mailingAddress". Expected a non-empty string. Received: "".'
    );
  });

  test('error message for wrong type contains context, field, and received value', () => {
    expect(() => assertNonEmptyString('addressComponent', 'mailingAddress', 123)).toThrow(
      '[Miscellaneous.addressComponent] Invalid param "mailingAddress". Expected a non-empty string. Received: 123.'
    );
  });
});

// ---------------------------------------------------------------------------
// Component-level validation — missing required params
// ---------------------------------------------------------------------------

describe('addressComponent validation', () => {
  test('throws when mailingAddress is missing', () => {
    expect(() => addressComponent({})).toThrow(MiscValidationError);
  });

  test('throws when mailingAddress is an empty string', () => {
    expect(() => addressComponent({ mailingAddress: '' })).toThrow(MiscValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => addressComponent({})).toThrow(
      '[Miscellaneous.addressComponent] Missing required param "mailingAddress".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => addressComponent({ mailingAddress: 'PO Box 1, Denver CO' })).not.toThrow();
  });
});

describe('newsletterSponsorshipLinkComponent validation', () => {
  test('throws when contact is missing', () => {
    expect(() => newsletterSponsorshipLinkComponent({})).toThrow(MiscValidationError);
  });

  test('throws when contact is an empty string', () => {
    expect(() => newsletterSponsorshipLinkComponent({ contact: '' })).toThrow(MiscValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => newsletterSponsorshipLinkComponent({})).toThrow(
      '[Miscellaneous.newsletterSponsorshipLinkComponent] Missing required param "contact".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() =>
      newsletterSponsorshipLinkComponent({ contact: 'https://sponsor.example.com' })
    ).not.toThrow();
  });
});

describe('unsubscribeComponent validation', () => {
  test('throws when unsubscribe is missing', () => {
    expect(() => unsubscribeComponent({})).toThrow(MiscValidationError);
  });

  test('throws when unsubscribe is an empty string', () => {
    expect(() => unsubscribeComponent({ unsubscribe: '' })).toThrow(MiscValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => unsubscribeComponent({})).toThrow(
      '[Miscellaneous.unsubscribeComponent] Missing required param "unsubscribe".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() =>
      unsubscribeComponent({ unsubscribe: 'https://example.com/unsubscribe' })
    ).not.toThrow();
  });
});
