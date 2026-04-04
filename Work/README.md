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
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting with Prettier |

## End-to-end HTML generation proof

Running `npm run test:real-data` proves that the repository can generate a real HTML email template from fixture data. It is the canonical command for verifying end-to-end template generation.

### What it does

Two integration tests run sequentially:

1. **`tests/integration/display.real-data.generation.test.js`**
   - Builds a full HTML template using the display-layer sections (`displayHead`, `displayFooter`, `displayBody`, `displayMain`) with data from `src/data.js`.
   - Writes the rendered HTML to `generated-real-data/real-data-template.html`.
   - Asserts the file exists and the HTML contains `<!DOCTYPE html>`, the newsletter title, the preview text, and the sponsor logo marker.

2. **`tests/integration/display.real-data.integration2.test.js`**
   - Exercises the `renderTemplate('hn', { string, data })` registry path — the same call used in production flows.
   - Asserts the output contains `<!DOCTYPE html>`, the correct `<title>`, the preview text, and a known content marker from `src/data.js`.

### How to run locally

```bash
cd Work
npm ci
npm run test:real-data
```

After the command completes, inspect the generated file:

```bash
open Work/generated-real-data/real-data-template.html   # macOS
xdg-open Work/generated-real-data/real-data-template.html  # Linux
```

### Pass / fail criteria

| Criterion | Pass | Fail |
|-----------|------|------|
| All Jest assertions green | ✅ exit 0 | ❌ non-zero exit, assertion output shown |
| `generated-real-data/real-data-template.html` exists after run | ✅ present | ❌ missing (generation test did not run or threw) |
| HTML contains `<!DOCTYPE html>` | ✅ | ❌ |
| HTML contains the newsletter title from `src/data.js` | ✅ | ❌ |

### CI artifacts

The CI workflow (`.github/workflows/node.js.yml`) uploads `Work/generated-real-data/` as a downloadable artifact named **`generated-html-real-data`** after each successful run on Node 20.

To download:
1. Open the GitHub Actions workflow run.
2. Scroll to the **Artifacts** section at the bottom of the run summary.
3. Click **`generated-html-real-data`** to download the ZIP.
4. Unzip and open `real-data-template.html` in any browser.

### Troubleshooting

- **`jest: not found` when running `npm run test:real-data`**
  - Install dependencies first:
  ```bash
  cd Work
  npm ci
  ```

- **`generated-real-data/real-data-template.html` was not created**
  - Re-run the command and check test output for failures:
  ```bash
  cd Work
  npm run test:real-data
  ```
  - The file is written only when the integration test passes.

- **Template generated, but content looks stale**
  - The generated file is overwritten on each successful run.
  - Re-run `npm run test:real-data` after changing `src/data.js`.

## Template scalability roadmap progress

### Phase 1 — Introduce template definitions

Implemented a new definition layer to make adding templates declarative instead of
copying render logic.

Added:

- `src/templates/definitions/createTemplateFromDefinition.js`
- `src/templates/definitions/hn.definition.js`
- `src/templates/definitions/hn-without-ads.definition.js`
- `src/templates/definitions/index.js`

Updated:

- `src/templates/hn.js` now builds the template from `hn.definition.js`
- `src/templates/hn-without-ads.js` now builds from `hn-without-ads.definition.js`

Validation:

- `tests/unit/templateDefinitions.unit.test.js`

### Phase 2 — Make display rendering pipeline pure (non-mutating)

Refactored `src/engine/display/renderers.js` to avoid mutating imported shared
`settings` objects (`headSettings`, `bodySettings`, `mainSettings`).

What changed:

- each render call now creates fresh settings objects by cloning base params
- head/body/main params are overridden per call in local copies only
- resulting HTML output contract is preserved, but renderer internals are now
  deterministic and side-effect free

Validation:

- `tests/unit/displayRenderers.pure.unit.test.js`
- existing template contract and snapshot tests continue to pass

### Phase 4 — Add explicit schema validation for template input

Template definitions now support input schema validation via a `validateInput`
hook and reusable validator helpers:

- `src/templates/definitions/validation.js`
- `src/templates/definitions/createTemplateFromDefinition.js` now calls
  `validateInput` before mapping/rendering
- `src/templates/definitions/hn.definition.js` validates both payload shapes:
  - simple string payload must be a non-empty string
  - front-matter payload must include non-empty:
    - `string`
    - `data.title`
    - `data.preview`

Validation errors are explicit and template-scoped, for example:

- `[template:hn] invalid input: expected a non-empty string payload`
- `[template:hn] missing required field: data.title`

Validation:

- `tests/unit/templateValidation.unit.test.js`

### Phase 5 — Add a generator entrypoint

Added a CLI-style generator script:

- `scripts/generate-template.js`

Usage:

```bash
cd Work
npm run generate:template -- --template=hn --data=src/data.js --out=generated/hn.html
```

Arguments:

- `--template` template id (default: `hn`)
- `--data` path to payload module file (must export default/object)
- `--out` output HTML path

The script renders via `renderTemplate(...)`, writes the output file, and prints
the output path to stdout.

### Module split — Step 1 (extract `template-engine` package)

Started modularization by extracting shared template-engine primitives into a new workspace package:

- `packages/template-engine/`
  - `src/createTemplateFromDefinition.js`
  - `src/validation.js`
  - `src/index.js`

