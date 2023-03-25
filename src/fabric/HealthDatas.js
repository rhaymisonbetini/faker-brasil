'use strict'

const HealthHelpers = require('../helpers/HealthHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');
const DateHelpers = require('../helpers/DateHelpers')
const NamesHelpers = require('../helpers/NamesHelpers');


class HealthDatas {

    /**
     * return a hospital string name ex: Casa de misericordia
     * @returns {string}
     */
    hospital() {
        let prefix = RandomArrayElement.randomElement(['Unidade de pronto atendimento', 'Hospital', 'Fundação', 'Hospital de urgência', 'Casa de misericordia']);
        let initial = RandomArrayElement.randomElement(NamesHelpers.getSimpleNames());
        let middle = RandomArrayElement.randomElement(NamesHelpers.getLastName())
        let final = RandomArrayElement.randomElement(NamesHelpers.getLastName())
        return `${prefix} ${initial} ${middle} ${final}`
    }

    /**
    * return name for odonto clinic
    * @returns {string}
    */
    dental() {
        return RandomArrayElement.randomElement(HealthHelpers.dental())
    }

    
    /**
    * return name for veterinarian clinic
    * @returns {string}
    */
    veterinarian(){
        return RandomArrayElement.randomElement(HealthHelpers.vetName())
    }

}

module.exports = HealthDatas