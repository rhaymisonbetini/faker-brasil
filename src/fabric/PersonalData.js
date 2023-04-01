'use strict'

const RandomArrayElement = require('../services/RandomArrayElement');
const NamesHelpers = require('../helpers/NamesHelpers');
const DateHelpers = require('../helpers/DateHelpers');

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
            email = NamesHelpers.generateEmail(firstName);
        } else {
            email = NamesHelpers.generateEmail(this.firstName() + this.lastName());
        }
        return email
    }

    /**
    * this function generate a email
    * @returns {object}
    */
    cnh() {
        return {
            register: RandomArrayElement.randomStringOnlyNumbers(11),
            expiration: DateHelpers.moreToday(),
            type: RandomArrayElement.randomElement(['A', 'B', 'AB', 'C', 'D']),
            permission: RandomArrayElement.randomElement(['SIM', 'NAO'])
        }
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
        let formattedRandomDate = DateHelpers.lessRandomYear(RandomArrayElement.randoNumberIn(2, 100));
        if (slash) {
            let data = formattedRandomDate.split('-');
            formattedRandomDate = data[0] + '/' + data[1]; +'/'; +data[2];
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
    * this function generate a newPerson
    * @param {boolean} slash
    * @returns  {object}
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

    /**
    * this function generate a new young Person
    * @param {boolean} slash
    * @returns  {object}
    */
    newPersonYounger() {
        return {
            firstName: this.firstName(),
            lastName: this.lastName(),
            fullName: this.fullName(),
            birthDate: DateHelpers.younger(),
            cpf: this.cpf(true),
            rg: this.rg(),
            phone: this.phone(true, true),
            cellPhone: this.cellPhone(true, true),
            email: this.email(),
            passPort: this.passPort(true)
        }
    }

    /**
    * this function generate a new adult
    * @param {boolean} slash
    * @returns  {object}
    */
    newAdultPerson() {
        return {
            firstName: this.firstName(),
            lastName: this.lastName(),
            fullName: this.fullName(),
            birthDate: DateHelpers.adult(),
            cpf: this.cpf(true),
            rg: this.rg(),
            phone: this.phone(true, true),
            cellPhone: this.cellPhone(true, true),
            email: this.email(),
            workCard: this.workCard(true),
            passPort: this.passPort(true)
        }
    }

    /**
    * this function generate a new adult
    * @param {boolean} slash
    * @returns  {object}
    */
    newOlderPerson() {
        return {
            firstName: this.firstName(),
            lastName: this.lastName(),
            fullName: this.fullName(),
            birthDate: DateHelpers.older(),
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