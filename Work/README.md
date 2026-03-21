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
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting with Prettier |

## Structure

```
Work/
├── src/             # Source files
├── sub-modules/     # Sub-module packages (Typography, innerComponents, Miscellaneous)
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
cd Work/sub-modules/Typography
npm ci
npm run lint
npm run build
npm test
```
