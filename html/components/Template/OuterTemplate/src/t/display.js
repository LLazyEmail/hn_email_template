import { merge } from 'lodash';



// https://github.com/eastenluis/markdown-email-editor/blob/f34b4875ea1f7cb7c5d9d5945ce2dab9da2bf559/app/renderer/template/template.js#L47




// import body from 'atherdon-newsletter-js-layouts-body';

// import misc from 'atherdon-newsletter-js-layouts-misc';

// import footer from './footer';

// const { 
//   logoTop, 
//   logoBottom 
// } = body;

// import { headStyles } from '../templates/head-styles';



// const { fonts } = misc;

const {
    address,
    copyrights,
    
    newsletterSponsorshipLink,
    unsubscribe,

    fonts
} = misc;


import { 
  
    displayBody 
  } from './body';
  
  import {
     head, displayHead 
  } from './head';

  
const title = `The Secrets of High-Performing DevOps teams`;

const displayMain = () => {
  
    const head = displayHead(title);
    const body = displayBody();
    
    return mainComponent(head, body);
}

const displayBody = () => {
    const footer = footerComponent();
    return EmailTemplateBodyComponent(footer, logoTop, logoBottom, '');
}


// {
//     title,
//     bodyContent,
//     previewText,
//     headCSS = '',
// }
const renderTemplate = (options) => {

    //create options
    configValidation(options);




    // return 



}

// default checks
// https://github.com/LLazyEmail/default-template1/blob/e395bdede248ada5c1fdb5a75c7edad13ea86de8/src/__useLater/--t.js#L2
// https://github.com/revivek/oy/blob/master/src/utils/Renderer.js

const merginConfig = () => {
    const options = merge({}, );

    return options;
}

const configValidation = (options) => {

    const { title, body, preview } = options;

    checkingTitle(title);
    checkingBodyContent(body);
    checkingPreviewText(preview);

}



// {
//     title,
//     bodyContent,
//     previewText,
//     headCSS = '',

// }) => {



// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'
const checkingTitle = (title) => {
    if (!title) {
        throw new Error('`title` is a required option for `renderTemplate`');
    }
}

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';
const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error('`bodyContent` is a required option for `renderTemplate`');
    }
}

//const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
const checkingPreviewText = (previewText) => {
    if (!previewText) {
        throw new Error('`previewText` is a required option for `renderTemplate`');
    }
}
  
export {
    checkingTitle,
    checkingBodyContent,
    checkingPreviewText
}
