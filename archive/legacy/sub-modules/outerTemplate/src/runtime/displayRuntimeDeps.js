import { validateHnTemplateInput } from '@llazyemail/template-engine';
import {
  createHnPresetDefinition,
  createHnWithoutAdsPresetDefinition,
} from '@llazyemail/template-presets-hn';
import {
  validateHnWithoutAdsTemplateInput,
} from '@llazyemail/template-engine';

const displayDeps = {
  headString: '',
  bodyString: '',
  footerString: '',
  mainString: '',
};

const rendererImpl = {
  simple: null,
  frontMatter: null,
};

const renderDisplayTemplate = (content) => {
  if (typeof rendererImpl.simple !== 'function') {
    throw new Error(
      'outerTemplate runtime is not configured. Call configureOuterTemplateRuntime() from the Work orchestration layer.'
    );
  }
  return rendererImpl.simple(content);
};

const renderDisplayFrontMatterTemplate = (payload) => {
  if (typeof rendererImpl.frontMatter !== 'function') {
    throw new Error(
      'outerTemplate runtime is not configured. Call configureOuterTemplateRuntime() from the Work orchestration layer.'
    );
  }
  return rendererImpl.frontMatter(payload);
};

const configureOuterTemplateRuntime = ({ displayDeps: nextDeps, renderers } = {}) => {
  if (nextDeps) {
    if (nextDeps.headString !== undefined) displayDeps.headString = nextDeps.headString;
    if (nextDeps.bodyString !== undefined) displayDeps.bodyString = nextDeps.bodyString;
    if (nextDeps.footerString !== undefined) displayDeps.footerString = nextDeps.footerString;
    if (nextDeps.mainString !== undefined) displayDeps.mainString = nextDeps.mainString;
  }

  if (renderers) {
    if (typeof renderers.simple === 'function') rendererImpl.simple = renderers.simple;
    if (typeof renderers.frontMatter === 'function') rendererImpl.frontMatter = renderers.frontMatter;
  }

  return {
    displayDeps,
    renderers: rendererImpl,
  };
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
  configureOuterTemplateRuntime,
  buildHnDefinition,
  buildHnWithoutAdsDefinition,
};
