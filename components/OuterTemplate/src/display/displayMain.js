// partials
import { MainComponent } from '';

// note that head and body params are actually `displayHead` & `displayBody` 
// methods for sub-components

const DDDisplayMain = {
  component: MainComponent,
  params: { head, body },
  display: () => {
  },
  checks: () => {
  }
  
}

export default DDDisplayMain;



// const {
//     address,
//     copyrights,
    
//     newsletterSponsorshipLink,
//     unsubscribe,

//     fonts
// } = misc;
// // import { headStyles } from '../templates/head-styles';
// const title = `The Secrets of High-Performing DevOps teams`;

// const displayMain = () => {
  
//     const head = displayHead(title);
//     const body = displayBody();
    
//     return mainComponent(head, body);
// }

