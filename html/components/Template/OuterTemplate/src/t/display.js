import { merge } from 'lodash';

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
  
    const head = displayHead("Pixels Per Inch");
    const body = displayBody();
    
    return mainComponent(head, body);
}

const displayBody = () => {
    return EmailTemplateBodyComponent(footer(), logoTop, logoBottom, '');
}
const displayBody = () => {
    return EmailTemplateBodyComponent(footer(), logoTop, logoBottom, '');
  }
  

const renderTemplate = (options) => {

    //create options
    configValidation(options);






}

// default checks

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
//     if (!title) {
//       throw new Error('`title` is a required option for `renderTemplate`');
//     } else if (!bodyContent) {
//       throw new Error('`bodyContent` is a required option for `renderTemplate`');
//     } else if (!previewText) {
//       throw new Error('`previewText` is a required option for `renderTemplate`');
//     }



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