const mainComponent = ({}, subcomponents) => {

  
  if (!subcomponents) {
    throw new Error('no Sub Components was passed');
  }

  const { headComponent, bodyComponent } = subcomponents; 
  // const { head, body } = components; 

  // headComponent.isError();
  // bodyComponent.isError();

  return `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
   ${headComponent.display()}
   ${bodyComponent.display()}
    
  </html>`;



    // ${head}
    // ${body}

}

export default mainComponent
