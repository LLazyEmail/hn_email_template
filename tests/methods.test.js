// https://github.com/abritinthebay/jest-tobetype
import { writingFile } from 'markup-generator';
const { 
  printMain, printFooter, printBody, 
  printHead,
  
  // printLIT,
  
} = require('../src/methods');


// import HeadString from '../src/display/displayHead';
// import ContentMainTableWrapString from '../src/display/displayContentMainTableWrap';
// import contentString from '../src/display/displayContent';
// import instructionString from '../src/display/displayInstruction';
// import SupportContactString from '../src/display/displaySupportContact';
// import ImageAfterSupporComponentString from '../src/display/displayImageAfterSupportComponent';
// import FooterString from '../src/display/displayFooter';



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
