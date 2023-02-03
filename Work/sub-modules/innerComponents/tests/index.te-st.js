import headlineComponent from './components/headline';
import logoBottomComponent from './components/logoBottom';
import logoTopComponent from './components/logoTop';
import previewTextComponent from './components/previewText';
import sectionComponent from './components/section';
import sponsorComponent from './components/sponsor';

import ctaComponent from './components/ctaList';


describe('all display methods must be initialized', () => {
    // test('display body', () => {
    //   expect(BodyHTMLString === true).toBe(true);
    // });
  
    test('display body', () => {
      expect(typeof BodyHTMLString === 'string').toBe(true);
    });


});