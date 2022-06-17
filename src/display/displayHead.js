import displayFactory from './factory';
import displayFactoryTwo from './factoryTwo';



// @TODO we need to finalize this file, so we can accept real data, not just static title...

// partials
import misc from 'atherdon-newsletter-js-layouts-misc';
import headStylesComponent from '../components/headStyles';

import headComponent from '../components/head';

const { fonts } = misc;

const title = `The Secrets of High-Performing DevOps teams`;

const ERROR_TITLE = '`title` is a required option for `renderTemplate`';

const checkingTitle = (title) => {
    if (!title) {
        throw new Error(ERROR_TITLE);
    }
}


//variant one
const settings = {
  component: headComponent,
  params: { title, headStylesComponent, fonts },
  subcomponents: { }
  
}

const DM = displayFactory(settings);




DM.display(DM.params, DM.subcomponents);



const DDDDM = new displayFactoryTwo();

DDDDM.create(settings);






const DisplayHead = {
  component: headComponent,
  params: { title, headStylesComponent, fonts },
  display: () => {
      
//         return headComponent(title, headStyles, fonts);
      
      // console.log( this.component );
//     return this.component(....)
      
  },
  checks: () => [
    
      // checkingTitle(this.params.title)
  ]
  
}

export default DisplayHead;
