import { validateInput } from './validation/validateInput';

// const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
export const checkingPreviewText = (previewText) => {
  validateInput({ previewText }, [
    {
      field: 'previewText',
      errorMessage: '`previewText` is a required option for `renderTemplate`',
      rules: ['required', 'nonEmptyString'],
    },
  ]);
};

const previewTextComponent = (content) => {
  validateInput({ content }, [
    {
      field: 'content',
      errorMessage: 'invalid preview text',
      rules: ['required', 'nonEmptyString'],
    },
  ]);

  return `<!--[if !gte mso 9]><!---->
    ${content}
    <!--<![endif]-->`;
};

export default previewTextComponent;
