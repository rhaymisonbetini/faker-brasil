'use strict'

const axios = require('axios')
const CORREIOSAPI = 'https://viacep.com.br/ws/'
class AddressService {

    /**
     * return a object from correio api
     * @param {Promisse<object>} cep 
     */
    static async getAddressByCep(cep) {
        try {
            let cepResponse = await axios.get(`${CORREIOSAPI}${cep}/json`)
            if (cepResponse.status === 200) {
                return cepResponse.data
            }
        } catch (e) {
            return {}
        }
    }

    /**
     * 
     * @param {number} initi 
     * @param {number} final 
     * @returns {string}
     */
    static randomRangeCep(initi, final) {
        let min = parseInt(initi);
        let max = parseInt(final);
        let result = Math.random() * (max - min) + min;
        return Math.floor(result)
    }

}

module.exports = AddressService