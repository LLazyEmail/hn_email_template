import { writingFile } from 'markup-generator';
const { 
    // printMain, printFooter, printBody, 
    // printHead,
    printTemplateData
    
  } = require('../src/methods');
  

const { innerContentComponent } = require('../src/components');

// TODO move data into tests folder, as we dont use it elsewhere
import markdownData from '../src/data';
console.log(markdownData);
// const displayFrontMatterTemplate = require('../src/t/displayTemplate');

  describe('test helpers', () => {


    test('rendering Template', () => { 

        const contentos = innerContentComponent();
        const string = printTemplateData({ string: contentos, data: markdownData });

        console.log(string);
  
        // expect(string).toBeDefined();
  
        expect(typeof string).toBe('string');
        writingFile(string);

    });

});
