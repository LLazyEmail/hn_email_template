import { renderDisplayTemplate, renderDisplayFrontMatterTemplate } from '../../../../Work/src/engine/display';
import { HeadHTMLString } from '../../../../Work/src/display/sections/head';
import { BodyHTMLString } from '../../../../Work/src/display/sections/body';
import { FooterHTMLString } from '../../../../Work/src/display/sections/footer';
import { MainHTMLString } from '../../../../Work/src/display/sections/main';
import { validateHnTemplateInput } from '@llazyemail/template-engine';
import {
  createHnPresetDefinition,
  createHnWithoutAdsPresetDefinition,
} from '@llazyemail/template-presets-hn';
import {
  validateHnWithoutAdsTemplateInput,
} from '@llazyemail/template-engine';

const displayDeps = {
  headString: HeadHTMLString,
  bodyString: BodyHTMLString,
  footerString: FooterHTMLString,
  mainString: MainHTMLString,
};

const buildHnDefinition = () =>
  createHnPresetDefinition({
    renderers: {
      simple: renderDisplayTemplate,
      frontMatter: renderDisplayFrontMatterTemplate,
    },
    validateInput: validateHnTemplateInput,
  });

const buildHnWithoutAdsDefinition = () =>
  createHnWithoutAdsPresetDefinition({
    renderers: {
      simple: renderDisplayTemplate,
      frontMatter: renderDisplayFrontMatterTemplate,
    },
    validateInput: validateHnWithoutAdsTemplateInput,
  });

export {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
  displayDeps,
  buildHnDefinition,
  buildHnWithoutAdsDefinition,
};
