import { writingFile } from 'markup-generator';

import {ContentHTMLString} from '../src/display/displayContent';



describe('content display method must be initialized', () => {
  
    test('display content', () => {
    expect(typeof ContentHTMLString === 'string').toBe(true);
  });

  
});


// describe('writing components into files', () => {
  
//     test('write content', () => {
//       const string2 = ContentHTMLString;

//       // console.log(string);


//       writingFile(ContentHTMLString, 'HN-Content');

//       expect(ContentHTMLString).toBeDefined();
//   });
  
  
// });
