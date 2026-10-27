# Work (legacy)

The old rollup/babel render pipeline that lived here (and `sub-modules/outerTemplate`, `packages/template-*`) has been removed.
Rendering lives in [`scripts/`](../scripts) on top of `@llazyemail/template-runtime-display`:

```sh
cd scripts && NODE_AUTH_TOKEN=<token with read:packages> npm ci && npm test
node generate-template.js --data=../content/content2.js --out=../generated/hn.html
```

Kept here: `fixtures/`, reference renders in `generated*/`, and `src/content-from-markdown.html` (sample `--content` input).
