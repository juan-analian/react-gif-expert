import { getGifs } from '../../src/helpers/getGifs';

describe('Testing getGifs() helper', () => {

    test('Should return array of gifs', async() => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);

        //console.log(gifs[0]);
        expect(gifs[0]).toEqual(
        {            
            id: expect.any(String) ,
            title: expect.any(String) ,
            url: expect.any(String) ,        
        });
    })

})