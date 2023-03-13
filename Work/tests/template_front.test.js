import { writingFile } from 'markup-generator';
const { 
    // printMain, printFooter, printBody, 
    // printHead,
    printTemplateData
    
  } = require('../src/methods');
  

const { innerContentComponent } = require('../src/components');


import markdownData from './data';

const displayTemplate = require('../src/t/displayTemplate');

  describe('test helpers', () => {


    test('rendering Template', () => { 

        const contentos = innerContentComponent();
        const string = printTemplateData({ contentos, markdownData });

        console.log(string);
  
        // expect(string).toBeDefined();
  
        expect(typeof string).toBe('string');
        writingFile(string);

    });

});
