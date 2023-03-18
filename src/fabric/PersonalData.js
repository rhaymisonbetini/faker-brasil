'use strict'

const RandomArrayElement = require('../services/RandomArrayElement');
const NamesHelpers = require('../helpers/NamesHelpers');

class PersonalData {

    /**
     * this function create a firstName 
     * @returns  string
     */
    firstName() {
        return RandomArrayElement.randomElement(NamesHelpers.getSimpleNames());
    }

    /**
    * this function create a lastname
    * @returns  string
    */
    lastName() {

        let totallastName = RandomArrayElement.randoNumber();
        let lastName = '';

        for (let i = 0; i < Math.round(totallastName); i++) {
            lastName += ' ' + RandomArrayElement.randomElement(NamesHelpers.getLastName());
        }
        lastName = lastName.trim();

        return lastName;
    }

    /**
    * this function create a full name if exist or create a new full name
    * @returns  string
    */
    fullName() {
        return this.firstName() + ' ' + this.lastName()
    }

    /**
     * this function create a rg
    * @returns  string
    */
    rg() {
        return NamesHelpers.geneateRG();
    }

    /**
    * this function create a cpf with ou without point
    * @param {boolean} points
    * @returns  string
    */
    cpf(points) {
        return NamesHelpers.generateCpfFake(points);
    }

    /**
    * this function generate a email
    * @returns  string
    */
    email(firstName = null) {
        let email = '';
        if (firstName) {
            email = NamesHelpers.generateEmail(firstName + lastName);
        } else {
            email = NamesHelpers.generateEmail(this.firstName() + this.lastName());
        }
        return email
    }

    /**
    * this function generate a workcard
    * @param {boolean} points
    * @returns  string
    */
    workCard(points) {
        return NamesHelpers.generateWorkCard(points);
    }

    /**
    * this function generate a passport
    * @returns  string
    */
    passPort() {
        let initial = RandomArrayElement.randomString(true, 2)
        return NamesHelpers.generatePassport(initial);
    }

    /**
    * this function generate a birthDate
    * @param {boolean} slash
    * @returns  string
    */
    birthDate(slash) {
        const emptyDate = new Date();
        const randomDate = new Date();
        const dateFormatter = Intl.DateTimeFormat('PT-br');
        let formattedRandomDate = dateFormatter.format(emptyDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 40000)));
        if (!slash) {
            formattedRandomDate = formattedRandomDate.replace(/\//g, '-');
        }
        return formattedRandomDate
    }

    /**
    * this function random normal number phone for Brazi
    * @param {boolean} prefix
    * @param {boolean} mask
    * @returns  string
    */
    phone(prefix, mask) {
        let ddd = RandomArrayElement.randomElement(NamesHelpers.getDDDBrasil()).split('-')[0];
        let phone = NamesHelpers.generatePhone(ddd, prefix, mask);
        return phone;
    }

    /**
    * this function random normal number phone for Brazi
    * @param {boolean} prefix
    * @param {boolean} mask
    * @returns  string
    */
    cellPhone(prefix, mask) {
        let ddd = RandomArrayElement.randomElement(NamesHelpers.getDDDBrasil()).split('-')[0];
        let cellPhone = NamesHelpers.generateCellphone(ddd, prefix, mask);
        return cellPhone
    }

    /**
    * this function generate a birthDate
    * @param {boolean} slash
    * @returns  object
    */
    newPerson() {
        return {
            firstName: this.firstName(),
            lastName: this.lastName(),
            fullName: this.fullName(),
            birthDate: this.birthDate(true),
            cpf: this.cpf(true),
            rg: this.rg(),
            phone: this.phone(true, true),
            cellPhone: this.cellPhone(true, true),
            email: this.email(),
            workCard: this.workCard(true),
            passPort: this.passPort(true)
        }
    }

}

module.exports = PersonalData