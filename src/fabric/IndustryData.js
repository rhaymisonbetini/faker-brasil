'use strict'

const IndustryHelper = require('../helpers/IndustryHelper');
const RandomArrayElement = require('../services/RandomArrayElement');
const DateHelpers = require('../helpers/DateHelpers')
const PersonalData = require('../fabric/PersonalData')

class IndustryData {
    /**
     * return a random job
     * @returns {string}
     */
    job() {
        return RandomArrayElement.randomElement(IndustryHelper.jobs());
    }

    /**
     * return a enterprise name
     * @returns {string}
     */
    enterprise() {
        let personalData = new PersonalData();
        let finish = ['LTDA', 'MEI', 'SA', 'SS', 'ME', 'EPP', 'Eireli']
        let initial = ['Empresa', 'Grupo', 'Conjunto', 'Associados', 'Uniao']
        return RandomArrayElement.randomElement(initial) + ' ' + personalData.lastName() + ' ' + RandomArrayElement.randomElement(finish)
    }

    /**
    * generate radom cnpj 
    * @param {bool} mask
    * @returns {string}
    */
    cnpj(mask = false) {
        let total_array = 8;
        let n = 9;
        let [n1, n2, n3, n4, n5, n6, n7, n8] = RandomArrayElement.createArrayNumbers(total_array, n);
        let n9 = 0;
        let n10 = 0;
        let n11 = 0;
        let n12 = 1;

        let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (RandomArrayElement.mod(d1, 11));
        if (d1 >= 10) d1 = 0;

        let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (RandomArrayElement.mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        if (mask)
            return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
        else
            return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
    }
}

module.exports = IndustryData;