# ADR 0001 — Module Boundaries and Dependency Direction

| Field       | Value                          |
|-------------|--------------------------------|
| **Status**  | Accepted                       |
| **Date**    | 2026-04-03                     |
| **Authors** | LLazyEmail maintainers         |

---

## Context

The repository is in active migration from a monolithic `Work/` package toward a modular, independently-testable structure. Several areas of responsibility have drifted across directories during this process, making it unclear to contributors where new code should live and which modules are allowed to depend on which. This ADR locks down the final boundaries and dependency direction so that future work can proceed without ambiguity.

---

## Modules and Their Responsibilities

### 1. `sub-modules/outerTemplate` (`atherdon-newsletter-js-layouts-outertemplate`)

**Owns:**
- Outer-shell layout components — `head`, `main`, `body`, `footer` HTML component functions.
- Template registry: the named set of assembled outer templates (e.g. `hn`, `hn-without-ads`).
- Template definition files (metadata + payload-mapping adapters) for each registered template name.
- All rendering logic that wraps inner content in the outer email shell.
- Public export surface (`src/index.js`) that exposes `registry`, individual template functions, and layout components.

**Does not own:**
- Display pipeline orchestration (mapper → model → renderer chain).
- Business-level data fetching, IO, file system access, or network calls.
- Inner content components (articles, sponsors, preview text) — those belong in `sub-modules/innerComponents`.

---

### 2. Display runtime — `packages/template-runtime-display` (`@llazyemail/template-runtime-display`)

**Owns:**
- The three-step display pipeline abstraction: `mapper.js` → `model.js` (validation) → `display.js` (render).
- `createDisplaySection` factory — wraps the three-step pattern into a reusable section runner.
- `runDisplayPipeline` — orchestrates running all sections for a template.
- Section-level display definitions (`head`, `body`, `main`, `mainFront`, `footer`, `content`): each section's mapper, model-validator, and renderer.
- Display error types and the `createDisplayError` helper.

**Does not own:**
- Template definitions or the template registry.
- Low-level HTML component functions.
- `Work/`-level integration scripts, data fixtures, or CLI tooling.

---

### 3. Template engine — `packages/template-engine` (`@llazyemail/template-engine`)

**Owns:**
- Generic template creation utilities (`createTemplateFromDefinition`).
- Shared validation helpers for template inputs.
- The public factory that turns a definition object into a callable template function.
- Shared TypeScript/JSDoc types for template definitions, payload shapes, and rendering context.

**Does not own:**
- HN-specific template definitions or preset data (those belong in `packages/template-presets-hn` or `sub-modules/outerTemplate`).
- Display pipeline logic (that belongs in `template-runtime-display`).
- Any IO, side-effects, or framework-specific code.

---

### 4. `Work/` directory

**Owns (going forward — integration and orchestration only):**
- End-to-end integration tests that exercise the full pipeline using real or realistic fixture data.
- CLI scripts (`scripts/generate-template.js`) for local development and preview generation.
- Build configuration (`rollup.config.js`, `.babelrc`, `jest.config.js`).
- Sample/fixture data files (`src/data.js`) used by integration tests and the CLI.
- CI-facing test entry points (e.g. `test:real-data`).

**Does not own (must not add new instances of):**
- Core template rendering logic.
- New template definitions or template registry entries.
- Display pipeline section implementations.
- Reusable component functions intended for use outside `Work/`.

> **Rule:** `Work/` is the integration and orchestration layer. If a piece of logic could be useful to any consumer of the packages, it must live in the appropriate package, not in `Work/`.

---

## Dependency Direction

Dependencies must only flow **inward** (toward lower-level, more stable modules). The allowed dependency graph is:

```
Work/  (integration / orchestration)
  │
  ├──▶  packages/template-runtime-display
  │         │
  │         └──▶  packages/template-engine
  │                    │
  │                    └──▶  (shared types / no further internal deps)
  │
  ├──▶  sub-modules/outerTemplate
  │         │
  │         └──▶  packages/template-engine   (optional, for shared types)
  │
  └──▶  sub-modules/innerComponents
            │
            └──▶  sub-modules/Typography
                  sub-modules/Miscellaneous
```

