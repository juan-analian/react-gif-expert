import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Testing  <GifItem.test/>', () => { 
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Should match with the component snapshot', () => {

        const {container} = render(<GifItem title={title} url={url} />);
        //console.log(container);

        expect(container).toMatchSnapshot();
    })

    test('should show img with URL and ALT attr.', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });


    test('Should show  title of component', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });
 })