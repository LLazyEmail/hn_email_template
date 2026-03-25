# outerTemplate

> Part of the [sub-modules](../README.md) component library.

## Purpose

This directory is a **stub placeholder** for a future self-contained `outerTemplate` sub-module. The outer template implementation currently lives in the parent `Work/` directory (`atherdon-old-newsletter-js-outertemplate` v3.9.0).

## Current status

This module contains no source code yet. It exists to reserve the sub-module slot and document intent.

## Planned responsibility

When implemented, this module should:

- Provide the top-level HTML wrapper for a complete newsletter email.
- Consume `innerComponents` (`atherdon-newsletter-js-layouts-body`) and `Typography` (`atherdon-newsletter-js-layouts-typography`) as dependencies.
- Export a single function that accepts a structured content object and returns a complete HTML email string.

## Known limitations / TODOs

- No `package.json`, `src/`, or `rollup.config.js` present — the module is not buildable or publishable yet.
- Migrate or extract the relevant code from `Work/` into this directory to make it a proper standalone package.
- Once implemented, add an npm package name (suggested: `atherdon-newsletter-js-layouts-outertemplate`) and register it in the dependency graph documented in [sub-modules/README.md](../README.md).
