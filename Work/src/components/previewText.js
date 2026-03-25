import { validateInput } from './validation/validateInput';

const PREVIEW_TEXT_ERROR = '`previewText` is a required option for `renderTemplate`';
const INVALID_PREVIEW_TEXT_ERROR = 'invalid preview text';

export const checkingPreviewText = (previewText) => {
  validateInput({ previewText }, [
    {
      field: 'previewText',
      errorMessage: PREVIEW_TEXT_ERROR,
      rules: ['required', 'nonEmptyString'],
    },
  ]);
};

const previewTextComponent = (content) => {
  validateInput({ content }, [
    {
      field: 'content',
      errorMessage: INVALID_PREVIEW_TEXT_ERROR,
      rules: ['required', 'nonEmptyString'],
    },
  ]);

  return `<!--[if !gte mso 9]><!---->
    ${content}
    <!--<![endif]-->`;
};

export default previewTextComponent;
