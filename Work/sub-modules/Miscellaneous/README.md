# Miscellaneous

**npm package:** `atherdon-newsletter-js-layouts-misc` · **version:** 3.0.0

> Part of the [Work/sub-modules](../README.md) component library.

## Purpose

Provides the footer and utility HTML components shared across all newsletter layouts: physical mailing address, copyright notice, web-font declarations, sponsorship link, and the unsubscribe link.

## Public API

The module exports a single default object with the following component functions:

```js
import misc from 'atherdon-newsletter-js-layouts-misc';

const {
  addressComponent,            // mailing address block
  copyrightsComponent,         // copyright notice
  fontsComponent,              // web-font <link> tags
  newsletterSponsorshipLinkComponent, // sponsorship URL link
  unsubscribeComponent,        // unsubscribe anchor
} = misc;
```

### Component signatures

| Component | Parameters | Returns |
|-----------|-----------|---------|
| `addressComponent` | `{ mailingAddress: string }` | HTML string |
| `copyrightsComponent` | *(none)* | HTML string |
| `fontsComponent` | *(none)* | HTML `<link>` string(s) |
| `newsletterSponsorshipLinkComponent` | `{ contact: string }` | HTML anchor string |
| `unsubscribeComponent` | `{ unsubscribe: string }` | HTML anchor string |

### Default config values (`src/config.js`)

```js
export const config = {
  contact: 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech',
  mailingAddress: 'PO Box 2206, Edwards CO, 81632, U.S.A.',
  unsubscribe: '#',
};
```

## Usage example

```js
import misc from 'atherdon-newsletter-js-layouts-misc';

const footerHtml = `
  ${misc.fontsComponent()}
  ${misc.addressComponent({ mailingAddress: 'PO Box 2206, Edwards CO, 81632, U.S.A.' })}
  ${misc.copyrightsComponent()}
  ${misc.unsubscribeComponent({ unsubscribe: 'https://example.com/unsub' })}
`;
```

## Build outputs

Rollup produces three bundle formats via `rollup.config.js`:

| File | Format | Field in `package.json` |
|------|--------|------------------------|
| `dist/index.cjs.js` | CommonJS | `main` |
| `dist/index.es.js` | ES module | `module` |
| `dist/index.iife.js` | IIFE (`newsletterLayoutsMiscPlainJS`) | `browser` |

## Dependencies

### Runtime

None — this module has no runtime dependencies.

### Dev / build

`@babel/*`, `rollup` + plugins, `eslint`, `prettier`, `jest`, `shx` (see `package.json`).

## Runtime validation

Components that accept required parameters throw a `MiscValidationError` when called with missing or invalid input. This provides immediate, actionable feedback during development.

### Error class

```js
import { MiscValidationError } from 'atherdon-newsletter-js-layouts-misc/src/validation';
```

`MiscValidationError` extends `Error` with `name = 'MiscValidationError'`.

### Error message format

```
[Miscellaneous.<componentName>] Missing required param "<field>". Expected a value. Received: undefined.
[Miscellaneous.<componentName>] Invalid param "<field>". Expected a non-empty string. Received: "".
```

### Validated components

| Component | Validated param(s) |
|-----------|-------------------|
| `addressComponent` | `mailingAddress` — required non-empty string |
| `newsletterSponsorshipLinkComponent` | `contact` — required non-empty string |
| `unsubscribeComponent` | `unsubscribe` — required non-empty string |

`copyrightsComponent` and `fontsComponent` take no parameters and are not validated.

## Commands

Run these from inside the `Miscellaneous/` directory (or from a parent workspace that manages it):

```bash
npm run build      # clean dist/ and bundle with Rollup
npm run dev        # watch mode (Rollup)
npm run test       # run Jest validation tests
npm run lint       # ESLint check
npm run lint:fix   # ESLint auto-fix
npm run lint:prettier  # Prettier reformat src/
```

## Known limitations / TODOs

- `copyrightsComponent` and `fontsComponent` take no parameters and are not validated.
