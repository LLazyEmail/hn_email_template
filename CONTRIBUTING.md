# Contributing to hn_email_template

Thank you for contributing! Please read this guide before opening a PR.

---

## Quick Start

1. **Fork** the repository and create a feature branch:
   ```bash
   git checkout -b feature/my-improvement
   ```
2. Make your changes in the **appropriate module** (see [Where to add new code](#where-to-add-new-code) below).
3. **Run tests** and make sure they pass:
   ```bash
   cd Work && npm test
   ```
4. **Run the linter** and fix any issues:
   ```bash
   cd Work && npm run lint:fix
   ```
5. **Commit** using a clear commit message. Pre-commit hooks will run automatically.
6. Open a **Pull Request** against the `main` branch with a description of your changes.

Please keep PRs focused and atomic. If you have a large change, open an issue first to discuss the approach.

---

## Work/ Directory Policy

> **`Work/` is integration and orchestration only. No new core logic should be added under `Work/`.**

This rule is locked in [ADR 0001 — Module Boundaries](docs/adr/0001-module-boundaries.md) and is enforced by CI.

### What `Work/` owns (allowed)

| Type | Example paths |
|------|---------------|
| End-to-end integration tests | `Work/tests/integration/` |
| CLI and generation scripts | `Work/scripts/` |
| Build and tooling configuration | `Work/rollup.config.js`, `Work/jest.config.js`, `Work/.babelrc` |
| Sample / fixture data used by integration tests and CLI | `Work/src/data.js` |
| Compatibility re-exports / thin shims delegating to packages | `Work/src/index.js` (re-exports `renderTemplate` from `outerTemplate`) |

### What `Work/` must NOT own (prohibited)

| Type | Correct home |
|------|-------------|
| New template definitions | `sub-modules/outerTemplate/src/templates/` |
| New display pipeline sections (mapper / model / display) | `packages/template-runtime-display/src/` |
| New reusable component functions | `sub-modules/outerTemplate/src/components/` or `sub-modules/innerComponents/src/` |
| New template-engine utilities or shared types | `packages/template-engine/src/` |
| New HN-specific preset data | `packages/template-presets-hn/src/` |

**Rule of thumb:** If the logic could be useful to any consumer of the published packages, it must live in the appropriate package — not in `Work/`.

### CI enforcement

A dedicated workflow (`.github/workflows/work-policy.yml`) runs on every pull request that touches `Work/src/**`. It will **fail the PR** if any new `.js` source files are detected in:

- `Work/src/templates/`
- `Work/src/display/`
- `Work/src/components/`

If your PR is blocked by this check and you believe it is a false positive (for example, you are adding a migration shim or updating an existing file), open an issue or leave a comment explaining the reason so a maintainer can review.

---

## Where to Add New Code

| What you want to add | Where it lives |
|----------------------|----------------|
| New email outer template (e.g. a new newsletter variant) | `sub-modules/outerTemplate/src/templates/` |
| New layout component (head, body, footer variant) | `sub-modules/outerTemplate/src/components/` |
| New inner content component (article block, sponsor, etc.) | `sub-modules/innerComponents/src/components/` |
| New display pipeline section | `packages/template-runtime-display/src/` |
| New template factory helper or shared type | `packages/template-engine/src/` |
| New HN-specific preset or mapping | `packages/template-presets-hn/src/` |
| New end-to-end integration test | `Work/tests/integration/` |
| New development / generation CLI script | `Work/scripts/` |

---

## Architecture Overview

The allowed dependency direction flows **inward** — toward lower-level, more stable modules:

```
Work/  (integration / orchestration — consumers only, no core logic)
  │
  ├──▶  sub-modules/outerTemplate        (outer-shell layouts + template registry)
  │         └──▶  packages/template-engine
  │
  ├──▶  packages/template-runtime-display  (display pipeline: mapper → model → renderer)
  │         └──▶  packages/template-engine
  │
  └──▶  sub-modules/innerComponents
            └──▶  sub-modules/Typography
                  sub-modules/Miscellaneous
```

No package or sub-module may import from `Work/`. `Work/` is the consumer, never the provider.

For full details see [ADR 0001 — Module Boundaries and Dependency Direction](docs/adr/0001-module-boundaries.md).

---

## Code Style

- **JavaScript** with Babel transpilation (ES2015+).
- **ESLint** config lives in `Work/.eslintrc.js`. Run `npm run lint` to check and `npm run lint:fix` to auto-fix.
- **Prettier** config lives in `Work/.prettierrc`. Run `npm run format` to apply.
- Pre-commit hooks via Husky + lint-staged run ESLint and Prettier automatically on staged files.

---

## Tests

| Suite | Command | Where tests live |
|-------|---------|-----------------|
| All tests | `cd Work && npm test` | `Work/tests/` |
| Unit tests only | `cd Work && npm run test:unit` | `Work/tests/unit/` |
| Integration tests only | `cd Work && npm run test:integration` | `Work/tests/integration/` |
| Real-data generation test | `cd Work && npm run test:real-data` | `Work/tests/integration/display.real-data.generation.test.js` |

New tests for logic in a package should live in that package's own `tests/` directory, not only in `Work/tests/`.

---

## Related Documents

- [ADR 0001 — Module Boundaries and Dependency Direction](docs/adr/0001-module-boundaries.md)
- [Work/ README](Work/README.md) — scripts, structure, and CI details
- [Root README](README.md) — full project overview and architecture
