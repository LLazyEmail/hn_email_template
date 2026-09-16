# Work

> ⚠️ **Integration-only zone.** No new core template or rendering logic should be added here.
> See the [Work/ Directory Policy](#work-directory-policy) section below and
> [ADR 0001](../docs/adr/0001-module-boundaries.md) for the full rules.

This directory contains the main JavaScript package for `atherdon-old-newsletter-js-outertemplate`.

## Package Manager

This project uses **npm** as its package manager. A `package-lock.json` is committed to enforce reproducible installs.

Do **not** use `yarn` in this directory — `yarn.lock` is intentionally ignored to avoid lockfile conflicts.

## Setup

```bash
npm ci
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Clean and bundle the package |
| `npm run dev` | Watch mode bundling |
| `npm run test` | Run unit and integration tests |
| `npm run test:real-data` | Generate a full template using `src/data.js` real payload |
| `npm run generate:template -- --template=hn --data=src/data.js --out=generated/hn.html` | Generate template HTML from CLI args |
| `npm run generate:compare` | Generate both comparison outputs (JSON-derived and markdown-derived) |
| `npm run generate:compare:json` | Generate `generated/compare-from-json.html` from `src/data.js` |
| `npm run generate:compare:markdown` | Generate `generated/compare-from-markdown.html` from `src/data-from-markdown.js` + `src/content-from-markdown.html` |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting with Prettier |

## Work/ Directory Policy

`Work/` is the **integration and orchestration layer** for this repository.

Reusable HTML components now live in `sub-modules/outerTemplate` and `sub-modules/innerComponents`. Do not add files under `Work/src/components/`.

The [`.github/workflows/work-policy.yml`](../.github/workflows/work-policy.yml) workflow fails PRs that add new `.js` files to `Work/src/templates/`, `Work/src/display/`, or `Work/src/components/`.

For full context see [ADR 0001](../docs/adr/0001-module-boundaries.md).
