const InternetData = require('../fabric/InternetData');
const { it, expect } = require('@jest/globals');
let internetData = new InternetData();

describe('Teste for InternetData generator', () => {
    it('Espect to be a instace of a class', () => {
        expect(internetData).toBeInstanceOf(InternetData)
    })

    it('Get a  radom ip', () => {
        let internet = internetData.ip();
        expect(typeof internet).toEqual('string');
        expect(internet).toContain('.');
    })

    it('Get a  radom domain', () => {
        let internet = internetData.domain();
        expect(typeof internet).toEqual('string');
        expect(internet).toContain('.');
        expect(internet).toContain('http');
        expect(internet).toContain('://');
    })

    it('Get a  radom domain with https', () => {
        let inte = internetData.domain('teste', true);
        expect(typeof inte).toEqual('string');
        expect(inte).toContain('.');
        expect(inte).toContain('https');
        expect(inte).toContain('://');
        expect(inte).toContain('teste');
    })

    it('Get a network radom ', () => {
        let internet = internetData.network();
        expect(typeof internet).toEqual('object');
        expect(internet).toHaveProperty("ip")
        expect(internet).toHaveProperty("maske")
        expect(internet).toHaveProperty("bitmask")
        expect(internet).toHaveProperty("hostmask")
        expect(internet).toHaveProperty("broadcast")
        expect(internet).toHaveProperty("size")
        expect(internet).toHaveProperty("first")
        expect(internet).toHaveProperty("las")
    })
})