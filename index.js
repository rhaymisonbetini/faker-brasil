'use strict'

const { Mixin } = require('ts-mixer')
const PersonalData = require('./src/fabric/PersonalData');
const UniversityData = require('./src/fabric/UniversityData');

class SuperFakerBrasil extends Mixin(PersonalData, UniversityData) {

    constructor(){
        super();
    }
}

module.exports = SuperFakerBrasil