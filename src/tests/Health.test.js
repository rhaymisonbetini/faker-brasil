const HealthData = require('../fabric/HealthData');
const { it, expect } = require('@jest/globals');
let healthData = new HealthData();

describe('Teste for HealthData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(healthData).toBeInstanceOf(HealthData)
    })

    it('Get a gym radom name', () => {
        let health = healthData.hospital();
        expect(typeof health).toEqual('string');
        expect(health).toContain(' ');
    })

    it('Get a medic specialist name', () => {
        let health = healthData.medicSpecialist();
        expect(typeof health).toEqual('string');
    })

    it('Get a radom medical exame name', () => {
        let health = healthData.medicalExams();
        expect(typeof health).toEqual('string');
    })

    it('Get a radom name for odonto clinic', () => {
        let health = healthData.dental();
        expect(typeof health).toEqual('string');
    })

    it('Get a radom dental exame name', () => {
        let health = healthData.dentalExams();
        expect(typeof health).toEqual('string');
    })

    it('Get a dental specialist name', () => {
        let health = healthData.dentalSpecialist();
        expect(typeof health).toEqual('string');
    })

    it('Get a radom name for vet clinic', () => {
        let health = healthData.veterinarian();
        expect(typeof health).toEqual('string');
    })

    it('Get a radom vet exame name', () => {
        let health = healthData.vetExams();
        expect(typeof health).toEqual('string');
    })

    it('Get a vet specialist name', () => {
        let health = healthData.vetSpecialist();
        expect(typeof health).toEqual('string');
    })


})