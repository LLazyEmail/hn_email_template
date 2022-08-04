// https://github.com/abritinthebay/jest-tobetype
import { writingFile } from 'markup-generator';
const { 
  printMain, printFooter, printBody, 
  printHead,
  
  // printLIT,
  
} = require('../src/methods');




// var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// var generateTemplateComponent = require('../src/t/generateTemplate');




describe('test helpers', () => {




  test('rendering Body Component', () => {


      const string = printBody();

      // console.log(string);

      expect(printBody()).toBeDefined();

      expect(typeof string).toBe('string');
      writingFile(string, 'lit-empty');

  });


  test('rendering Footer Component', () => {


    const string = printFooter();

    // console.log(string);

    expect(printFooter()).toBeDefined();

  //   // expect(typeof string).toBe('string');
    writingFile(string, 'lit-empty');

  });

});
