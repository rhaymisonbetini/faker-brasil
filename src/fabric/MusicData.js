'use strict';

const MusicHelpers = require("../helpers/MusicHelpers")
const RandomArrayElement = require('../services/RandomArrayElement');

class MusicData {

    /**
     * return a random musical festival in brazil
     * @returns {string}
     */
    musicFestival() {
        return RandomArrayElement.randomElement(MusicHelpers.musicFestival())
    }


    /**
     * return a random  events House in brazil
     * @returns {string}
     */
    eventsHouse() {
        return RandomArrayElement.randomElement(MusicHelpers.eventsHouse())
    }

    /**
    * return a random musicalStyle
    * @returns {string}
    */
    musicalStyle() {
        return RandomArrayElement.randomElement(MusicHelpers.musicalStyle())
    }

    /**
    * return a random guitar
    * @returns {string}
    */
    guitars() {
        return RandomArrayElement.randomElement(MusicHelpers.guitars())
    }

    /**
    * return a random percussion Musical Instrument
    * @returns {string}
    */
    percussionMusicalInstrument() {
        return RandomArrayElement.randomElement(MusicHelpers.percussionMusicalInstrument())
    }

    /**
    * return a random wind Musical Instrument
    * @returns {string}
    */
    windMusicalInstrument() {
        return RandomArrayElement.randomElement(MusicHelpers.windMusicalInstrument())
    }

    /**
    * return a random string Musical Instrument
    * @returns {string}
    */
    stringMusicalInstrument() {
        return RandomArrayElement.randomElement(MusicHelpers.stringMusicalInstrument())
    }

    /**
    * return a random eletronic Musical Instrument
    * @returns {string}
    */
    eletronicMusicalInstrument() {
        return RandomArrayElement.randomElement(MusicHelpers.eletronicMusicalInstrument())
    }




}

module.exports = MusicData;