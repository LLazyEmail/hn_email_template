# Work/sub-modules

This directory contains the independently-published npm packages that make up the HN Email Template component system. Each sub-module is a self-contained library that can be installed, built, and tested on its own.

## Modules

| Module | npm package | Description |
|--------|-------------|-------------|
| [Miscellaneous](./Miscellaneous/README.md) | `atherdon-newsletter-js-layouts-misc` | Footer and utility components (address, copyrights, fonts, unsubscribe, sponsorship link) |
| [Typography](./Typography/README.md) | `atherdon-newsletter-js-layouts-typography` | Text-formatting and layout components (headings, paragraphs, links, lists, images, separators, buttons) |
| [innerComponents](./innerComponents/README.md) | `atherdon-newsletter-js-layouts-body` | Body-structure components (headline, logos, preview text, sections, sponsor block, CTA) |
| [outerTemplate](./outerTemplate/README.md) | *(stub — see `Work/`)* | Placeholder directory; the outer template implementation lives in `Work/` |

## Dependency graph

```
Work/ (atherdon-old-newsletter-js-outertemplate)
  ├── innerComponents  (atherdon-newsletter-js-layouts-body)
  │     └── Miscellaneous  (atherdon-newsletter-js-layouts-misc)
  ├── Typography       (atherdon-newsletter-js-layouts-typography)
  └── Miscellaneous    (atherdon-newsletter-js-layouts-misc)
```

## Adding a new module

1. Create a directory under `Work/sub-modules/<ModuleName>/`.
2. Inside it, initialise a package with the naming convention `atherdon-newsletter-js-layouts-<name>`.
3. Add the standard toolchain files: `package.json`, `rollup.config.js`, `.babelrc`, `.eslintrc.json`, `.prettierrc`, `.eslintignore`, `.prettierignore`, `.npmignore`, `.gitignore`.
4. Put source code under `src/` with a single `src/index.js` entry point that exports a plain object of components.
5. Add a `tests/` directory with at least one Jest test file.
6. **Create a `README.md`** in the new directory following the structure used by the existing module READMEs:
   - Module name and npm package name
   - Purpose / responsibility
   - Public API (exported components with their signatures)
   - Usage example
   - Dependencies
   - Build / test / lint commands
   - Known limitations / TODOs
7. Add a row for the new module in the table above and link it back to `Work/sub-modules/README.md`.