Workspace wiring updates:

- `Work/package.json` now includes `../packages/template-engine` in workspaces
- `Work/package.json` now depends on `@llazyemail/template-engine`

### Module split — Step 2 (extract `template-presets-hn` package)

Moved HN preset metadata/mapping into a dedicated workspace package:

- `packages/template-presets-hn/`
  - `src/hnPreset.js`
  - `src/hnWithoutAdsPreset.js`
  - `src/index.js`

Workspace wiring updates:

- `Work/package.json` now includes `../packages/template-presets-hn` in workspaces
- `Work/package.json` now depends on `@llazyemail/template-presets-hn`

### Module split — Step 3 (extract `template-runtime-display` package)

Moved display runtime rendering helpers into a dedicated workspace package:

- `packages/template-runtime-display/`
  - `src/renderers.js`
  - `src/index.js`

`Work` keeps the same `engine/display` API by delegating to the runtime package:

- `src/engine/display/renderers.js` now imports and re-exports runtime renderers
  from `@llazyemail/template-runtime-display`

Workspace wiring updates:

- `Work/package.json` now includes `../packages/template-runtime-display` in workspaces
- `Work/package.json` now depends on `@llazyemail/template-runtime-display`

### OuterTemplate migration — Complete template migration (Step 3)

Completed the full migration of template ownership from `Work/src/templates/` to
`sub-modules/outerTemplate`. All template logic now lives in `outerTemplate`;
`Work/` no longer contains any active template source files.

What changed:

- `Work/src/templates/` — entire directory removed (was already delegating to `outerTemplate`)
- `Work/src/index.js`
  - now imports `renderTemplate` directly from `atherdon-newsletter-js-layouts-outertemplate`
- All `Work/tests/` files that imported from `Work/src/templates/**`
  - updated to import from `atherdon-newsletter-js-layouts-outertemplate` or
    `@llazyemail/template-engine` as appropriate

Validation:

- All 389 unit and integration tests pass with the new import paths
- Template rendering behavior is unchanged

## Work/ Directory Policy

`Work/` is the **integration and orchestration layer** for this repository. It wires together packages and sub-modules for end-to-end tests, the development CLI, and the published compatibility shim — nothing more.

### Allowed in `Work/`

| Type | Example |
|------|---------|
| End-to-end integration tests | `tests/integration/` |
| CLI / generation scripts | `scripts/generate-template.js` |
| Build and tooling config | `rollup.config.js`, `jest.config.js`, `.babelrc` |
| Fixture / sample data used by tests and CLI | `src/data.js` |
| Thin compatibility re-exports delegating to packages | `src/index.js` (re-exports from `outerTemplate`) |

### Prohibited in `Work/`

Do **not** add any of the following under `Work/`:

- New template definition files (`src/templates/`)
- New display pipeline sections (`src/display/`)
- New reusable HTML component functions (`src/components/`)

If the logic could benefit any consumer of the published packages, it belongs in the appropriate package:

| Logic type | Correct home |
|------------|-------------|
| Outer-shell layout + template definitions | `sub-modules/outerTemplate/` |
| Display pipeline sections | `packages/template-runtime-display/` |
| Template factory / shared types | `packages/template-engine/` |
| HN-specific preset data | `packages/template-presets-hn/` |
| Inner content components | `sub-modules/innerComponents/` |

### CI enforcement

The [`.github/workflows/work-policy.yml`](../.github/workflows/work-policy.yml) workflow runs on every PR that touches `Work/src/**`. It fails the PR if any new `.js` files are added to `Work/src/templates/`, `Work/src/display/`, or `Work/src/components/`.

For full context see [ADR 0001 — Module Boundaries](../docs/adr/0001-module-boundaries.md) and [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## Structure

```
Work/
├── src/             # Source files
├── sub-modules/     # Sub-module packages (innerComponents, Miscellaneous)
├── tests/           # Unit and integration tests
├── bash/            # Helper shell scripts
├── dist/            # Build output (git-ignored)
└── node_modules/    # Dependencies (git-ignored)
```

## CI

Continuous integration is defined in `.github/workflows/node.js.yml` and enforces the following guardrails on every push and pull request to `main`:

| Check | What it guards |
|-------|---------------|
| `npm ci` | Fails if `package-lock.json` is out of sync with `package.json` (lockfile consistency) |
| `npm run lint` | Fails on ESLint errors in any module |
| `npm run build` | Fails if rollup cannot bundle the package (catches unresolved imports) |
| `npx madge --circular src/index.js` | Fails if circular imports are detected in `Work/` |
| `npm test` | Fails if any unit or integration test fails |
| `npm run test:real-data` | Fails if end-to-end HTML generation from `src/data.js` fixtures fails; uploads `generated-html-real-data` artifact (Node 20 run) |

The same lockfile, lint, build, and test checks run for each sub-module (`Typography`, `innerComponents`, `Miscellaneous`) in a parallel matrix job.

### Equivalent local commands

```bash
# Work/ package
cd Work
npm ci                              # lockfile check
npm run lint                        # ESLint
npm run build                       # bundle + unresolved-import check
npx madge --circular src/index.js  # circular import check
npm test                            # tests

# Any sub-module (e.g. Typography)
cd sub-modules/Typography
npm ci
npm run lint
npm run build
npm test
```
