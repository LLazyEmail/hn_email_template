// https://github.com/abritinthebay/jest-tobetype
import { writeGeneratedFile } from 'markup-generator';

// const { 
//   printMain, printFooter, printBody, 
//   printHead,
  
// } = require('../../src/methods');


import { HeadHTMLString } from '../../src/display/sections/head';

import { BodyHTMLString } from '../../src/display/sections/body';

import { FooterHTMLString } from '../../src/display/sections/footer';

import { MainHTMLString } from '../../src/display/sections/main';


// var generateEmptyTemplateComponent = require('../../src/t/emptyTemplate');

// var generateTemplateComponent = require('../../src/t/generateTemplate');




describe('test helpers', () => {




  test('rendering Body Component', async () => {


      const string = BodyHTMLString;

      // console.log(string);

      expect(BodyHTMLString).toBeDefined();

      expect(typeof string).toBe('string');
      await writeGeneratedFile({ content: string, prefix: 'lit-empty' });

  });


  test('rendering Footer Component', async () => {


    const string = FooterHTMLString;

    // console.log(string);

    expect(FooterHTMLString).toBeDefined();

  //   // expect(typeof string).toBe('string');
    await writeGeneratedFile({ content: string, prefix: 'lit-empty' });

  });

});
