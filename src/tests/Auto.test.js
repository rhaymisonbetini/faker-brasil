const AutoData = require('../fabric/AutoData');
const { it, expect } = require('@jest/globals');
let autoData = new AutoData();


describe('Teste for AutoData generator', () => {

    it('Get a motocicle type', () => {
        expect(typeof autoData.motocicle()).toEqual('string')
    })

    it('Get a auto model type', () => {
        expect(typeof autoData.autoModel()).toEqual('string')
    })

    it('Get a auto name', () => {
        expect(typeof autoData.autoName()).toEqual('string')
    })

    it('Get a auto model and name', () => {
        expect(typeof autoData.auto()).toEqual('object')
    })

    it('Get a autos by model', () => {
        expect(autoData.autosByModel('Audi')).toBeInstanceOf(Array)
        let auto = autoData.autosByModel('Audi')[0]
        expect(typeof auto).toEqual('object')
        expect(auto).toHaveProperty('marca')
        expect(auto).toHaveProperty('name')
    })

    it('Get a auto by model', () => {
        let auto = autoData.autoByModel('Audi');
        expect(typeof auto).toEqual('object')
        expect(auto).toHaveProperty('marca')
        expect(auto).toHaveProperty('name')

    })

    it('Get a licence plate withou mask', () => {
        expect(typeof autoData.licensePlate())
            .toEqual('string')
    })

    it('Get a licence plate with mask', () => {
        let auto = autoData.licensePlate(true);
        expect(typeof auto).toEqual('string')
        expect(auto).toContain('-')
    })

})