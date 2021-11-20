import misc from 'atherdon-newsletter-js-layouts-misc'



import { BBBody, bodyComponent } from './body';

import { head } from './head';


const main = `<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  ${misc.head}
  ${BBBody}
</html>`;



const mainComponent = (head, bodyComponent) => {

  // console.log('123');

  // const str = `<!DOCTYPE html>
  // <html
  //   xmlns="http://www.w3.org/1999/xhtml"
  //   xmlns:v="urn:schemas-microsoft-com:vml"
  //   xmlns:o="urn:schemas-microsoft-com:office:office"
  // >
  //   ${head}
  //   ${bodyComponent}
  // </html>`;

  // console.log(str);

  return `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    ${head}
    ${bodyComponent}
  </html>`;

}

export { main, mainComponent }
