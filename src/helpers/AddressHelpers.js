'use strict'

class AddressHelpers {

    /**
     * this method return rangom rangem by sigla (AC,SP,RJ...)
     * @param {string} location 
     * @returns object
     */
    static getRangeByLocation(location) {
        return this.getArrayOfRangeCep().find(cep => cep.sigla === location)
    }

    /**
     * return a array of range ceps
     * @returns array
     */
    static getArrayOfRangeCep() {
        return [
            { sigla: "AC", init: "69900000", end: "69999999" },
            { sigla: "AL", init: "57000000", end: "57999999" },
            { sigla: "AM", init: "69000000", end: "69299999" },
            { sigla: "AM", init: "69400000", end: "69899999" },
            { sigla: "AP", init: "68900000", end: "68999999" },
            { sigla: "BA", init: "40000000", end: "48999999" },
            { sigla: "CE", init: "60000000", end: "63999999" },
            { sigla: "DF", init: "70000000", end: "73699999" },
            { sigla: "ES", init: "29000001", end: "29999999" },
            { sigla: "GO", init: "72800000", end: "76799999" },
            { sigla: "GO", init: "73700000", end: "76799999" },
            { sigla: "MA", init: "65000000", end: "65999999" },
            { sigla: "MG", init: "30000000", end: "39999999" },
            { sigla: "MS", init: "79000000", end: "79999999" },
            { sigla: "MT", init: "78000000", end: "78899999" },
            { sigla: "PA", init: "66000000", end: "68899999" },
            { sigla: "PB", init: "58000000", end: "58999999" },
            { sigla: "PE", init: "50000000", end: "56999999" },
            { sigla: "PI", init: "64000000", end: "64999999" },
            { sigla: "PR", init: "80000000", end: "87999999" },
            { sigla: "RJ", init: "20000000", end: "28999999" },
            { sigla: "RN", init: "59000000", end: "59999999" },
            { sigla: "RO", init: "76800000", end: "76999999" },
            { sigla: "RR", init: "69300000", end: "69399999" },
            { sigla: "RS", init: "90000000", end: "99999999" },
            { sigla: "SC", init: "88000000", end: "89999999" },
            { sigla: "SE", init: "49000000", end: "49999999" },
            { sigla: "SP", init: "10000000", end: "19999999" },
            { sigla: "TO", init: "77000000", end: "77999999" },
        ]
    }
}

module.exports = AddressHelpers