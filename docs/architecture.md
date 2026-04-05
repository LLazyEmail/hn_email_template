# Target Architecture

This document describes the intended top-level project structure after the
ongoing reorganization is complete.

## Target Directory Layout

```
hn_email_template/
├── content/             ← All newsletter content datasets
│   ├── content1.js      — canonical template dataset
│   ├── content2.js      — HN JSON-authored variant
│   ├── content3.js      — markdown-derived variant
│   └── data-markdown.js — body content blocks array
│
├── src/                 ← Rendering & business logic (migrating from Work/src/)
│   ├── index.js         — public API exports
│   ├── config.js        — shared constants
│   ├── display/         — display pipeline (mapper → model → display)
│   ├── components/      — low-level HTML component functions
│   └── engine/          — template engine & registry
│
├── scripts/             ← Generation scripts (migrated from Work/scripts/)
│   └── generate-template.js
│
├── tests/               ← Test suites (migrating from Work/tests/)
│   ├── unit/
│   ├── integration/
│   └── snapshots/
│
├── generated/           ← Generated HTML outputs (gitignored)
│
├── docs/                ← Project documentation & ADRs
│
├── Work/                ← DEPRECATED transitional runtime root (see below)
│
├── packages/            ← Published npm packages
│   ├── template-engine/
│   ├── template-presets-hn/
│   └── template-runtime-display/
│
└── sub-modules/         ← Standalone reusable sub-packages
    ├── outerTemplate/
    ├── Typography/
    ├── innerComponents/
    └── Miscellaneous/
```

## Work/ Deprecation

`Work/` is the current runtime root and is **transitional / deprecated**.

- No new core logic should be added to `Work/src/`.
- New code should target the top-level `src/`, `scripts/`, or `tests/` directories.
- `Work/` will be removed once the migration is complete (planned for a future PR).

See the 20-step reorganization plan for the full migration roadmap.

## Baseline Behavior (Step 1 Freeze)

The following commands capture the baseline generation behavior before
the reorganization. They can be used to verify that generation still
works after each migration step.

### Verify generation still works

```bash
cd Work && npm install

# Generate using canonical dataset (content2 = HN JSON variant):
npm run generate:template -- --data=../content/content2.js --out=generated/hn.html

# Generate using markdown-derived dataset (content3):
npm run generate:template -- \
  --data=../content/content3.js \
  --content=src/content-from-markdown.html \
  --out=generated/hn-markdown.html

# Generate all three content variants:
npm run generate:template -- --data=../content/content1.js --out=generated/content1.html
npm run generate:template -- --data=../content/content2.js --out=generated/content2.html
npm run generate:template -- --data=../content/content3.js --out=generated/content3.html

# Using the new top-level script (from project root):
node scripts/generate-template.js --data=content/content1.js --out=generated/content1.html
```

### Verify tests pass

```bash
cd Work && npm test
```

Expected: all unit and integration tests pass.

### Snapshot baseline

Snapshot tests live in `Work/tests/unit/templateBehavior.freeze.unit.test.js`
and capture the output of `renderTemplate('hn', ...)`. The snapshot files in
`Work/tests/unit/__snapshots__/` define the frozen baseline.

To regenerate snapshots after an intentional change:

```bash
cd Work && npm test -- --updateSnapshot
```
