const BankData = require('../fabric/BankData');
const { it, expect } = require('@jest/globals');
let bankData = new BankData();

describe('Teste for Bankda generator', () => {

    it('Get a banck json with name and code', () => {
        let bank = bankData.bank();
        expect(typeof bank).toEqual('object');
        expect(bank).toHaveProperty('name');
        expect(bank).toHaveProperty('code');
    })

    it('Get a banck name', () => {
        let bank = bankData.bankName();
        expect(typeof bank).toEqual('string');
    })

    it('Get account type ', () => {
        let bank = bankData.accountType();
        expect(typeof bank).toEqual('string');
    })

    it('Get account number ', () => {
        let bank = bankData.bankAccountNumber();
        expect(typeof bank).toEqual('string');
        expect(bank).toContain('-');
        expect(bank).toHaveLength(9)
    })

    it('Get account agency ', () => {
        let bank = bankData.bankAgency();
        expect(typeof bank).toEqual('string');
        expect(bank).toHaveLength(4)
    })

    it('Get credicard number', () => {
        let bank = bankData.creadCardNumber();
        expect(typeof bank).toEqual('string');
        expect(bank).toContain(' ');
        expect(bank).toHaveLength(19)
    })

    it('Get a complet cred card', () => {
        let bank = bankData.credCard();
        expect(typeof bank).toEqual('object');
        expect(bank).toHaveProperty('flag');
        expect(bank).toHaveProperty('number');
        expect(bank).toHaveProperty('ccv');
        expect(bank).toHaveProperty('expiration');
    })

    it('Get a complet cred card with flag', () => {
        let bank = bankData.credCard('VISA');
        expect(typeof bank).toEqual('object');
        expect(bank).toHaveProperty('flag');
        expect(bank).toHaveProperty('number');
        expect(bank).toHaveProperty('ccv');
        expect(bank).toHaveProperty('expiration');
    })

    it('Get a full bank account', () => {
        let bank = bankData.fullBank();
        expect(typeof bank).toEqual('object');
        expect(bank).toHaveProperty('code');
        expect(bank).toHaveProperty('name');
        expect(bank).toHaveProperty('accountNumber');
        expect(bank).toHaveProperty('agency');
        expect(bank).toHaveProperty('type');
        expect(bank).toHaveProperty('card');
    })

    it('Get a full bank account with flag', () => {
        let bank = bankData.fullBank('MasterCard');
        expect(typeof bank).toEqual('object');
        expect(bank).toHaveProperty('code');
        expect(bank).toHaveProperty('name');
        expect(bank).toHaveProperty('accountNumber');
        expect(bank).toHaveProperty('agency');
        expect(bank).toHaveProperty('type');
        expect(bank).toHaveProperty('card');
    })


})