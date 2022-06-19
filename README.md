# Plain JS functions for generating HTML email template

## Not: OuterTemplate moved into the root as the main project. other modules sitting in ./components folder



### MainComponent

we upgrading our workflow. thing below arent up-to-date
```
const displayMain = () => {
  
    const head = displayHead(title);
    const body = displayBody();
    
    return mainComponent(head, body);
}
```

### EmailTemplateBodyComponent 

```
const displayBody = () => {
    return EmailTemplateBodyComponent(footer(), logoTop, logoBottom, '');
}
```

### footer

```
const displayFooter = () => {

}
```

atherdon-newsletter-js-layouts-misc is 


---


---

```bash
├── xxx
│   ├── xxx
│   │   ├── **/*.xxx
│   ├── xxx
│   ├── images
│   ├── xxx
│   ├── js
│   │   ├── **/*.js
│   └── xxx
├── dist (or build)
├── 
├── 
├── 
├── 
├── README.md
├── package.json
├── 
└── .gitignore
```

---

## Introduction

I was rebuilding a part of our [markdown-to-email](https://github.com/atherdon/markdown-to-email) repository. I was not happy with how we handle templates in our generator.

While there are not many things that changed behind how it works, I still want to showcase them in my article.

All developers work with strings, generating chunks of HTML code. I spend days thinking about how to improve it for our benefit.

While this version of the template will be obsolete when we upgrade our generator, there is still room to forget some knowledge and learn how to keep things simple and not be seduced by ideas to complete it quickly.


So we have been working on rendering HTML for a while right now. 

Our HTML template contains an old HTML4 style markup that is very sensitive and requires careful work and attention to small details. I have been asking for help from different developers, but everybody struggles with it from the beginning. 

So we are combining that HTML page from small parts, and for the last nine months, I moved those parts away into a small js module. 

With the help of RollupJS, it's easy to work.

 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/62g0ie0unri1ad1aoy8k.png)

I was able to extend it and even clone it. I decided to build a react-dom tree at some point instead of HTML. 

So I copy-pasted everything and replaced my literals with react tags. It looks like “custom XML”, which can be just another way of presenting the information.

After that, this module didn't evolve a lot. Everything was working ok, but not ideally. I tried to expand it and polish our functionality, but things didn't move fast. 
 
This module was located in folder "packages" with other modules that I have.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xqep0y6lxflgsireezp3.png)

At this point, I decided that there was a lot of coding, and I was sick of it. So I created a new repository and moved it there. While it was just a copy-paste - it helped me to think differently. I was able to focus only on those 25 files.
 

From the beginning, we think about our template in 2 only forms: "content only" and "full template". Most bugs was in the "content" part, while the main template was pretty stable. But it was hard to go from "content only" into "full template" sometimes - we don't have an easy way to preview it or debug.

So I separated our 25 files into two parts: literals related to "not content" was named "outer template."

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ypf0uon3b80zl2230ff.png)

And I decided to replace my literals with functions.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ajg3lzb6mvl0uox2we0p.png)

Functions look similar to simple react components.



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bt3qijnk6yyinrc3dww8.png)

It gives me the ability to debug my strings how I want it.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wnfogb6bsqqrvbslrqt0.png)

I even created a folder with basic tests inside.

 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jjpou6ut89kdvrc3ysnp.png)

Hope you like it!


More articles about building markdown to email:
- [https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b](https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b)
- [https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo](https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo)

UPD. I forget to add a link to a repository with a source code.
[Current code is here](https://github.com/LLazyEmail/_trying-lit), but I probably rename this repository later.

---


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/OuterTemplate.png)


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/adding-tests.png)


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/export.png)


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/functions.png)


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/literals.png)


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/more-checks.png)


![](https://raw.githubusercontent.com/LLazyEmail/_trying-lit/main/images/packages-folder.png)


![]()


![]()






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






  Try this later

  - https://www.npmjs.com/package/html-validate

  - https://www.npmjs.com/package/html-validator-cli

  - https://www.npmjs.com/package/sanitizer

  - https://www.npmjs.com/package/common-tags#introduction

https://www.npmjs.com/package/htmljs-parser
https://www.npmjs.com/package/parse5
https://www.npmjs.com/package/@tehshrike/html-template-tag



submodule for https://github.com/atherdon/markdown-to-email



---

Explore later:

https://lit.dev/


https://github.com/lit/lit/tree/main/packages/lit-html


### atherdon-newsletter-js-layouts



  -- > body
  -- > misc
  -- > typography
  -- > main
  -- > head
  -- > fullTemplate



### atherdon-newsletter-js-layouts-misc


### atherdon-newsletter-js-layouts-typography


### atherdon-newsletter-js-layouts-body

body
  - > headline
  - > logoBottom
  - > logoTop
  - > previewText
  - > section
  - > sponsor


  "atherdon-newsletter-js-layouts"
  contains
    "atherdon-newsletter-js-layouts-body"
    "atherdon-newsletter-js-layouts-footer"
    "atherdon-newsletter-js-layouts-misc"
    "atherdon-newsletter-js-layouts-typography"
  

```
  if (typeof headStylesComponent != 'function'){ 
    throw new Error('invalid headStylesComponent, must be a function');
  }

   if (!title) {
    throw new Error('no title was passed');
  }
```
