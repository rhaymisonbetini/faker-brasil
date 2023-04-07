'use strict';

const SportsHelpers = require('../helpers/SportsHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');

class SportsData {

    /**
     * This method get a random braziliam team
     * @returns {string}
     */
    getRandomBrazilianTeam() {
        return RandomArrayElement.randomElement(SportsHelpers.randomTeam());
    }

    /**
     * This method return a radom championship in Brazil
     * @returns {string}
     */
    getRandomChampionShip() {
        return RandomArrayElement.randomElement(SportsHelpers.randomChampionShip())
    }

    /**
    * This method return a radom brazilian stadiums
    * @returns {string}
    */
    getRandomStadium() {
        return RandomArrayElement.randomElement(SportsHelpers.stadium())
    }

    /**
     * return a random football match
     * @returns {string}
     */
    randomFootballMatch() {
        let team1 = RandomArrayElement.randomElement(SportsHelpers.randomTeam());
        let team2 = RandomArrayElement.randomElement(SportsHelpers.randomTeam());
        return team1 + ' ' + RandomArrayElement.randoNumberIn(0, 6).toFixed(0) + ' X ' + RandomArrayElement.randoNumberIn(0, 6).toFixed(0) + ' ' + team2
    }

    /**
     * This method get a random braziliam basket Team 
     * @returns {string}
     */
    basketTeam() {
        return RandomArrayElement.randomElement(SportsHelpers.basketTeams())
    }

    /**
    * return a random basket match
    * @returns {string}
    */
    basketTeamMatch() {
        let team1 = RandomArrayElement.randomElement(SportsHelpers.basketTeams());
        let team2 = RandomArrayElement.randomElement(SportsHelpers.basketTeams());
        return team1 + ' ' + RandomArrayElement.randoNumberIn(60, 120).toFixed(0) + ' X ' + RandomArrayElement.randoNumberIn(60, 120).toFixed(0) + ' ' + team2
    }
}

module.exports = SportsData;