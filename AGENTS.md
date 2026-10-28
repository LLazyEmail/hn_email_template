# AGENTS.md — guide for AI coding agents

This file tells AI agents (and humans in a hurry) how to work in this repo
safely. Keep it short and factual; update it when the code changes.

## What this repo is

`hn_email_template` renders the Hackernoon-style newsletter as a single HTML
email file. The current generator is a small Node ESM CLI in `scripts/` built
on [`@llazyemail/template-runtime-display`](https://github.com/LLazyEmail/template-runtime-display)
(published to GitHub Packages).

## Code map

### Current (edit these)

| Path | Role |
|------|------|
| `scripts/generate-template.js` | CLI + `renderHn()`; calls runtime `document()` with `XHTML_DOCTYPE` |
| `scripts/hn-parts.js` | HN slot markup: `headHtml`, `preheaderHtml`, `mainHtml`, `footerHtml`, `HTML_ATTRIBUTES`, `BODY_ATTRIBUTES` |
| `scripts/hn-blocks.js` | Data-driven blocks: `adsHtml`, `imageGridHtml` (table-based only) |
| `scripts/generate-template.test.js` | `node:test` suite, includes `lintEmail` check |
| `scripts/package.json`, `scripts/.npmrc` | Deps + GitHub Packages registry for `@llazyemail` scope |
| `content/` | Input datasets (`content2.js` is the default) |
| `.github/workflows/node.js.yml` | CI: `scripts` job (Node 24) + `sub-modules` matrix (Node 22/24) |

### Still built in CI (touch only if the task is about them)

`sub-modules/Typography`, `sub-modules/innerComponents`, `sub-modules/Miscellaneous`
— standalone Rollup/Jest packages, each with its own `npm ci / lint / build / test`.

### Legacy — being removed in separate PRs

Do **not** add code here, and do not delete it unless your task is that removal:

- `Work/` (old Rollup/Babel/Jest pipeline, fixtures, `Work/bash`)
- `sub-modules/outerTemplate/`
- `packages/template-engine/`, `packages/template-presets-hn/`
- `packages/template-runtime-display/` (local stub, replaced by the published package)
- `archive/`, `files/`, `src/data.js` (historical data/experiments)

History of these phases: [`docs/history/`](docs/history/README.md) (if present)
and [`docs/architecture.md`](docs/architecture.md).

## Commands

```bash
cd scripts
export NODE_AUTH_TOKEN=<GitHub token with read:packages>
npm ci                      # or npm install
npm test                    # node --test ./generate-template.test.js
npm run generate            # writes generated/hn.html relative to CWD
# explicit:
node generate-template.js --data=../content/content2.js --out=../generated/hn.html
node generate-template.js --help
```

Sub-module (example): `cd sub-modules/Typography && npm ci && npm run lint && npm run build && npm test`.

## Verifying output

1. `npm test` in `scripts/` must pass. It renders `content2` and runs
   `lintEmail` from `@llazyemail/template-runtime-display/quality`
   (with `no-external-stylesheet` turned off).
2. For markup changes, generate `generated/hn.html` and eyeball it in a browser.
   CI uploads it as the `generated-hn-html` artifact.

## Conventions

- Small, single-purpose PRs; open them as **draft** first.
- Commit trailer when working for the maintainer:
  `Co-authored-by: petroved <arthur.tkachenko.netweight@gmail.com>`
- Node: the `scripts/` job runs on Node 24 (runtime-display requires it);
  sub-modules are tested on Node 22 and 24.
- Email markup: tables + inline styles, no flex/grid (keeps `lintEmail` clean).
- Do not invent commands; check `package.json` scripts and the workflow file.
- Docs: relocate outdated content to `docs/history/` instead of deleting it.

## Gotchas

- **GitHub Packages auth**: `npm ci` in `scripts/` fails with 401/404 without
  `NODE_AUTH_TOKEN` (`scripts/.npmrc` reads it). CI uses `GITHUB_TOKEN` with
  `packages: read`.
- **`document()` vs `xhtmlDocument()`**: the runtime's `xhtmlDocument()`
  hard-codes `htmlAttributes`, so it can't add `xmlns:v` / `xmlns:o` (needed for
  Outlook/VML). The generator therefore calls `document({ doctype: XHTML_DOCTYPE, lang: false, htmlAttributes: HTML_ATTRIBUTES, ... })`.
- Only `--template=hn` is supported; other ids throw.
- `--data` / `--out` / `--content` resolve from the current working directory;
  the default data path resolves from the script location.
- No root `package.json`: always `cd scripts` (or a sub-module) before npm commands.
