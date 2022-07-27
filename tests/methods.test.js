// https://github.com/abritinthebay/jest-tobetype

const { 
  printMain, printFooter, printBody, 
  printHead,
  
  // printLIT,
  writingFile
} = require('../src/methods');




// var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// var generateTemplateComponent = require('../src/t/generateTemplate');




describe('test helpers', () => {




  test('rendering Body Component', () => {


      const string = printBody();

      // console.log(string);

      expect(printBody()).toBeDefined();

      expect(typeof string).toBe('string');
      writingFile(string);

  });


  test('rendering Footer Component', () => {


    const string = printFooter();

    console.log(string);

    expect(printFooter()).toBeDefined();

  //   // expect(typeof string).toBe('string');
    writingFile(string);

  });

});
