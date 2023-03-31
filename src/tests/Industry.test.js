const IndustryData = require('../fabric/IndustryData');
const { it, expect } = require('@jest/globals');
let industryData = new IndustryData();

describe('Teste for HealthData generator', () => {
    it('Espect to be a instace of a class', () => {
        expect(industryData).toBeInstanceOf(IndustryData)
    })

    it('Get a job radom name', () => {
        let industry = industryData.job();
        expect(typeof industry).toEqual('string');
    })

    it('Get a enterprise radom name', () => {
        let industry = industryData.enterprise();
        expect(typeof industry).toEqual('string');
        expect(industry).toContain(' ');
    })

    it('Get a cnpj with mask radom name', () => {
        let industry = industryData.cnpj(true);
        expect(typeof industry).toEqual('string');
        expect(industry).toContain('-');
        expect(industry).toContain('/');
        expect(industry).toHaveLength(18)
    })

    it('Get a cnpj with mask radom name', () => {
        let industry = industryData.cnpj();
        expect(typeof industry).toEqual('string');
        expect(industry).toHaveLength(14)
    })

    it('Get a activity radom name', () => {
        let industry = industryData.activity();
        expect(typeof industry).toEqual('string');
    })

    it('Get a full  enterprise ', () => {
        let industry = industryData.fullEnterPrise();
        expect(typeof industry).toEqual('object');
        expect(industry).toHaveProperty("name")
        expect(industry).toHaveProperty("cnpj")
        expect(industry).toHaveProperty("inscription")
        expect(industry).toHaveProperty("openDate")
        expect(industry).toHaveProperty("activity")
        expect(industry).toHaveProperty("site")
        expect(industry).toHaveProperty("email")
        expect(industry).toHaveProperty("phone")
        expect(industry).toHaveProperty("cellPhone")
        expect(industry).toHaveProperty("address")
    })

    it('Get a nfe radom nfe', () => {
        let industry = industryData.nfe();
        expect(typeof industry).toEqual('object');
        expect(industry).toHaveProperty("number")
        expect(industry).toHaveProperty("serie")
        expect(industry).toHaveProperty("inOrOut")
        expect(industry).toHaveProperty("accessKey")
        expect(industry).toHaveProperty("operation")
        expect(industry).toHaveProperty("autorizationProtocol")
        expect(industry).toHaveProperty("cpnpj")
        expect(industry).toHaveProperty("inscription")
        expect(industry).toHaveProperty("date")
        expect(industry).toHaveProperty("baseIcms")
        expect(industry).toHaveProperty("icms")
        expect(industry).toHaveProperty("value")
        expect(industry).toHaveProperty("weight")
    })

})