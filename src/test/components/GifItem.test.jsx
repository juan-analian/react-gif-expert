import { render } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Testing  <GifItem.test/>', () => { 
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Should match with the component snapshot', () => {

        const {container} = render(<GifItem title={title} url={url} />);
        //console.log(container);

        expect(container).toMatchSnapshot();
    })
 })