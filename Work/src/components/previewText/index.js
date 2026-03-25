import { validateInput } from '../validation/validateInput';
import {
  PREVIEW_TEXT_CHECKS,
  PREVIEW_TEXT_COMPONENT_CHECKS,
} from './previewText.config';

export const checkingPreviewText = (previewText) => {
  validateInput({ previewText }, PREVIEW_TEXT_CHECKS);
};

const previewTextComponent = (content) => {
  validateInput({ content }, PREVIEW_TEXT_COMPONENT_CHECKS);

  return `<!--[if !gte mso 9]><!---->
    ${content}
    <!--<![endif]-->`;
};

export default previewTextComponent;
