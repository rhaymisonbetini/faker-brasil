'use strict'

const BankHelpers = require('../helpers/BankHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');

class BankData {

    /**
     * return a bank with identificator
     * @returns {Object}
     */
    bank() {
        return RandomArrayElement.randomElement(BankHelpers.banks())
    }

    /**
     * get a random banck name
     * @returns {string}
     */
    bankName() {
        return RandomArrayElement.randomElement(BankHelpers.banks()).name
    }

    /**
     * get a random banck type
     * @returns {string}
     */
    accountType() {
        return RandomArrayElement.randomElement(BankHelpers.types())
    }

    /**
     * get a random banck type
     * @returns {string}
     */
    bankAccountNumber() {
        return RandomArrayElement.randomStringOnlyNumbers(7) + '-' + RandomArrayElement.randomStringOnlyNumbers(1)
    }

    /**
     * get a random banck type
     * @returns {string}
     */
    bankAgency() {
        return RandomArrayElement.randomStringOnlyNumbers(4)
    }

    /**
    * get a random banck type
    * @returns {string}
    */
    fullBank() {
        let bank = this.bank();
        return {
            code: bank.code,
            name: bank.name,
            accountNumber: this.bankAccountNumber(),
            agency: this.bankAgency(),
            type: this.accountType()
        }
    }
}

module.exports = BankData