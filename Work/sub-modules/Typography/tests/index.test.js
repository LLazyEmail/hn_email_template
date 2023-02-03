import headingComponent  from '../src/components/heading';
import imageComponent  from '../src/components/image';
import italicComponent  from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent  from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import titleComponent  from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import strongComponent   from '../src/components/strong';
import subtitleComponent from '../src/components/subtitle';
import separatorComponent from '../src/components/separator';


describe('all display methods must be initialized', () => {
    // test('display body', () => {
    //   expect(BodyHTMLString === true).toBe(true);
    // });
  
    test('display body', () => {
      expect(typeof BodyHTMLString === 'string').toBe(true);
    });


});