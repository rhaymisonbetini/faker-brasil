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
const GovData = require('./src/fabric/GovData')
const SportsData = require('./src/fabric/SportsData')
const ImageData = require('./src/fabric/ImageData')
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
    GymData,
    GovData,
    SportsData,
    ImageData
) {

    constructor() {
        super();
    }
}

module.exports = SuperFakerBrasil