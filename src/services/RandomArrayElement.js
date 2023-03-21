'use strict'

class RandomArrayElement {

    /**
     * return a rando element from array
     * @param {array} array 
     * @returns any
     */
    static randomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * return a random number between 2 and 5
     * @returns int
     */
    static randoNumber() {
        return Math.random() * (5 - 2) + 2;
    }

      /**
     * return a random number between min and max
     * @returns int
     */
      static randoNumberIn(min,max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * return a random strintg
     * @param {boolean} isUpper
     * @param {number} length 
     * @returns string
     */
    static randomString(isUpper, length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return isUpper ? result : result.toLowerCase();
    }

    static randomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    static randomStringOnlyNumbers(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    /**
         * return alphabet upper
         * @returns {Array<string>}
         */
    static alphabet() {
        return [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ]
    }
}

module.exports = RandomArrayElement