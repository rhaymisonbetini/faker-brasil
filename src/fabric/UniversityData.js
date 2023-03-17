'use strict'

const UniversityHelper = require('../helpers/UniveristyHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');


class UniversityData {

    constructor(){
        this.universityHelper = new UniversityHelper();
        this.randomArrayElement = new RandomArrayElement();

    }

    /**
     * 
     * @returns {object} object
     */
    getUniversity(){
        return this.randomArrayElement.randomElement(this.universityHelper.getUniveristyArray());
    }

    getUniversitySigla(){
        return this.randomArrayElement.randomElement(this.universityHelper.getUniveristyArray()).sigla;
    }

    getUniveristyName(){
        return this.randomArrayElement.randomElement(this.universityHelper.getUniveristyArray()).universidade;
    }

    /**
    * if you not want do create a new class you just clear the context of university
    * @returns 
    */
    clear() {
        this.univerity = {}
    }
}

module.exports = UniversityData;