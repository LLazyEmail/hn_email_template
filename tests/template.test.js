const { 
    // printMain, printFooter, printBody, 
    // printHead,
    printTemplate,
    writingFile
  } = require('../src/methods');
  
const displayTemplate = require('../src/t/displayTemplate');

// console.log(typeof displayTemplate)
// printTemplate('123');


//   const data = require('../src/t/displayTemplate');

  describe('test helpers', () => {


    test('rendering Template', () => { 


        const string = printTemplate('123');

        // console.log(string);
  
        // expect(string).toBeDefined();
  
        expect(typeof string).toBe('string');
        writingFile(string);

    });

});