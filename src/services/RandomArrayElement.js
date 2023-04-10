'use strict'

class RandomArrayElement {

    /**
     * remove all empty spaces form a give string
     * @param {string} string 
     * @returns {string}
     */
    static removeAllEmptySpaceFromString(string) {
        return string.replace(/ /g, '')
    }

    /**
     * create array number 
     * @param {number} total 
     * @param {number} numero 
     * @returns {array}
     */
    static createArrayNumbers(total, numero) {
        return Array.from(Array(total), () => (Math.round(Math.random() * numero)));
    }

    /**
     * return number to create cnpj
     * @param {number} dividendo 
     * @param {number} divisor 
     * @returns number
     */
    static mod(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor))
    }

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
     * @returns {int}
     */
    static randoNumber() {
        return Math.random() * (5 - 2) + 2;
    }

    /**
   * return a random number between min and max
   * @returns {int}
   */
    static randoNumberIn(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
    * return a random number between min and max and not Flor
    * @returns {int}
    */
    static randoNumberInNotFloor(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
    * return a random number between min and max and not Flor
    * @returns {int}
    */
    static superRandom(min, max) {
       return Math.random() * (max - min) + min;
    }

    /**
     * shuffle a givem array
     * @param {array} arr 
     * @returns 
     */
    static shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
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

    /**
    * return a random stirng
    * @returns {int}
    */
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

    /**
    * return a random stirng number
    * @returns {int}
    */
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
    * return a string without especial portugues caracteres
    * @returns {int}
    */
    static removeAcc(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }

    /**
         * return alphabet upper
         * @returns {array<string>}
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