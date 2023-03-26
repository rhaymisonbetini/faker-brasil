'use strict'

const HealthHelpers = require('../helpers/HealthHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');
const DateHelpers = require('../helpers/DateHelpers')
const NamesHelpers = require('../helpers/NamesHelpers');


class HealthData {

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
    * return a medic specialist name
    * @returns {string}
    */
    medicSpecialist() {
        return RandomArrayElement.randomElement(HealthHelpers.medicEspecialist());
    }

    /**
    * return a name of medical exam
    * @returns {Array<string>}
    */
    medicalExams() {
        return RandomArrayElement.randomElement(HealthHelpers.medicalExams());
    }

    /**
    * return name for odonto clinic
    * @returns {string}
    */
    dental() {
        return RandomArrayElement.randomElement(HealthHelpers.dental())
    }

    /**
    * return a name of dental exam
    * @returns {Array<string>}
    */
    dentalExams() {
        return RandomArrayElement.randomElement(HealthHelpers.dentalExams());
    }

    /**
    * return a dental specialist name
    * @returns {string}
    */
    dentalSpecialist() {
        return RandomArrayElement.randomElement(HealthHelpers.dentalSpecialist())
    }

    /**
    * return name for veterinarian clinic
    * @returns {string}
    */
    veterinarian() {
        return RandomArrayElement.randomElement(HealthHelpers.vetName())
    }

    /**
    * return a name of veterinariam exam
    * @returns {Array<string>}
    */
    vetExams() {
        return RandomArrayElement.randomElement(HealthHelpers.vetExames());
    }

    /**
    * return name for veterinarian specialist
    * @returns {string}
    */
    vetSpecialist() {
        return RandomArrayElement.randomElement(HealthHelpers.vetSpecialist())
    }

}

module.exports = HealthData