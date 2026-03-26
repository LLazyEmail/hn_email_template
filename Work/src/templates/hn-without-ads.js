import {
  createTemplateFromDefinition,
  validateHnWithoutAdsTemplateInput,
} from '@llazyemail/template-engine';
import { buildHnWithoutAdsDefinition } from 'atherdon-newsletter-js-layouts-outertemplate';

const hnWithoutAdsTemplate = createTemplateFromDefinition(
  buildHnWithoutAdsDefinition({
    validateInput: validateHnWithoutAdsTemplateInput,
  })
);

export default hnWithoutAdsTemplate;
