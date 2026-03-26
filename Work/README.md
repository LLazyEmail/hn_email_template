# Work

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

## Real-data template generation (What I changed)

To test the full display-layer logic with real payload data, the project now includes an integration flow that renders a full HTML template from display partials and writes it to disk.

### What was added

1. **Integration generation test**
   - `tests/integration/display.real-data.generation.test.js`
   - Uses real data from `src/data.js`
   - Builds template through:
     - `displayHead`
     - `displayFooter`
     - `displayBody`
     - `displayMain`
   - Maps real `ads` and `images` into body `content` HTML.

2. **Script for running it**
   - `package.json` includes:
     - `npm run test:real-data`

3. **Generated output artifact**
   - Output folder/file:
     - `generated-real-data/real-data-template.html`
   - File is created by the integration test and can be opened directly for inspection.

### How to use

```bash
cd Work
npm ci
npm run test:real-data
```

After the command completes, inspect:

```bash
Work/generated-real-data/real-data-template.html
```

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

Started modularization by extracting shared template-engine primitives from
`Work/src/templates/definitions/*` into a new workspace package:

- `packages/template-engine/`
  - `src/createTemplateFromDefinition.js`
  - `src/validation.js`
  - `src/index.js`

`Work` keeps backward compatibility by re-exporting these APIs through
compatibility wrappers:

- `src/templates/definitions/createTemplateFromDefinition.js`
- `src/templates/definitions/validation.js`

Workspace wiring updates:

- `Work/package.json` now includes `../packages/template-engine` in workspaces
- `Work/package.json` now depends on `@llazyemail/template-engine`

### Module split — Step 2 (extract `template-presets-hn` package)

Moved HN preset metadata/mapping into a dedicated workspace package:

- `packages/template-presets-hn/`
  - `src/hnPreset.js`
  - `src/hnWithoutAdsPreset.js`
  - `src/index.js`

`Work` keeps the same public behavior by composing runtime adapters
(display renderers + validation hooks) on top of those preset exports:

- `src/templates/definitions/hn-preset-adapters.js`
- `src/templates/definitions/hn.definition.js` (wrapper export)
- `src/templates/definitions/hn-without-ads.definition.js` (wrapper export)

Workspace wiring updates:

- `Work/package.json` now includes `../packages/template-presets-hn` in workspaces
- `Work/package.json` now depends on `@llazyemail/template-presets-hn`

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
