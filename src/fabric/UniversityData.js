'use strict'

const UniversityHelper = require('../helpers/UniveristyHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');


class UniversityData {

    constructor() {
    }

    /**
     * return full university object
     * @returns {object} object
     */
    getUniversity() {
        return RandomArrayElement.randomElement(UniversityHelper.getUniveristyArray());
    }

    /**
    *  return sigla (UFBA, UFES, UFS) 
    * @returns {string} string
    */
    getUniversitySigla() {
        return RandomArrayElement.randomElement(UniversityHelper.getUniveristyArray()).sigla;
    }


    /**
    *  return a name of universirty
    * @returns {string} string
    */
    getUniveristyName() {
        return RandomArrayElement.randomElement(UniversityHelper.getUniveristyArray()).universidade;
    }
}

module.exports = UniversityData;