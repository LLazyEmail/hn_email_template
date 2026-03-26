# outerTemplate

**npm package:** `atherdon-newsletter-js-layouts-outertemplate` · **version:** 0.1.0

> Part of the [sub-modules](../README.md) component library.

## Purpose

This module now contains the first extracted runtime slice from `Work/`:
template registry/render logic (`renderTemplate`) and methods facade helpers
(`printTemplate`, `printTemplateData`).

## Current status

`outerTemplate` is currently a **hybrid scaffold + runtime package**:

- keeps placeholder structural components (`body`, `head`, `main`, `footer`)
- provides extracted template runtime surface:
  - `renderTemplate`
  - `printTemplate`
  - `printTemplateData`
- can run basic build/test/lint commands

## Public API

```js
import outerTemplate from 'atherdon-newsletter-js-layouts-outertemplate';

const {
  bodyComponent,
  headComponent,
  mainComponent,
  footerComponent,
  renderTemplate,
  printTemplate,
  printTemplateData,
} = outerTemplate;
```

Current component behavior:

- `bodyComponent()` returns an empty string (`''`)
- `headComponent()` returns an empty string (`''`)
- `mainComponent()` returns an empty string (`''`)
- `footerComponent()` returns an empty string (`''`)

Current template runtime behavior:

- `renderTemplate(templateId, data)` delegates to internal template registry
- `printTemplate(string)` renders `hn` template from string payload
- `printTemplateData({ string, data })` renders `hn` template from front-matter payload

## Commands

Run inside `sub-modules/outerTemplate`:

```bash
npm run build
npm run test
npm run lint
npm run lint:fix
```

## Next extraction milestones

- migrate `printMain`, `printHead`, `printBody`, `printFooter` ownership from `Work/`
- move display section composition contracts to this package
- add deeper integration tests for full template assembly contracts
