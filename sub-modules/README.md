# sub-modules

This directory contains the independently-published npm packages that make up the HN Email Template component system. Each sub-module is a self-contained library that can be installed, built, and tested on its own.

## Modules

| Module | npm package | Description |
|--------|-------------|-------------|
| [Miscellaneous](./Miscellaneous/README.md) | `atherdon-newsletter-js-layouts-misc` | Footer and utility components (address, copyrights, fonts, unsubscribe, sponsorship link) |
| [Typography](./Typography/README.md) | `atherdon-newsletter-js-layouts-typography` | Text-formatting and layout components (headings, paragraphs, links, lists, images, separators, buttons) |
| [innerComponents](./innerComponents/README.md) | `atherdon-newsletter-js-layouts-body` | Body-structure components (headline, logos, preview text, sections, sponsor block, CTA) |
| [outerTemplate](./outerTemplate/README.md) | `atherdon-newsletter-js-layouts-outertemplate` *(scaffold)* | Scaffolded standalone package for future outer template extraction; currently exports placeholder API |

## Dependency graph

```
Work/ (atherdon-old-newsletter-js-outertemplate)
  ├── innerComponents  (atherdon-newsletter-js-layouts-body)
  │     └── Miscellaneous  (atherdon-newsletter-js-layouts-misc)
  ├── Typography       (atherdon-newsletter-js-layouts-typography)
  └── Miscellaneous    (atherdon-newsletter-js-layouts-misc)
```

## Adding a new module

1. Create a directory under `sub-modules/<ModuleName>/`.
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
7. Add a row for the new module in the table above and link it back to `sub-modules/README.md`.

## Validation pattern

All modules that accept parameters implement a consistent runtime validation pattern so that missing or invalid arguments produce clear, actionable error messages instead of silent failures.

### Per-module error class and helpers

Each module has a `src/validation.js` file that exports:

| Export | Purpose |
|--------|---------|
| `<Module>ValidationError` | Custom error class extending `Error`; `name` is set to the class name for easy `instanceof` checks. |
| `assertRequired(context, field, value)` | Throws when `value` is `null` or `undefined`. |
| `assertNonEmptyString(context, field, value)` | Throws when `value` is not a non-empty string (calls `assertRequired` first). |
| `assertEnum(context, field, value, allowed)` | Throws when `value` is not in the `allowed` array (calls `assertRequired` first). |

### Error message format

Every thrown error has the structure:

```
[<Module>.<componentName>] <description>. Expected: <expected>. Received: <received>.
```

Examples:

```
[Miscellaneous.addressComponent] Missing required param "mailingAddress". Expected a value. Received: undefined.
[innerComponents.sponsorComponent] Invalid param "href". Expected a non-empty string. Received: "".
[Typography.headingComponent] Invalid param "variant". Expected one of: title|subtitle|heading|body|meta|link. Received: "banner".
```

### Adding validation to a new component

1. Import the helpers from the module's `src/validation.js`:
   ```js
   import { assertNonEmptyString, assertEnum } from '../validation';
   ```
2. Call the appropriate helper at the top of the component function, before any other logic:
   ```js
   const myComponent = ({ href, type }) => {
     assertNonEmptyString('myComponent', 'href', href);
     assertEnum('myComponent', 'type', type, ['primary', 'secondary']);
     // ... rest of implementation
   };
   ```
3. Add test cases in `tests/validation.test.js` for each validated parameter:
   - missing / `null` / `undefined` → throws the module's `ValidationError`
   - empty string → throws
   - invalid enum value → throws with the full allowed-values list in the message
   - valid input → does **not** throw
