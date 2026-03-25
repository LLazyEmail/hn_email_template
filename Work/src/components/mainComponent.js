import { validateInput } from './validation/validateInput';

const MAIN_VALIDATION_CHECKS = [
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

const mainComponent = (params) => {
  if (!params) {
    throw new Error('no Sub Components was passed');
  }

  const { head, body } = params;

  validateInput(params, MAIN_VALIDATION_CHECKS);

  return `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
   ${head}
   ${body}
    
  </html>`;
};

export default mainComponent;
