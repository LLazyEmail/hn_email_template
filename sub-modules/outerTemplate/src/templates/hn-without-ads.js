import { createTemplateFromDefinition } from '@llazyemail/template-engine';
import { buildHnWithoutAdsDefinition } from '../runtime/displayRuntimeDeps';

const hnWithoutAdsTemplate = createTemplateFromDefinition(buildHnWithoutAdsDefinition());

export default hnWithoutAdsTemplate;
