# Typography

**npm package:** `atherdon-newsletter-js-layouts-typography` · **version:** 3.1.0

> Part of the [Work/sub-modules](../README.md) component library.

## Purpose

Provides all text-formatting and layout HTML components used in newsletter templates: headings, paragraphs, links, lists, images, italic, bold, separators, and buttons. Each component returns a self-contained HTML string ready to embed in an email body.

## Public API

The module exports a single default object:

```js
import typography from 'atherdon-newsletter-js-layouts-typography';

const {
  headingComponent,
  imageComponent,
  italicComponent,
  linkComponent,
  listComponent,
  listItemComponent,
  titleComponent,      // main title
  paragraphComponent,
  strongComponent,
  subtitleComponent,
  separatorComponent,
  buttonComponent,
} = typography;
```

### Component signatures

| Component | Parameters | Returns |
|-----------|-----------|---------|
| `headingComponent` | `{ content: string }` | `<h3>` HTML string |
| `imageComponent` | *(implementation-defined)* | `<img>` HTML string |
| `italicComponent` | *(implementation-defined)* | `<em>` / italic HTML string |
| `linkComponent` | *(implementation-defined)* | `<a>` HTML string |
| `listComponent` | *(implementation-defined)* | `<ul>` / `<ol>` HTML string |
| `listItemComponent` | *(implementation-defined)* | `<li>` HTML string |
| `titleComponent` | *(implementation-defined)* | Main title HTML string |
| `paragraphComponent` | `{ content: string }` | `<div>` paragraph HTML string |
| `strongComponent` | *(implementation-defined)* | `<strong>` HTML string |
| `subtitleComponent` | *(implementation-defined)* | Subtitle HTML string |
| `separatorComponent` | *(implementation-defined)* | Horizontal divider HTML string |
| `buttonComponent` | *(implementation-defined)* | Button HTML string |

All components are re-exported through `src/components.js` and then via `src/index.js`.

### Default config values (`src/config.js`)

```js
export const config = {
  contact: 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech',
  mailingAddress: 'PO Box 2206, Edwards CO, 81632, U.S.A.',
  unsubscribe: '#',
};
```

## Semantic style presets (`src/presets.js`)

`presets` is a plain object of named style tokens. Each preset maps to the
corresponding component's visual role and can be used as a reference when
authoring new components or validating consistent style values.

| Preset | Role | Key styles |
|--------|------|-----------|
| `title` | Main newsletter / article title | 30 px · bold · `#111111` · 125 % line-height |
| `subtitle` | Section subtitle | 17 px · bold · `#111111` · 150 % line-height |
| `heading` | In-body section heading | 18 px · bold · `#111111` · 125 % line-height |
| `body` | Standard paragraph text | 16 px · normal · `#111111` · 150 % line-height |
| `meta` | Timestamps, source labels, captions | 14 px · normal · `#555555` · 150 % line-height |
| `link` | Inline hyperlink | bold · underline · `#111111` |

All presets share the same `FONT_FAMILY` constant:

```
trebuchet ms, lucida grande, lucida sans unicode, lucida sans, tahoma, sans-serif
```

### Importing presets

```js
import presets, { FONT_FAMILY } from 'atherdon-newsletter-js-layouts-typography/src/presets';

// presets.title  → { fontFamily, fontSize: '30px', fontWeight: 'bold', … }
// presets.body   → { fontFamily, fontSize: '16px', fontWeight: 'normal', … }
// presets.link   → { color: '#111111', fontWeight: 'bold', textDecoration: 'underline' }
```

## Usage example

```js
import typography from 'atherdon-newsletter-js-layouts-typography';

const articleHtml = `
  ${typography.titleComponent({ content: 'Top Stories This Week' })}
  ${typography.paragraphComponent({ content: 'Here is a summary of this week\'s news...' })}
  ${typography.headingComponent({ content: 'Section One' })}
  ${typography.linkComponent({ href: 'https://hackernoon.com', content: 'Read more' })}
  ${typography.separatorComponent()}
`;
```

## Build outputs

Rollup produces three bundle formats via `rollup.config.js`:

| File | Format | Field in `package.json` |
|------|--------|------------------------|
| `dist/index.cjs.js` | CommonJS | `main` |
| `dist/index.es.js` | ES module | `module` |
| `dist/index.iife.js` | IIFE (`newsletterLayoutsTypographyPlainJS`) | `browser` |

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `lit-typography` | `^0.1.0` | Typography helpers |
| `stringify-attributes` | `^3.0.0` | HTML attribute serialisation |
| `@babel/runtime` | `^7.18.3` | Babel helpers (external to bundle) |

### Dev / build

`@babel/*`, `rollup` + plugins, `eslint`, `prettier`, `jest`, `shx` (see `package.json`).

## Commands

Run these from inside the `Typography/` directory:

```bash
npm run build      # clean dist/ and bundle with Rollup
npm run dev        # watch mode (Rollup)
npm run test       # run Jest test suite in tests/
npm run lint       # ESLint check
npm run lint:fix   # ESLint auto-fix
npm run lint:prettier  # Prettier reformat src/
```

## Tests

Tests live in `tests/` and are run with Jest. Covered scenarios include:

- `broken-image` / `broken-link` edge cases
- `complex-list`, `lists/`, `lists-with-links`
- `italic-as-list-item`, `italic-first-sentence`
- `link/` — complex links, exclamation marks, links-only, spacing
- `paragraph/`, `separator/`, `strong/`
- `html-comments`
- `presets.test.js` — snapshot tests for all semantic presets and component HTML output

Run a single test scenario:

```bash
npx jest tests/paragraph
npx jest tests/presets
```

## Known limitations / TODOs

- Signatures for several components (`imageComponent`, `linkComponent`, `listComponent`, etc.) are not yet documented in this README; consult `src/components/<name>.js` directly.
- `buttonComponent` is imported from `button2.js` — the original `button.js` (if any) is not present; naming should be clarified.
- No integration tests verifying combined multi-component output.
