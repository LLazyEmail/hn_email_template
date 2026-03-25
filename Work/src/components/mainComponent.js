import { validateInput } from './validation/validateInput';

const mainComponent = (params) => {
  if (!params) {
    throw new Error('no Sub Components was passed');
  }

  // TODO make it better
  const { head, body } = params;

  validateInput(params, [
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
  ]);

  // headComponent.isError();
  // bodyComponent.isError();

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