### Rules

| Allowed | Not allowed |
|---------|-------------|
| `Work/` → any package or sub-module | Any package or sub-module → `Work/` |
| `template-runtime-display` → `template-engine` | `template-engine` → `template-runtime-display` |
| `outerTemplate` → `template-engine` (types only) | `template-engine` → `outerTemplate` |
| `innerComponents` → `Typography`, `Miscellaneous` | `Typography` / `Miscellaneous` → `innerComponents` |
| Any module → published npm utilities (lodash, etc.) | Cross-sibling sub-module imports (e.g. `outerTemplate` → `innerComponents`) |

**Key constraint:** No package or sub-module may import from `Work/`. `Work/` is the consumer, never the provider.

---

## Migration Guidance

The following template logic previously resided in `Work/src/templates/` and has been fully migrated to `sub-modules/outerTemplate` as part of completing this migration (Step 3).

| Migrated item | Canonical location | Status |
|---|---|---|
| `hn` template | `sub-modules/outerTemplate/src/templates/hn.js` | ✅ Done |
| `hn-without-ads` template | `sub-modules/outerTemplate/src/templates/hn-without-ads.js` | ✅ Done |
| HN definition assembly (`buildHnDefinition`) | `sub-modules/outerTemplate/src/runtime/displayRuntimeDeps.js` | ✅ Done |
| HN-without-ads definition assembly (`buildHnWithoutAdsDefinition`) | `sub-modules/outerTemplate/src/runtime/displayRuntimeDeps.js` | ✅ Done |
| Template registry and `renderTemplate` | `sub-modules/outerTemplate/src/templates/index.js` | ✅ Done |
| `src/display/` (all sections + core) | `packages/template-runtime-display/src/` | Pending future step |
| `src/components/` (low-level HTML components) | `sub-modules/outerTemplate/src/components/` | Pending future step |

### Migration steps per item

1. Copy the file to the target package.
2. Update internal imports within the file to reflect the new path.
3. Add or update the target package's `index.js` to export the moved symbol.
4. Update all callers (start with `Work/` callers, then any cross-package callers).
5. Delete the original file from `Work/src/`.
6. Run `npm test` in `Work/` and in the target package to confirm nothing is broken.
7. If the moved symbol was part of `Work/src/index.js` exports, remove it from there and confirm no external consumer relied on the old path (check npm dependents if published).

---

## Acceptance Criteria

Maintainers can use the following checklist when reviewing PRs that touch module boundaries:

- [x] No new template definition files have been added to `Work/src/templates/` — directory fully removed.
- [ ] No new display pipeline section implementations have been added to `Work/src/display/`.
- [ ] No new reusable component functions have been added to `Work/src/components/`.
- [ ] No package or sub-module imports from `Work/` (check `package.json` dependencies and `import`/`require` statements).
- [ ] `template-engine` does not import from `template-runtime-display` or from any sub-module.
- [ ] `template-runtime-display` does not import from `sub-modules/outerTemplate` or from `Work/`.
- [ ] `sub-modules/outerTemplate` does not import from `sub-modules/innerComponents` or from `Work/`.
- [ ] Any new public API symbol is exported via the owning module's `index.js`, not via deep internal paths.
- [ ] Tests for the new/moved code live in the owning module's `tests/` directory, not only in `Work/tests/`.
- [ ] `Work/` integration tests still pass after any migration step.

---

## Consequences

**Positive:**
- Clear ownership makes it easy for contributors to know where to add new templates, sections, or components.
- Enforced dependency direction prevents circular dependencies and accidental coupling to `Work/`'s integration scaffolding.
- Independent packages can be published, versioned, and consumed separately.

**Negative / trade-offs:**
- Requires completing the in-progress migration before `Work/` is fully integration-only.
- Contributors must check this ADR before adding new files to `Work/src/`.

---

## Related

- `sub-modules/outerTemplate/` — primary template ownership module
- `packages/template-engine/` — shared template factory and types
- `packages/template-runtime-display/` — display pipeline implementation
- `packages/template-presets-hn/` — HN-specific preset definitions
- [12-step architecture improvement plan](../../README.md#architecture-roadmap) *(to be added)*
