import { writingFile } from 'markup-generator';

import {FooterHTMLString} from '../../src/display/sections/footer';


// import { FooterHTMLString } from '../../src/display/sections/footer';


describe('footer display method must be initialized', () => {
  
  test('display footer', () => {
    expect(typeof FooterHTMLString === 'string').toBe(true);
  });
  
});



describe('writing components into files', () => {
  
    test('write footer', () => {
      const string4 = FooterHTMLString;


      writingFile(string4, 'HN-Footer');

      expect(FooterHTMLString).toBeDefined();


  });
  
});

