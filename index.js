'use strict'
const PersonalData = require('./src/fabric/PersonalData');
const UniversityData = require('./src/fabric/UniversityData');

class SuperFakerBrasil {

    constructor() {
        this.personalData = new PersonalData();
        this.universityData = new UniversityData();
    }

}

module.exports = SuperFakerBrasil