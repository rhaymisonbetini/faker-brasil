'use strict'

const UniversityHelper = require('../helpers/UniveristyHelpers');

class UniversityData {

    constructor(){
        this.universityHelper = new UniversityHelper();
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