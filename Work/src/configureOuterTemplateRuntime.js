import { configureOuterTemplateRuntime } from 'atherdon-newsletter-js-layouts-outertemplate';
import {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
} from './engine/display';
import { HeadHTMLString } from './display/sections/head';
import { BodyHTMLString } from './display/sections/body';
import { FooterHTMLString } from './display/sections/footer';
import { MainHTMLString } from './display/sections/main';

configureOuterTemplateRuntime({
  displayDeps: {
    headString: HeadHTMLString,
    bodyString: BodyHTMLString,
    footerString: FooterHTMLString,
    mainString: MainHTMLString,
  },
  renderers: {
    simple: renderDisplayTemplate,
    frontMatter: renderDisplayFrontMatterTemplate,
  },
});
