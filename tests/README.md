# tests/

This directory is the **target location** for all tests.

Tests are currently located in `Work/tests/` (unit and integration suites).
As part of the ongoing project reorganization, tests will be progressively
migrated here from `Work/tests/`.

## Status

🚧 **Migration in progress.** This directory is a placeholder introduced in
reorganization steps 1-8.

## Intended Structure (target state)

```
tests/
├── unit/         — unit tests (one per component/display section)
├── integration/  — end-to-end template rendering tests
└── snapshots/    — snapshot baselines for regression testing
```

Until the migration is complete, run tests from `Work/`:

```bash
cd Work
npm test
```
