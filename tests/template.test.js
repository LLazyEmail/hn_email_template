const { 
    // printMain, printFooter, printBody, 
    // printHead,
    printTemplate,
    writingFile
  } = require('../src/methods');
  import { writingFile } from 'markup-generator';

const { innerContentComponent } = require('../src/components');

const displayTemplate = require('../src/t/displayTemplate');

  describe('test helpers', () => {


    test('rendering Template', () => { 


        const string = printTemplate(innerContentComponent());

        // console.log(string);
  
        // expect(string).toBeDefined();
  
        expect(typeof string).toBe('string');
        writingFile(string);

    });

});
