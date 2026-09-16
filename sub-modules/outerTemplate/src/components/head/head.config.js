export const HEAD_CHECKS = [
  {
    field: 'title',
    errorMessage: 'no title was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'headStyles',
    errorMessage: 'no headStyles was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'fonts',
    errorMessage: 'no fonts was passed',
    rules: ['required', 'nonEmptyString'],
  },
];
