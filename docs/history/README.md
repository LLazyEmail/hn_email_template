# Documentation history

Older docs from previous phases of this repository, kept verbatim for
reference. Relative links inside these files may be broken because they were
moved here.

The root [`README.md`](../../README.md) keeps the full pre-runtime-display
README body (extended with a **Current state** section and legacy callouts) —
it was not moved here, to avoid duplicating that content.

| File | Phase | Was |
|------|-------|-----|
| [`README-original.md`](README-original.md) | 1 — plain JS functions, `Work/` as working copy, plans for NX/TypeScript | `README.old.md` |
| [`read4-work-package-readme.md`](read4-work-package-readme.md) | 2 — `Work/` package (`atherdon-old-newsletter-js-outertemplate`): Rollup/Jest, Work/ policy, CI, E2E proof, migration steps | `read4.md` |
| [`readme3-work-ci-migration-notes.md`](readme3-work-ci-migration-notes.md) | 2 — near-duplicate of `read4.md` sections (Work/ policy, CI, E2E proof, migration history) | `readme3.md` |

## Phases in short

1. **Plain JS components** — one big HTML email split into function components
   (outer template + inner components, Typography, Miscellaneous).
2. **`Work/` package** — Rollup/Babel/Jest build, display pipeline
   (mapper → model → display), template registry, fixtures, CI policy for `Work/`.
3. **Module split** — extraction into `packages/template-engine`,
   `packages/template-presets-hn`, a local `packages/template-runtime-display`,
   and `sub-modules/outerTemplate` (ADR 0001).
4. **Current** — `scripts/generate-template.js` on the published
   `@llazyemail/template-runtime-display`; phase 1–3 code is being removed in
   separate PRs. See root README **Current state** and [`AGENTS.md`](../../AGENTS.md).
