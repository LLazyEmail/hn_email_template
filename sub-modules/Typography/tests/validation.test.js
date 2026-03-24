import { TypographyValidationError, assertRequired, assertNonEmptyString, assertEnum } from '../src/validation';

import headingComponent from '../src/components/heading';
import imageComponent from '../src/components/image';
import italicComponent from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import titleComponent from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import strongComponent from '../src/components/strong';
import subtitleComponent from '../src/components/subtitle';

// ---------------------------------------------------------------------------
// TypographyValidationError class
// ---------------------------------------------------------------------------

describe('TypographyValidationError', () => {
  test('is an instance of Error', () => {
    const err = new TypographyValidationError('test message');
    expect(err).toBeInstanceOf(Error);
  });

  test('has name TypographyValidationError', () => {
    const err = new TypographyValidationError('test message');
    expect(err.name).toBe('TypographyValidationError');
  });

  test('preserves the message', () => {
    const msg = '[Typography.foo] Missing required param "bar". Expected a value. Received: undefined.';
    const err = new TypographyValidationError(msg);
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

  test('throws TypographyValidationError for undefined', () => {
    expect(() => assertRequired('ctx', 'field', undefined)).toThrow(TypographyValidationError);
  });

  test('throws TypographyValidationError for null', () => {
    expect(() => assertRequired('ctx', 'field', null)).toThrow(TypographyValidationError);
  });

  test('error message contains context, field name, and received value', () => {
    expect(() => assertRequired('myComponent', 'title', undefined)).toThrow(
      '[Typography.myComponent] Missing required param "title". Expected a value. Received: undefined.'
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
    expect(() => assertNonEmptyString('ctx', 'field', undefined)).toThrow(TypographyValidationError);
  });

  test('throws for null', () => {
    expect(() => assertNonEmptyString('ctx', 'field', null)).toThrow(TypographyValidationError);
  });

  test('throws for an empty string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', '')).toThrow(TypographyValidationError);
  });

  test('throws for a whitespace-only string', () => {
    expect(() => assertNonEmptyString('ctx', 'field', '   ')).toThrow(TypographyValidationError);
  });

  test('throws for a number', () => {
    expect(() => assertNonEmptyString('ctx', 'field', 42)).toThrow(TypographyValidationError);
  });

  test('error message for empty string contains context, field, and received value', () => {
    expect(() => assertNonEmptyString('paragraphComponent', 'content', '')).toThrow(
      '[Typography.paragraphComponent] Invalid param "content". Expected a non-empty string. Received: "".'
    );
  });

  test('error message for wrong type contains context, field, and received value', () => {
    expect(() => assertNonEmptyString('headingComponent', 'content', 123)).toThrow(
      '[Typography.headingComponent] Invalid param "content". Expected a non-empty string. Received: 123.'
    );
  });
});

// ---------------------------------------------------------------------------
// assertEnum
// ---------------------------------------------------------------------------

describe('assertEnum', () => {
  const allowed = ['title', 'subtitle', 'heading', 'body', 'meta', 'link'];

  test('does not throw when value is in the allowed list', () => {
    expect(() => assertEnum('ctx', 'variant', 'title', allowed)).not.toThrow();
  });

  test('throws TypographyValidationError when value is not in the allowed list', () => {
    expect(() => assertEnum('ctx', 'variant', 'banner', allowed)).toThrow(TypographyValidationError);
  });

  test('throws for undefined', () => {
    expect(() => assertEnum('ctx', 'variant', undefined, allowed)).toThrow(TypographyValidationError);
  });

  test('error message lists all allowed values', () => {
    expect(() => assertEnum('ctx', 'variant', 'unknown', allowed)).toThrow(
      '[Typography.ctx] Invalid param "variant". Expected one of: title|subtitle|heading|body|meta|link. Received: "unknown".'
    );
  });
});

// ---------------------------------------------------------------------------
// Component-level validation — missing required params
// ---------------------------------------------------------------------------

describe('headingComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => headingComponent({})).toThrow(TypographyValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => headingComponent({})).toThrow(
      '[Typography.headingComponent] Missing required param "content".'
    );
  });

  test('throws for empty content string', () => {
    expect(() => headingComponent({ content: '' })).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => headingComponent({ content: 'Hello' })).not.toThrow();
  });
});

describe('imageComponent validation', () => {
  test('throws when src is missing', () => {
    expect(() => imageComponent({ altText: 'alt' })).toThrow(TypographyValidationError);
  });

  test('throws when altText is missing', () => {
    expect(() => imageComponent({ src: 'img.png' })).toThrow(TypographyValidationError);
  });

  test('throws when altText is an empty string', () => {
    expect(() => imageComponent({ src: 'img.png', altText: '' })).toThrow(TypographyValidationError);
  });

  test('error message identifies the component and src field', () => {
    expect(() => imageComponent({ altText: 'alt' })).toThrow(
      '[Typography.imageComponent] Missing required param "src".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => imageComponent({ src: 'img.png', altText: 'alt' })).not.toThrow();
  });
});

describe('italicComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => italicComponent({})).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => italicComponent({ content: 'emphasis' })).not.toThrow();
  });
});

describe('linkComponent validation', () => {
  test('throws when href is missing', () => {
    expect(() => linkComponent({ content: 'click' })).toThrow(TypographyValidationError);
  });

  test('throws when content is missing', () => {
    expect(() => linkComponent({ href: 'https://example.com' })).toThrow(TypographyValidationError);
  });

  test('error message identifies the component and href field', () => {
    expect(() => linkComponent({ content: 'click' })).toThrow(
      '[Typography.linkComponent] Missing required param "href".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => linkComponent({ href: 'https://example.com', content: 'click' })).not.toThrow();
  });
});

describe('listComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => listComponent({})).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => listComponent({ content: '<li>item</li>' })).not.toThrow();
  });
});

describe('listItemComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => listItemComponent({})).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => listItemComponent({ content: 'item' })).not.toThrow();
  });
});

describe('titleComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => titleComponent({})).toThrow(TypographyValidationError);
  });

  test('error message identifies the component and field', () => {
    expect(() => titleComponent({})).toThrow(
      '[Typography.titleComponent] Missing required param "content".'
    );
  });

  test('does not throw for valid input', () => {
    expect(() => titleComponent({ content: 'My Title' })).not.toThrow();
  });
});

describe('paragraphComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => paragraphComponent({})).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => paragraphComponent({ content: 'text' })).not.toThrow();
  });
});

describe('strongComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => strongComponent({})).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => strongComponent({ content: 'bold' })).not.toThrow();
  });
});

describe('subtitleComponent validation', () => {
  test('throws when content is missing', () => {
    expect(() => subtitleComponent({})).toThrow(TypographyValidationError);
  });

  test('does not throw for valid input', () => {
    expect(() => subtitleComponent({ content: 'Subtitle' })).not.toThrow();
  });
});
