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

Continuous integration runs on Node.js 18.x and 20.x using `npm ci` to install dependencies and `npm test` to run tests. See `.github/workflows/node.js.yml` for details.
