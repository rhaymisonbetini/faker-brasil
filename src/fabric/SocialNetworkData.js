'use strict'
const RandomArrayElement = require('../services/RandomArrayElement');
const SocialNetworkHelpers = require('../helpers/SocialNetworkHelpers')
const ImageData = require('../fabric/ImageData');
const PersonalData = require('../fabric/PersonalData')
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
    * Return a  sport text for news
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

    /**
    * Return a random text for news
    * @param {string} paragraph
    * @returns {Array<string>}
    */
    newsText(paragraph = 3) {
        let text = [];
        for (let i = 0; i < paragraph; i++) {
            text.push(RandomArrayElement.randomElement(SocialNetworkHelpers.newsText()))
        }
        return text;
    }

    /**
    * Return a random text
    * @param {string} paragraph
    * @returns {Array<string>}
    */
    randomText(paragraph = 3) {
        let lines = 10;
        let fullText = [];
        let text = SocialNetworkHelpers.textPool().split(',')
        let length = text.length;

        for (let i = 0; i < paragraph; i++) {
            let lineToInsert = '';
            for (let line = 0; line < lines; line++) {
                lineToInsert += ' ' + text[parseInt(RandomArrayElement.randoNumberIn(0, length))]
            }
            fullText.push(lineToInsert)
        }

        return fullText;
    }

    /**
     * return a object with a full social post
     * @returns {object}
     */
    async fakePost() {
        let imageData = new ImageData();
        let personalData = new PersonalData();

        let image = await imageData.getPeopleImage();
        let post = RandomArrayElement.randomElement(SocialNetworkHelpers.fakePost());

        let history = [];

        for (let i = 0; i < parseInt(RandomArrayElement.randoNumberIn(5, 20)); i++) {
            history.push({
                name: personalData.firstName() + ' ' + personalData.lastName(),
                post: this.positiveComment()
            })
        }
        return {
            image: image,
            post: post,
            history: history
        }
    }
}

module.exports = SocialNetworkData