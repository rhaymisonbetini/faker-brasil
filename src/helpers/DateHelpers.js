'use strict'
const momentRandom = require('moment-random');
const moment = require('moment');

class DateHelpers {

    /**
     * return now current
     * @returns {string}
     */
    static current() {
        var todayDate = moment();
        return todayDate.format('DD-MM-YYYY HH:mm:ss');
    }

    static moreToday() {
        var todayDate = moment();
        return momentRandom(todayDate.add(1024, 'days'), moment.now()).format('DD-MM-YYYY');
    }

    /**
     * return a date lass today
     * @param {number} years 
     * @returns 
     */
    static lessRandomYear(years) {
        var todayDate = moment();
        return momentRandom(moment.now(), todayDate.subtract(years, 'years')).format('DD-MM-YYYY');
    }

    /**
    * return a date a younger
    * @param {number} years 
    * @returns 
    */
    static younger() {
        var todayDate = moment();
        return momentRandom(moment.now(), todayDate.subtract(18, 'y')).format('DD-MM-YYYY');
    }

    /**
    * return a date adult
    * @param {number} years 
    * @returns 
    */
    static adult() {
        var todayDate = moment();
        let newm = todayDate.year();
        let init = newm - 18;
        let end = newm - 60;
        return momentRandom(moment(init.toString()), end.toString()).format('DD-MM-YYYY');
    }

    /**
    * return a date older
    * @param {number} years 
    * @returns 
    */
    static older() {
        var todayDate = moment();
        let newm = todayDate.year();
        let init = newm - 60;
        let end = newm - 120;
        return momentRandom(moment(init.toString()), end.toString()).format('DD-MM-YYYY');
    }

}

module.exports = DateHelpers