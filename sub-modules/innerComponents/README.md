# innerComponents

**npm package:** `atherdon-newsletter-js-layouts-body` · **version:** 3.2.0

> Part of the [Work/sub-modules](../README.md) component library.

## Purpose

Provides the body-structure HTML components used inside a newsletter layout: the headline banner, logo placements, email preview text, content sections, sponsor block, and call-to-action lists.

## Public API

The module exports a single default object:

```js
import body from 'atherdon-newsletter-js-layouts-body';

const {
  headlineComponent,
  logoBottomComponent,
  logoTopComponent,
  previewTextComponent,
  sectionComponent,
  sponsorComponent,
  ctaComponent,
} = body;
```

Additional (non-default-export) components available in `src/components/`:

- `fakeContent` — placeholder/lorem content block
- `getpublished` — "Get Published" call-to-action
- `joinus` — "Join Us" call-to-action

### Component signatures

| Component | Parameters | Returns |
|-----------|-----------|---------|
| `headlineComponent` | `content: string` | Headline banner HTML string |
| `logoBottomComponent` | *(none)* | Bottom logo HTML string |
| `logoTopComponent` | *(none)* | Top logo HTML string |
| `previewTextComponent` | `{ content: string }` | Email preview text HTML string |
| `sectionComponent` | `content: string` | Full-width section table HTML string |
| `sponsorComponent` | `{ href: string, src: string, content: string }` | Sponsor card HTML string |
| `ctaComponent` | *(none)* | CTA list HTML string |

## Usage example

```js
import body from 'atherdon-newsletter-js-layouts-body';

const emailBody = `
  ${body.previewTextComponent('Read the top tech stories of the week')}
  ${body.logoTopComponent()}
  ${body.headlineComponent()}
  ${body.sectionComponent('<p>Main article content goes here.</p>')}
  ${body.sponsorComponent({
    href: 'https://sponsor.hackernoon.com',
    src: 'https://example.com/logo.png',
    content: 'Sponsored by Acme Corp',
  })}
  ${body.ctaComponent()}
  ${body.logoBottomComponent()}
`;
```

## Build outputs

Rollup produces three bundle formats via `rollup.config.js`:

| File | Format | Field in `package.json` |
|------|--------|------------------------|
| `dist/index.cjs.js` | CommonJS | `main` |
| `dist/index.es.js` | ES module | `module` |
| `dist/index.iife.js` | IIFE | `browser` |

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `atherdon-newsletter-js-layouts-misc` | `^3.0.0` | Shared footer/utility components |

### Dev / build

`@babel/*`, `rollup` + plugins, `eslint`, `prettier`, `jest`, `shx` (see `package.json`).

## Runtime validation

Components that accept required parameters throw an `InnerComponentsValidationError` when called with missing or invalid input.

### Error class

```js
import { InnerComponentsValidationError } from 'atherdon-newsletter-js-layouts-body/src/validation';
```

`InnerComponentsValidationError` extends `Error` with `name = 'InnerComponentsValidationError'`.

### Error message format

```
[innerComponents.<componentName>] Missing required param "<field>". Expected a value. Received: undefined.
[innerComponents.<componentName>] Invalid param "<field>". Expected a non-empty string. Received: "".
```

### Validated components

| Component | Validated param(s) |
|-----------|-------------------|
| `headlineComponent` | `content` — required non-empty string (positional) |
| `previewTextComponent` | `content` — required non-empty string |
| `sectionComponent` | `content` — required non-empty string (positional) |
| `sponsorComponent` | `href`, `src`, `content` — all required non-empty strings |

`logoTopComponent`, `logoBottomComponent`, and `ctaComponent` take no parameters and are not validated.

## Commands

Run these from inside the `innerComponents/` directory:

```bash
npm run build      # clean dist/ and bundle with Rollup
npm run dev        # watch mode (Rollup)
npm run test       # run Jest validation tests
npm run lint       # ESLint check
npm run lint:fix   # ESLint auto-fix
npm run lint:prettier  # Prettier reformat src/
```

## Known limitations / TODOs

- The legacy test file `tests/index.te-st.js` is intentionally not picked up by Jest (hyphen in extension prevents matching `*.test.js`).
- No integration tests exist for composed body layouts.

---

[Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)
