# Legacy archive (Work / outerTemplate / local packages)

Moved here on purpose so we do **not** hard-delete modules Arthur may need later.
Nothing under `archive/legacy/` is built or tested in CI. The live generator is
`scripts/` + the published `@llazyemail/template-runtime-display` package.

## Recovery

Last commit on `main` that still had these paths at their original locations:

`2964317676761f00b8ac74550c2ddc61523fcd98`

Restore one path (example):

```bash
git checkout 2964317676761f00b8ac74550c2ddc61523fcd98 -- Work/src
# or the archived copy:
git checkout HEAD -- archive/legacy/Work/src
```

## Layout

| Archived path | Original path | What it did | Replaced by |
|---------------|---------------|-------------|-------------|
| `Work/src/` | `Work/src/` | Old display pipeline (sections, factory, engine, `t/`) | `scripts/generate-template.js` + `hn-parts.js` + `hn-blocks.js` |
| `Work/tests/` | `Work/tests/` | Jest unit/integration for that pipeline | `scripts/generate-template.test.js` (`node:test`) |
| `sub-modules/outerTemplate/` | `sub-modules/outerTemplate/` | HN chrome components + template registry (`hn`, `hn-without-ads`) | Markup in `scripts/hn-parts.js` / `hn-blocks.js`; registry not ported |
| `packages/template-engine/` | `packages/template-engine/` | Local `createTemplateFromDefinition` / `createRegistry` / `renderTemplate` | Nothing in `scripts/` (direct `document()` call) |
| `packages/template-presets-hn/` | `packages/template-presets-hn/` | `hn` / `hn-without-ads` preset metadata (`featureFlags.ads`) | Layout flags expressed in scripts; `hn-without-ads` CLI added separately |
| `packages/template-runtime-display/` | `packages/template-runtime-display/` | Local 0.1.0 display-pipeline stub | Published `@llazyemail/template-runtime-display` (`document`, `XHTML_DOCTYPE`, `escapeHtml`) |

`Work/README.md`, `Work/fixtures/`, `Work/generated*`, and the CI-built
`sub-modules/{Typography,innerComponents,Miscellaneous}` stayed in place.

## Unique bits worth knowing

- **`Work/src/data-markdown.js`** — structured markdown→block content helper (also mirrored under `content/data-markdown.js`).
- **`Work/src/content-from-markdown.html`** — sample HTML body used by old compare/generation tests.
- **`Work/tests/unit/__snapshots__/templateBehavior.freeze.unit.test.js.snap`** — freeze snapshots for `hn` / `hn-without-ads`.
- **`Work/tests/integration/data-sources.*.test.js`** (and related) — content/ shape checks broader than the scripts suite.
- **`packages/template-presets-hn` + outerTemplate templates** — `hn-without-ads` (`featureFlags.ads: false`, blocks without ads). Prefer the scripts CLI `--template=hn-without-ads` going forward.
- **outerTemplate components** (`body`, `head`, `footer` socials, `headStyles`) — fullest historical HN HTML; scripts already port the chrome used in production.

## How to read this tree

Treat it as reference source. Do not add new features here. If you need behavior
back in the live path, port into `scripts/` (or a published LLazyEmail package),
then leave the archive alone.
