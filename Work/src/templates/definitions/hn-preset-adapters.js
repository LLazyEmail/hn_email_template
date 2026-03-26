import {
  createHnPresetDefinition,
  createHnWithoutAdsPresetDefinition,
} from '@llazyemail/template-presets-hn';
import {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
} from '../../engine/display';
import {
  validateHnTemplateInput,
  validateHnWithoutAdsTemplateInput,
} from './validation';

const withRuntimeAdapters = (preset, { renderers, validateInput }) => ({
  ...preset,
  renderers,
  validateInput,
});

export const buildHnDefinition = ({ renderers, validateInput } = {}) =>
  withRuntimeAdapters(createHnPresetDefinition(), {
    renderers: renderers || {
      simple: renderDisplayTemplate,
      frontMatter: renderDisplayFrontMatterTemplate,
    },
    validateInput: validateInput || validateHnTemplateInput,
  });

export const buildHnWithoutAdsDefinition = ({
  renderers,
  validateInput,
} = {}) =>
  withRuntimeAdapters(createHnWithoutAdsPresetDefinition(), {
    renderers: renderers || {
      simple: renderDisplayTemplate,
      frontMatter: renderDisplayFrontMatterTemplate,
    },
    validateInput: validateInput || validateHnWithoutAdsTemplateInput,
  });

export const hnDefinition = buildHnDefinition();

export const hnWithoutAdsDefinition = buildHnWithoutAdsDefinition();
