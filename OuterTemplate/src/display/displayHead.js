// @TODO we need to finalize this file, so we can accept real data, not just static title...

// partials
import misc from 'atherdon-newsletter-js-layouts-misc';
import { headStyles } from '../components/head-styles';

import headComponent from '../components/head';

const { fonts } = misc;

const title = `The Secrets of High-Performing DevOps teams`;

// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'
const checkingTitle = (title) => {
    if (!title) {
        throw new Error('`title` is a required option for `renderTemplate`');
    }
}

const DisplayHead = {
  component: headComponent,
  params: { title, headStyles, fonts },
  display: () => {
      
//         return headComponent(title, headStyles, fonts);
      
      console.log( this.component(....) );
//     return this.component(....)
      
  },
  checks: () => [
      checkingTitle(this.params.title)
  ]
  
}

export default DisplayHead;