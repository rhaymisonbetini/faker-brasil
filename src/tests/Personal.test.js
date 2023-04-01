const PersonalData = require('../fabric/PersonalData');
const { it, expect } = require('@jest/globals');
let personalData = new PersonalData();

describe('Teste for PersonalData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(personalData).toBeInstanceOf(PersonalData)
    })


    it('Get a radom first name', () => {
        let person = personalData.firstName();
        expect(typeof person).toEqual('string');
        expect(person.length).toBeGreaterThan(0)
    })


    it('Get a radom last name', () => {
        let person = personalData.lastName();
        expect(typeof person).toEqual('string');
        expect(person.length).toBeGreaterThan(0)
    })

    it('Get a radom full name', () => {
        let person = personalData.fullName();
        expect(typeof person).toEqual('string');
        expect(person).toContain(' ')
        expect(person.length).toBeGreaterThan(0)
    })

    it('Get a radom rg', () => {
        let person = personalData.rg();
        expect(typeof person).toEqual('string');
        expect(person.length).toBeGreaterThan(0)
    })

    it('Get a radom cpf without mask', () => {
        let person = personalData.cpf();
        expect(typeof person).toEqual('string');
        expect(person).toHaveLength(11)
    })


    it('Get a radom cpf with mask', () => {
        let person = personalData.cpf(true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('.');
        expect(person).toContain('-');
    })

    it('Get a radom email', () => {
        let person = personalData.email(true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('.');
        expect(person).toContain('@');
        expect(person).toContain('.com');
    })

    it('Get a radom email with a givem domain', () => {
        let person = personalData.email('jestmail');
        expect(typeof person).toEqual('string');
        expect(person).toContain('.');
        expect(person).toContain('@');
        expect(person).toContain('.com');
        expect(person).toContain('jestmail');
    })

    it('Get a radom cnh', () => {
        let person = personalData.cnh();
        expect(typeof person).toEqual('object');
        expect(person).toHaveProperty('register')
        expect(person).toHaveProperty('expiration')
        expect(person).toHaveProperty('type')
        expect(person).toHaveProperty('permission')
    })

    it('Get a workcard ', () => {
        let person = personalData.workCard();
        expect(typeof person).toEqual('string');
    })

    it('Get a workcard whith mask', () => {
        let person = personalData.workCard(true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('.')
    })

    it('Get a radom passport ', () => {
        let person = personalData.passPort();
        expect(typeof person).toEqual('string');
    })


    it('Get a radom birth-date ', () => {
        let person = personalData.birthDate();
        expect(typeof person).toEqual('string');
        expect(person).toContain('-')
    })

    it('Get a radom birth-date with slash', () => {
        let person = personalData.birthDate(true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('/')
    })

    it('Get a radom phone', () => {
        let person = personalData.phone(false, false);
        expect(typeof person).toEqual('string');
    })

    it('Get a radom phone with prefix', () => {
        let person = personalData.phone(true, false);
        expect(typeof person).toEqual('string');
        expect(person).toContain('+55')
    })

    it('Get a radom phone with prefix and mask', () => {
        let person = personalData.phone(true, true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('(')
        expect(person).toContain(')')
    })


    it('Get a radom phone oly mask', () => {
        let person = personalData.phone(true, true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('+55')
        expect(person).toContain(')')
        expect(person).toContain('(')
    })

    it('Get a radom cellPhone', () => {
        let person = personalData.cellPhone(false, false);
        expect(typeof person).toEqual('string');
    })

    it('Get a radom cellPhone with prefix', () => {
        let person = personalData.cellPhone(true, false);
        expect(typeof person).toEqual('string');
        expect(person).toContain('+55')
    })

    it('Get a radom cellPhone with prefix and mask', () => {
        let person = personalData.cellPhone(true, true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('(')
        expect(person).toContain(')')
    })


    it('Get a radom cellPhone oly mask', () => {
        let person = personalData.cellPhone(true, true);
        expect(typeof person).toEqual('string');
        expect(person).toContain('+55')
        expect(person).toContain(')')
        expect(person).toContain('(')
    })

    it('get a new person', () => {
        let person = personalData.newPerson();
        expect(typeof person).toEqual('object');
        expect(person).toHaveProperty('firstName');
        expect(person).toHaveProperty('lastName');
        expect(person).toHaveProperty('fullName');
        expect(person).toHaveProperty('birthDate');
        expect(person).toHaveProperty('cpf');
        expect(person).toHaveProperty('rg');
        expect(person).toHaveProperty('phone');
        expect(person).toHaveProperty('cellPhone');
        expect(person).toHaveProperty('email');
        expect(person).toHaveProperty('workCard');
        expect(person).toHaveProperty('passPort');
     
    })

    
    it('get a new person younger', () => {
        let person = personalData.newPersonYounger();
        expect(typeof person).toEqual('object');
        expect(person).toHaveProperty('firstName');
        expect(person).toHaveProperty('lastName');
        expect(person).toHaveProperty('fullName');
        expect(person).toHaveProperty('birthDate');
        expect(person).toHaveProperty('cpf');
        expect(person).toHaveProperty('rg');
        expect(person).toHaveProperty('phone');
        expect(person).toHaveProperty('cellPhone');
        expect(person).toHaveProperty('email');
        expect(person).toHaveProperty('passPort');
     
    })

    it('get a new person adult', () => {
        let person = personalData.newAdultPerson();
        expect(typeof person).toEqual('object');
        expect(person).toHaveProperty('firstName');
        expect(person).toHaveProperty('lastName');
        expect(person).toHaveProperty('fullName');
        expect(person).toHaveProperty('birthDate');
        expect(person).toHaveProperty('cpf');
        expect(person).toHaveProperty('rg');
        expect(person).toHaveProperty('phone');
        expect(person).toHaveProperty('cellPhone');
        expect(person).toHaveProperty('email');
        expect(person).toHaveProperty('workCard');
        expect(person).toHaveProperty('passPort');
     
    })

    it('get a new person newOlderPerson', () => {
        let person = personalData.newPerson();
        expect(typeof person).toEqual('object');
        expect(person).toHaveProperty('firstName');
        expect(person).toHaveProperty('lastName');
        expect(person).toHaveProperty('fullName');
        expect(person).toHaveProperty('birthDate');
        expect(person).toHaveProperty('cpf');
        expect(person).toHaveProperty('rg');
        expect(person).toHaveProperty('phone');
        expect(person).toHaveProperty('cellPhone');
        expect(person).toHaveProperty('email');
        expect(person).toHaveProperty('workCard');
        expect(person).toHaveProperty('passPort');
     
    })
})