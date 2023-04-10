const GeoData = require('../fabric/GeoData');
const { it, expect } = require('@jest/globals');
let geoData = new GeoData();

describe('Teste for geoData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(geoData).toBeInstanceOf(GeoData)
    })

    it('Get a radom Coord In Brazil', () => {
        let gep = geoData.geoRandomBrCoord();
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('xM')
        expect(gep).toHaveProperty('yM')
    })

    it('Get a random Coord In Brazil By state', () => {
        let gep = geoData.getRandomCoordsByCity();
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('xM')
        expect(gep).toHaveProperty('yM')
    })

    it('Get a random Coord In Brazil By city', () => {
        let gep = geoData.getRandomCoordsByCity('VILA VELHA');
        expect(typeof gep).toEqual('object');
        expect(gep).toHaveProperty('state')
        expect(gep).toHaveProperty('xM')
        expect(gep).toHaveProperty('yM')
    })

})