const GovData = require('../fabric/GovData');
const { it, expect } = require('@jest/globals');
let addressData = new GovData();


describe('Test for GovDatas generator', () => {
    it('Professional council List', () => {
        expect(addressData.professionalCouncilList()).toBeInstanceOf(Array)
        expect(typeof addressData.professionalCouncilList()[0]).toEqual('string')
    })

    it('Professional council get one', () => {
        expect(typeof addressData.professionalCouncil()).toEqual('string')
    })

    it('Professional council get one by Sigla', () => {
        expect(typeof addressData.professionalCouncilBySigla('OAB')).toEqual('string')
    })
    
    it('Professional council get one by Sigla, but sigla is null', () => {
        expect(typeof addressData.professionalCouncilBySigla()).toEqual("undefined")
    })

    it('Superior court List', () => {
        expect(addressData.superiorCourtList()).toBeInstanceOf(Array)
        expect(typeof addressData.superiorCourtList()[0]).toEqual('string')
    })

    it('Superior court List get one', () => {
        expect(typeof addressData.superiorCourt()).toEqual('string')
    })

    it('Regional court List', () => {
        expect(addressData.regionalCourtList()).toBeInstanceOf(Array)
        expect(typeof addressData.regionalCourtList()[0]).toEqual('string')
    })

    it('Regional court List get one', () => {
        expect(typeof addressData.regionalCourt()).toEqual('string')
    })

    it('Justice court List', () => {
        expect(addressData.justiceCourtList()).toBeInstanceOf(Array)
        expect(typeof addressData.justiceCourtList()[0]).toEqual('string')
    })

    it('Justice court List get one', () => {
        expect(typeof addressData.justiceCourt()).toEqual('string')
    })
    
    it('Electoral court List', () => {
        expect(addressData.electoralCourtList()).toBeInstanceOf(Array)
        expect(typeof addressData.electoralCourtList()[0]).toEqual('string')
    })

    it('Electoral court List get one', () => {
        expect(typeof addressData.electoralCourt()).toEqual('string')
    })

    it('worker CourtList court List', () => {
        expect(addressData.workerCourtList()).toBeInstanceOf(Array)
        expect(typeof addressData.workerCourtList()[0]).toEqual('string')
    })

    it('worker CourtList court List get one', () => {
        expect(typeof addressData.workerCourt()).toEqual('string')
    })

    it('military CourtListcourt List', () => {
        expect(addressData.militaryCourtList()).toBeInstanceOf(Array)
        expect(typeof addressData.militaryCourtList()[0]).toEqual('string')
    })

    it('military CourtList court List get one', () => {
        expect(typeof addressData.militaryCourt()).toEqual('string')
    })

    it('Chamber Of DeputiesList get one', () => {
        expect(typeof addressData.ChamberOfDeputies()).toEqual('string')
    })

    it('federal Senate court List get one', () => {
        expect(typeof addressData.federalSenate()).toEqual('string')
    })
    
    it('civil House court List get one', () => {
        expect(typeof addressData.civilHouse()).toEqual('string')
    })

    it('ministries court List get one', () => {
        expect(typeof addressData.ministries()).toEqual('string')
    })

  
})