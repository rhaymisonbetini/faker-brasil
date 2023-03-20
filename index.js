'use strict'

const { Mixin } = require('ts-mixer')
const PersonalData = require('./src/fabric/PersonalData');
const UniversityData = require('./src/fabric/UniversityData');
const AddressData = require('./src/fabric/AddressData');
const AutoData = require('./src/fabric/AutoData');
class SuperFakerBrasil extends Mixin(
    PersonalData,
    UniversityData,
    AddressData,
    AutoData
) {

    constructor() {
        super();
    }
}

module.exports = SuperFakerBrasil