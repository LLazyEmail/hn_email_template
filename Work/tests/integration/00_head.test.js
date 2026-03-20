import { writingFile } from 'markup-generator';

import { HeadHTMLString }  from '../../src/display/sections/head';


describe('head display method must be initialized', () => {
  
     test('display head', () => {
      expect(typeof HeadHTMLString === 'string').toBe(true);
    });

  
});


describe('writing components into files', () => {
  
  
  test('write head', () => {
    const string1 = HeadHTMLString;

    // console.log(string);
    expect(string1).toBeDefined();

    writingFile(string1, 'hn', '');
  });
  
});
