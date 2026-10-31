import { createTemplateFromDefinition } from '@llazyemail/template-engine';
import { buildHnDefinition } from '../runtime/displayRuntimeDeps';

const hnTemplate = createTemplateFromDefinition(buildHnDefinition());

export default hnTemplate;
