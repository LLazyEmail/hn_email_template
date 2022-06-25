import displayFactory from './factory';
import EmailTemplateBodyComponent from '../components/body';



import footerComponent from '../components/footer';


const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error(ERROR_BODY);
    }
}

let logoTop = '';
let logoBottom = '';
let content = '';





//variant one
// const settings = {
//     component: MainComponent,
//     params: {  },
//     subComponents: { DisplayHead, DisplayBody }
    
//   }

  // const DM = displayFactory(settings, [], {});


// DM.display();

// note that footer param here is a subcomponent, 
// so we passing footerDisplay instead of just a component
const DisplayBody = {
  component: EmailTemplateBodyComponent,
  params: { footerComponent, logoTop, logoBottom, content },
  display: () => {
      
      //console.log(this.component(params))
      
      
  },
  checks: () => [
  ]
  
}

export default DisplayBody;
