import { writingFile } from 'markup-generator';
const { 
    // printMain, printFooter, printBody, 
    // printHead,
    printTemplate
    
  } = require('../../src/methods');
  

const { innerContentComponent } = require('atherdon-newsletter-js-layouts-body');

const displayTemplate = require('../../src/t/displayTemplate');

  describe('test helpers', () => {


    test('rendering Template', () => { 


        const string = printTemplate(innerContentComponent());

        // console.log(string);
  
        // expect(string).toBeDefined();
  
        expect(typeof string).toBe('string');
        writingFile(string);

    });

});
