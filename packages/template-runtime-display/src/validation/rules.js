export const required = (value) => {
  if (value === undefined || value === null) {
    return 'is required';
  }
  return null;
};

export const nonEmptyString = (value) => {
  if (value === '') {
    return 'must not be empty';
  }
  return null;
};
