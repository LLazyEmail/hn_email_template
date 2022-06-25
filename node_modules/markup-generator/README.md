

## generator-module aka "markup-generator"

`yarn add markup-generator`

It's just an HTML file generator

Main reason - we want to generate an HTML email newsletter automatically, so generator must have methods that can help you to save a file.


Submodule for https://github.com/atherdon/markdown-to-email


```
import { writeHTML, generateTemplateName } from 'markup-generator'

const content = '<html></html>'; // long html template stored in this variable
const fileName = generateTemplateName('prefix-for-your-generated-file');

writeHTML(fileName, content);
```


### TODO
- [ ] move tests here

- [ ] update babel-eslint config with @babel/eslint-parser
https://github.com/atherdon/markdown-regex/blob/main/.eslintrc.json

- [ ] Creating a browser bundle that depends on "path". You might need to include https://github.com/snowpackjs/rollup-plugin-polyfill-node
https://github.com/atherdon/markdown-regex/blob/main/rollup.config.js#L2
https://github.com/atherdon/markdown-regex/blob/main/rollup.config.js#L115





#### Arthur Tkachenko articles

* [https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy](https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy)
* [https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template](https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template)
* [https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates](https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates)
* [https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates](https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates)
* [https://hackernoon.com/glossary-for-non-technies](https://hackernoon.com/glossary-for-non-technies)
* [https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter](https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter)
* [https://hackernoon.com/exploring-substack-for-building-your-newsletter](https://hackernoon.com/exploring-substack-for-building-your-newsletter)
* [https://hackernoon.com/building-a-design-system-for-email-templates-react](https://hackernoon.com/building-a-design-system-for-email-templates-react)
* [https://hackernoon.com/together4victory-list-of-email-marketing-tools](https://hackernoon.com/together4victory-list-of-email-marketing-tools)
* [https://hackernoon.com/cool-newsletters-for-developers-part-1](https://hackernoon.com/cool-newsletters-for-developers-part-1)
* [https://hackernoon.com/cool-resources-for-sending-emails](https://hackernoon.com/cool-resources-for-sending-emails)
