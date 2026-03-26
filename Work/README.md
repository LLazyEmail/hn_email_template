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
