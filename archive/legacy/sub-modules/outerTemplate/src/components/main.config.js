export const MAIN_VALIDATION_CHECKS = [
  {
    field: 'head',
    errorMessage: 'no head was passed',
    rules: ['required', 'string', 'nonEmptyString'],
  },
  {
    field: 'body',
    errorMessage: 'no body was passed',
    rules: ['required', 'string', 'nonEmptyString'],
  },
];
