export const PREVIEW_TEXT_CHECKS = [
  {
    field: 'previewText',
    errorMessage: '`previewText` is a required option for `renderTemplate`',
    rules: ['required', 'nonEmptyString'],
  },
];

export const PREVIEW_TEXT_COMPONENT_CHECKS = [
  {
    field: 'content',
    errorMessage: 'invalid preview text',
    rules: ['required', 'nonEmptyString'],
  },
];
