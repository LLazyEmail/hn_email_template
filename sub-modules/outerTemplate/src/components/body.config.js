export const BODY_CHECKS = [
  {
    field: 'footer',
    errorMessage: 'no footer was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'logoTop',
    errorMessage: 'invalid logo',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'logoBottom',
    errorMessage: 'invalid logo',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'previewText',
    errorMessage: 'invalid preview text',
    rules: ['required', 'nonEmptyString'],
  },
];
