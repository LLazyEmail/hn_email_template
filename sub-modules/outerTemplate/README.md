# outerTemplate

**npm package:** `atherdon-newsletter-js-layouts-outertemplate` · **version:** 0.1.0

> Part of the [sub-modules](../README.md) component library.

## Purpose

This module is now scaffolded as a standalone package placeholder for the future
outer-template extraction from `Work/`.

## Current status

`outerTemplate` is intentionally an **empty scaffold**:

- has full package/tooling structure (`package.json`, `rollup.config.js`, `src/`, `tests/`)
- exports an empty default object for now
- can run basic build/test/lint commands

## Public API

```js
import outerTemplate from 'atherdon-newsletter-js-layouts-outertemplate';
```

Current export shape:

```js
{}
```

## Commands

Run inside `sub-modules/outerTemplate`:

```bash
npm run build
npm run test
npm run lint
npm run lint:fix
```

## Next extraction milestones

- move outer-template composition logic from `Work/` into this package
- define stable public API for rendering full templates
- add integration tests for template assembly contracts
