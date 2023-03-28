'use strict'

const BankHelpers = require('../helpers/BankHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');
const DateHelpers = require('../helpers/DateHelpers')

class BankData {

    /**
     * return a bank with identificator
     * @returns {object}
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
     * create a fake card
     * @returns {string}
     */
    creadCardNumber() {
        return BankHelpers.generateCredCardNumber();
    }

    credCard(flag) {
        if (!flag) {
            let flags = ['VISA', 'MasterCard', 'Amex', 'Diners', 'Discover', 'EnRoute', 'JCB', 'Voyager']
            flag = RandomArrayElement.randomElement(flags)
        }
        return {
            flag: flag,
            number: this.creadCardNumber(flag),
            ccv: RandomArrayElement.randomStringOnlyNumbers(3),
            expiration: DateHelpers.moreToday()
        }
    }

    /**
    * get a random banck type
    * @returns {string}
    */
    fullBank(flag = null) {
        let bank = this.bank();
        return {
            code: bank.code,
            name: bank.name,
            accountNumber: this.bankAccountNumber(),
            agency: this.bankAgency(),
            type: this.accountType(),
            card: this.credCard(flag)
        }
    }
}

module.exports = BankData