'use strict'

const AddressService = require('../services/AddressService');
const RandomArrayElement = require('../services/RandomArrayElement');
const AddressHelpers = require('../helpers/AddressHelpers');

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
        return AddressService.randomRangeCep(random.init, random.end)
    }

    /**
    * get a radom cep by location
    * @param {string} location 
    * @return string
    */
    randomCepByState(location) {
        let random = AddressHelpers.getRangeByLocation(location);
        return AddressService.randomRangeCep(random.init, random.end)
    }

    /**
    * get a radom cep by location
    * @param {string} location 
    * @return {Promise<object>} 
    */
    async randomFullAddressByState() {
 
    }

}
module.exports = AddressData