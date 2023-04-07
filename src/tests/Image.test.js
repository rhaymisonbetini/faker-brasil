const ImageData = require('../fabric/ImageData');
const { it, expect } = require('@jest/globals');
let imageData = new ImageData();

describe('Teste for imageDataData generator', () => {
    it('Espect to be a instace of a class', async() => {
        expect(imageData).toBeInstanceOf(ImageData)
    })

    it('Get a  radom avatar male', async() => {
        let image = await imageData.getAvatarImage('male');
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom avatar female', async() => {
        let image = await imageData.getAvatarImage('female');
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom imagem', async() => {
        let image = await imageData.getImageRandom();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom car image', async() => {
        let image = await imageData.getCarImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom animal image', async() => {
        let image = await imageData.getAnimalImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom city image', async() => {
        let image = await imageData.getCityImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom cat image', async() => {
        let image = await imageData.getCatImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom bussines image', async() => {
        let image = await imageData.getBusinessImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom bussines image', async() => {
        let image = await imageData.getBusinessImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom fashion image', async() => {
        let image = await imageData.getFashionImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom food image', async() => {
        let image = await imageData.getFoodImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom nature image', async() => {
        let image = await imageData.getNatureImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom Nightlife image', async() => {
        let image = await imageData.getNightlifeImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom peoople image', async() => {
        let image = await imageData.getPeopleImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom sport image', async() => {
        let image = await imageData.getSportsImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })

    it('Get a  radom technics image', async() => {
        let image = await imageData.getTechnicsImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })


    it('Get a  radom transport image', async() => {
        let image = await imageData.getTransportImage();
        expect(typeof image).toEqual('string');
        expect(image).toContain('.');
        expect(image).toContain('http');
        expect(image).toContain('://');
    })
})