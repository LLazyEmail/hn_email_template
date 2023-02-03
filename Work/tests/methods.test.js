// https://github.com/abritinthebay/jest-tobetype
import { writingFile } from 'markup-generator';

// const { 
//   printMain, printFooter, printBody, 
//   printHead,
  
//   // printLIT,
  
// } = require('../src/methods');




import HeadString from './display/displayHead';

import { BodyHTMLString } from './display/displayBody';

import { FooterHTMLString } from './display/displayFooter';

import { MainHTMLString } from './display/displayMain';


// var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// var generateTemplateComponent = require('../src/t/generateTemplate');




describe('test helpers', () => {




  test('rendering Body Component', () => {


      const string = BodyHTMLString;

      // console.log(string);

      expect(BodyHTMLString).toBeDefined();

      expect(typeof string).toBe('string');
      writingFile(string, 'lit-empty');

  });


  test('rendering Footer Component', () => {


    const string = FooterHTMLString;

    // console.log(string);

    expect(FooterHTMLString).toBeDefined();

  //   // expect(typeof string).toBe('string');
    writingFile(string, 'lit-empty');

  });

});
