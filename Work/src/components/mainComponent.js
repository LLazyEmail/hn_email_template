const mainComponent = (params) => {
  if (!params) {
    throw new Error('no Sub Components was passed');
  }

  // TODO make it better
  const { head, body } = params;

  if (!head || typeof head !== 'string') {
    throw new Error('no head was passed');
  }

  if (!body || typeof body !== 'string') {
    throw new Error('no body was passed');
  }

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
