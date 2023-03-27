const AddressData = require('../fabric/AddressData');
const { it, expect } = require('@jest/globals');
let addressData = new AddressData();

describe('Teste for AddressDatas generator', () => {

    it('Get cep on Correios API', async () => {
        let asyncData = new AddressData();
        asyncData.getAddressByCepCorreio('29140669').then((cep) => {
            expect(cep)
                .toHaveProperty('cep')
                .toHaveProperty('logradouro')
                .toHaveProperty('bairro')
                .toHaveProperty('localidade')
                .toHaveProperty('uf')
        }).catch((error) => { })
    })

    it('Get random cep', () => {
        expect(addressData.randomCep()).toHaveLength(8)
    })

    it('Random cep by state SP', () => {
        expect(addressData.randomCepByState('SP')).toHaveLength(8)
    })

    it('Random cep erro if without state', () => {
        try{
            addressData.randomCepByState()
        }catch(e){
            expect(e).toBeInstanceOf(TypeError);
        }
    })

    it('Street name', () => {
        expect(typeof addressData.street()).toEqual('string')
    })

    it('Neighborhood name', () => {
        expect(typeof addressData.neighborhood()).toEqual('string')
    })

    it('Building name', () => {
        expect(typeof addressData.building()).toEqual('string')
    })

    it('Random Full Address', async () => {
        expect(typeof addressData.randomFullAddress()).toEqual('object')
    })

    it('Random Full Address', async () => {
        expect(typeof addressData.randomFullAddressBuilding()).toEqual('object')
    })
})