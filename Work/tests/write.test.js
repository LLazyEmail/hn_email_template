import { writingFile } from 'markup-generator';

import { printMain,  printFooter, printBody, printHead } from '../src/methods'


// // console.log(printMain())
// // console.log(printHead())


// // var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// // var generateTemplateComponent = require('../src/t/generateTemplate');


describe('test helpers', () => {


    test('rendering head component', () => {

      const string1 = printHead();

//       // console.log(string);
      expect(printHead()).toBeDefined();

      writingFile(string1, 'lit-empty');
    });


//     test('rendering Footer Component', () => {

//       const string2 = printFooter();

//       // console.log(string);
//       expect(printFooter()).toBeDefined();

//       writingFile(string2, 'lit-empty');
//     });


//     test('rendering Body Component', () => {

//       const string3 = printBody();

//       // console.log(string);
//       expect(printBody()).toBeDefined();

//       writingFile(string3, 'lit-empty');
//     });

    

//   //  test('rendering Empty Template', () => {

//     //  const string = generateEmptyTemplateComponent();
//     //  console.log(string, 'lit-empty');
//   //  });


   test('rendering Main Component', () => {


       const string4 = printMain();

       //  // console.log(string);

       expect(printMain()).toBeDefined();

       writingFile(string4, 'lit-empty');
//        // expect(typeof string).toBe('string');

   });


});
