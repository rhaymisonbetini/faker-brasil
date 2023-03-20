'use strict'

const AutoHelpers = require('../helpers/AutoHelpers');
const RandomArrayElement = require('../services/RandomArrayElement')

class AutoData {

    /**
    * return a auto model
    * @returns {string}
    */
    autoModel() {
        return RandomArrayElement.randomElement(AutoHelpers.auto()).marca
    }

    /**
    * return a auto name
    * @returns {string}
    */
    autoName() {
        return RandomArrayElement.randomElement(AutoHelpers.auto()).name
    }

    /**
    * return a object with model and name
    * @returns {Object}
    */
    auto() {
        return RandomArrayElement.randomElement(AutoHelpers.auto())
    }

    /**
    * return objecti with model and name by name
    * @param {string} model 
    * @returns {Array<Object>}
    */
    autosByModel(model) {
        return AutoHelpers.autosByModel(model)
    }

    /**
    * return objecti with model and name by name
    * @param {string} model 
    * @returns {Array<Object>}
    */
    autoByModel(model) {
        return AutoHelpers.autoByModel(model)
    }
    /**
     * return a licenseplace with or not mask
     * @param {boolean} mask
     * @return {string}
     */
    licensePlace(mask = false) {
        let initial = '';
        let number = '';
        let min = 0;
        let max = 9;
        for (let i = 0; i < 3; i++) {
            initial += RandomArrayElement.randomElement(RandomArrayElement.alphabet());
            number += (Math.floor(Math.random() * (max - min + 1)) + min).toString();
        }
        return mask ? initial + '-' + number : initial + number;
    }

    /**
     * return a full auto details
     * @returns {Object}
     */
    fullAuto(){
        let auto = this.auto();
        return {
            name: auto.name,
            model: auto.marca,
            licencePlace: this.licensePlace(true)
        }
    }

}

module.exports = AutoData