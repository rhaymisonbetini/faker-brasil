const UniversityData = require('../fabric/UniversityData');
const { it, expect } = require('@jest/globals');
let universityData = new UniversityData();

describe('Teste for UniversityData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(universityData).toBeInstanceOf(UniversityData)
    })

    it('Get radom univerity datas', () => {
        let univeristy = universityData.getUniversity();
        expect(typeof univeristy).toEqual('object');
        expect(univeristy).toHaveProperty('universidade');
        expect(univeristy.universidade.length).toBeGreaterThan(0)
        expect(univeristy).toHaveProperty('sigla');
        expect(univeristy.sigla.length).toBeGreaterThan(0)
        expect(univeristy).toHaveProperty('uf');
        expect(univeristy.uf.length).toBeGreaterThan(0)
    })

    it('Get random univeristy sigla', () => {
        let univeristy = universityData.getUniversitySigla();
        expect(typeof univeristy).toEqual('string');
        expect(univeristy.length).toBeGreaterThan(0)
    })

    it('Get random univeristy name', () => {
        let univeristy = universityData.getUniveristyName();
        expect(typeof univeristy).toEqual('string');
        expect(univeristy.length).toBeGreaterThan(0)
    })

})