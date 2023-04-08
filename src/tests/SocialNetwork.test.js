const SocialNetworkData = require('../fabric/SocialNetworkData');
const { it, expect } = require('@jest/globals');
let socialNetworkData = new SocialNetworkData();

describe('Teste for SocialNetworkData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(socialNetworkData).toBeInstanceOf(SocialNetworkData)
    })

    it('Get a radom positive Comment', () => {
        let social = socialNetworkData.positiveComment();
        expect(typeof social).toEqual('string');
        expect(social.length).toBeGreaterThan(0)
    })

    it('Get a radom positive negative Comment', () => {
        let social = socialNetworkData.negativeComment();
        expect(typeof social).toEqual('string');
        expect(social.length).toBeGreaterThan(0)
    })

    it('Get a radom positive sportText', () => {
        let social = socialNetworkData.sportText();
        expect(social).toBeInstanceOf(Array)
        expect(typeof social).toEqual('object');
        expect(social.length).toEqual(3)
    })

    it('Get a radom positive sportText', () => {
        let social = socialNetworkData.sportText(5);
        expect(social).toBeInstanceOf(Array)
        expect(typeof social).toEqual('object');
        expect(social.length).toEqual(5)
    })

})