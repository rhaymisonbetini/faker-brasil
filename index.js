'use strict'

const { Mixin } = require('ts-mixer')
const PersonalData = require('./src/fabric/PersonalData');
const UniversityData = require('./src/fabric/UniversityData');
const AddressData = require('./src/fabric/AddressData');
const AutoData = require('./src/fabric/AutoData');
const BankData = require('./src/fabric/BankData');
const IndustryData = require('./src/fabric/IndustryData');

class SuperFakerBrasil extends Mixin(
    PersonalData,
    UniversityData,
    AddressData,
    AutoData,
    BankData,
    IndustryData
) {

    constructor() {
        super();
    }
}

module.exports = SuperFakerBrasil