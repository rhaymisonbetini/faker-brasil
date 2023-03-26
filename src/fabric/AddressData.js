'use strict'

const AddressService = require('../services/AddressService');
const RandomArrayElement = require('../services/RandomArrayElement');
const AddressHelpers = require('../helpers/AddressHelpers');
const PersonalData = require('../fabric/PersonalData');

class AddressData {

    /**
    * get a full address from correios api 
    * @param {string} cep 
    * @return {Promise<object>}  
    */
    async getAddressByCepCorreio(cep) {
        return await AddressService.getAddressByCep(cep);
    }

    /**
    * get a radom cep by location
    * @return string
    */
    randomCep() {
        let random = RandomArrayElement.randomElement(AddressHelpers.getArrayOfRangeCep())
        return AddressService.randomRangeCep(random.init, random.end).toString()
    }

    /**
    * get a radom cep by location
    * @param {string} location 
    * @return string
    */
    randomCepByState(location) {
        let random = AddressHelpers.getRangeByLocation(location);
        return AddressService.randomRangeCep(random.init, random.end).toString()
    }

    /**
     * generate a random street name
     * @returns string
     */
    street() {
        return RandomArrayElement.randomElement(AddressHelpers.initialName()) + ' ' + RandomArrayElement.randomElement(AddressHelpers.streetAndneighborhood())
    }

    /**
    * generate a random neighborhood name
    * @returns string
    */
    neighborhood() {
        return RandomArrayElement.randomElement(AddressHelpers.streetAndneighborhood()) + ' ' + RandomArrayElement.randomElement(AddressHelpers.initialName())
    }

    /**
   * generate a random building name
   * @returns string
   */
    building() {
        let personalData = new PersonalData();
        let types = ['Condominio', 'Conjunto', 'Prédio', 'Edifício', 'Residencial']
        return RandomArrayElement.randomElement(types) + ' ' + personalData.firstName() + ' ' + RandomArrayElement.randomElement(AddressHelpers.streetAndneighborhood())
    }

    /**
    * get a full random address
    * @return {object} 
    */
    randomFullAddress() {
        let state = RandomArrayElement.randomElement(AddressHelpers.getArrayOfRangeCep());
        let stateAndCity = AddressHelpers.getCityAndStateByLocation(state.sigla)
        let city = RandomArrayElement.randomElement(stateAndCity.cidades);

        return {
            cep: this.randomCepByState(state.sigla),
            state: state.sigla,
            fullstate: stateAndCity.nome,
            city: city,
            neighborhood: this.neighborhood(),
            street: this.street(),
            number: Math.floor(Math.random() * (3000 - 1) + 1),
            complement: RandomArrayElement.randomElement(AddressHelpers.complements())
        }
    }

    /**
    * get a full random address by a building
    * @return {object} 
    */
    randomFullAddressBuilding() {
        let state = RandomArrayElement.randomElement(AddressHelpers.getArrayOfRangeCep());
        let stateAndCity = AddressHelpers.getCityAndStateByLocation(state.sigla)
        let city = RandomArrayElement.randomElement(stateAndCity.cidades);
        return {
            cep: this.randomCepByState(state.sigla),
            state: state.sigla,
            fullstate: stateAndCity.nome,
            city: city,
            building: this.building(),
            neighborhood: this.neighborhood(),
            street: this.street(),
            bloco: 'Bloco ' + RandomArrayElement.randomElement(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']),
            number: Math.floor(Math.random() * (3000 - 1) + 1),
            complement: RandomArrayElement.randomElement(AddressHelpers.complements())
        }
    }

}
module.exports = AddressData