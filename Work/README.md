# Work/

> **Stub.** Source and tests moved to [`archive/legacy/Work/`](../archive/legacy/Work/).
> Live rendering: [`scripts/`](../scripts/) + published `@llazyemail/template-runtime-display`.
> See [`archive/legacy/README.md`](../archive/legacy/README.md).

```bash
npm run generate:template -- --template=hn --data=../content/content2.js --out=../generated/hn.html
# or from scripts/:
cd ../scripts && npm run generate
```

Fixtures and generated HTML under this directory are leftover reference outputs
from the old Jest pipeline; they are not produced by CI anymore.
