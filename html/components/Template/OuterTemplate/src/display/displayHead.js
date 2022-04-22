// partials
import misc from 'atherdon-newsletter-js-layouts-misc';
import { headStyles } from '.../templates/head-styles';
import { headComponent } from '../templates/head';

const { fonts } = misc;
const title = `The Secrets of High-Performing DevOps teams`;



const DDDisplayHead = {
  component: headComponent,
  params: { title, headStyles, fonts },
  display: () => {
    return this.component(....)
  },
  checks: () => []
  
}

export default DDDisplayHead;


//const displayHead = (title) => {
//  return headComponent(title, headStyles, fonts);
//}
