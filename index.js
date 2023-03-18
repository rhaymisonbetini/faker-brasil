'use strict'

const { Mixin } = require('ts-mixer')
const PersonalData = require('./src/fabric/PersonalData');
const UniversityData = require('./src/fabric/UniversityData');
const AddressData = require('./src/fabric/AddressData');

class SuperFakerBrasil extends Mixin(
    PersonalData,
    UniversityData,
    AddressData
) {

    constructor() {
        super();
    }
}

module.exports = SuperFakerBrasil