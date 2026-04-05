# src/

This directory is the **target location** for rendering and business logic
currently located in `Work/src/`.

As part of the ongoing project reorganization (see README § Target Architecture),
source files will be progressively migrated here from `Work/src/`.

## Status

🚧 **Migration in progress.** This directory is a placeholder introduced in
reorganization steps 1-8. The actual logic still lives in `Work/src/` while
the migration is underway.

## Intended Contents (target state)

| Path | Description |
|------|-------------|
| `src/index.js` | Public API exports (facade) |
| `src/config.js` | Shared constants |
| `src/display/` | Display pipeline (mapper → model → display sections) |
| `src/components/` | Low-level HTML component functions |
| `src/engine/` | Template engine (renderers, registry) |

Until the migration is complete, import from the `Work/` paths or from the
installed packages (`atherdon-newsletter-js-layouts-outertemplate`, etc.).
