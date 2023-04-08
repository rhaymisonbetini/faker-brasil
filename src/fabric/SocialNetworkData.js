'use strict'
const RandomArrayElement = require('../services/RandomArrayElement');
const SocialNetworkHelpers = require('../helpers/SocialNetworkHelpers')

class SocialNetworkData {

    /**
    * Return a positive comment for a social network
    * @returns {string}
    */
    positiveComment() {
        return RandomArrayElement.randomElement(SocialNetworkHelpers.positivesComment())
    }

    /**
    * Return a negative comment for a social network
    * @returns {string}
    */
    negativeComment() {
        return RandomArrayElement.randomElement(SocialNetworkHelpers.negativeComments())
    }

    /**
    * Return a negative sport text for news
    * @param {string} paragraph
    * @returns {string}
    */
    sportText(paragraph = 3) {
        let text = [];
        for (let i = 0; i < paragraph; i++) {
            text.push(RandomArrayElement.randomElement(SocialNetworkHelpers.sportText()))
        }
        return text;
    }

}

module.exports = SocialNetworkData