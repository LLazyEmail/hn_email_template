import {
  missingRequiredFieldError,
  invalidFieldError,
  displaySectionError,
} from '../../src/display/errors/displayErrors';

// ---------------------------------------------------------------------------
// missingRequiredFieldError
// ---------------------------------------------------------------------------

describe('missingRequiredFieldError', () => {
  test('returns an Error instance', () => {
    const err = missingRequiredFieldError('displayMain', 'head');
    expect(err).toBeInstanceOf(Error);
  });

  test('message includes section name and field name', () => {
    const err = missingRequiredFieldError('displayMain', 'head');
    expect(err.message).toBe('[displayMain] missing required field: head');
  });

  test('message format is deterministic for different sections', () => {
    expect(missingRequiredFieldError('displayFooter', 'address').message).toBe(
      '[displayFooter] missing required field: address'
    );
  });

  test('message format is deterministic for different field names', () => {
    expect(missingRequiredFieldError('displayBody', 'footer').message).toBe(
      '[displayBody] missing required field: footer'
    );
  });

  test('can be thrown and caught', () => {
    expect(() => {
      throw missingRequiredFieldError('displayHead', 'styles');
    }).toThrow('[displayHead] missing required field: styles');
  });
});

// ---------------------------------------------------------------------------
// invalidFieldError
// ---------------------------------------------------------------------------

describe('invalidFieldError', () => {
  test('returns an Error instance', () => {
    const err = invalidFieldError('displayMain', 'head', 'must be a string');
    expect(err).toBeInstanceOf(Error);
  });

  test('message includes section name, field name, and reason', () => {
    const err = invalidFieldError('displayMain', 'head', 'must be a string');
    expect(err.message).toBe('[displayMain] invalid field "head": must be a string');
  });

  test('message format is deterministic for different sections', () => {
    expect(invalidFieldError('displayFooter', 'copyright', 'unexpected type').message).toBe(
      '[displayFooter] invalid field "copyright": unexpected type'
    );
  });

  test('can be thrown and caught', () => {
    expect(() => {
      throw invalidFieldError('displayContent', 'body', 'too short');
    }).toThrow('[displayContent] invalid field "body": too short');
  });
});

// ---------------------------------------------------------------------------
// displaySectionError
// ---------------------------------------------------------------------------

describe('displaySectionError', () => {
  test('returns an Error instance', () => {
    const cause = new Error('render failed');
    const err = displaySectionError('displayBody', cause);
    expect(err).toBeInstanceOf(Error);
  });

  test('message includes section name and original cause message', () => {
    const cause = new Error('render failed');
    const err = displaySectionError('displayBody', cause);
    expect(err.message).toBe('[displayBody] render error: render failed');
  });

  test('preserves the original cause on the error object', () => {
    const cause = new Error('underlying failure');
    const err = displaySectionError('displayMain', cause);
    expect(err.cause).toBe(cause);
  });

  test('can be thrown and caught', () => {
    const cause = new Error('boom');
    expect(() => {
      throw displaySectionError('displayHead', cause);
    }).toThrow('[displayHead] render error: boom');
  });

  test('message format is deterministic for different sections', () => {
    const cause = new Error('timeout');
    expect(displaySectionError('displayContent', cause).message).toBe(
      '[displayContent] render error: timeout'
    );
  });
});
