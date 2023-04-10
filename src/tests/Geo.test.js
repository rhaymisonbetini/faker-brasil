const GeoData = require('../fabric/GeoData');
const { it, expect } = require('@jest/globals');
let geoData = new GeoData();

describe('Teste for geoData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(geoData).toBeInstanceOf(GeoData)
    })

    it('Get a radom Coord In Brazil', () => {
        let gep = geoData.geoRandomBrCoordState();
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('lat')
        expect(gep).toHaveProperty('lng')
    })

    it('Get a random Coord In Brazil By state', () => {
        let gep = geoData.geoRandomBrCoordState('SP');
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('lat')
        expect(gep).toHaveProperty('lng')
    })

    it('Get a random Coord In Brazil random city', () => {
        let gep = geoData.getRandomCoordsByCity();
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('city')
        expect(gep).toHaveProperty('lat')
        expect(gep).toHaveProperty('lng')
    })

    it('Get a random Coord In Brazil By city', () => {
        let gep = geoData.getRandomCoordsByCity('VILA VELHA');
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('city')
        expect(gep).toHaveProperty('lat')
        expect(gep).toHaveProperty('lng')
    })

})