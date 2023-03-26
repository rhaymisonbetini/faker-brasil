'use strict'

const { Mixin } = require('ts-mixer')
const PersonalData = require('./src/fabric/PersonalData');
const UniversityData = require('./src/fabric/UniversityData');
const AddressData = require('./src/fabric/AddressData');
const AutoData = require('./src/fabric/AutoData');
const BankData = require('./src/fabric/BankData');
const IndustryData = require('./src/fabric/IndustryData');
const MarketData = require('./src/fabric/MarketData')
const InternetData = require('./src/fabric/InternetData')
const HealthData = require('./src/fabric/HealthData')
const GymData = require('./src/fabric/GymData')
class SuperFakerBrasil extends Mixin(
    PersonalData,
    UniversityData,
    AddressData,
    AutoData,
    BankData,
    IndustryData,
    MarketData,
    InternetData,
    HealthData,
    GymData
) {

    constructor() {
        super();
    }
}

module.exports = SuperFakerBrasil