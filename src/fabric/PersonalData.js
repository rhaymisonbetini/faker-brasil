'use strict'

const RandomArrayElement = require('../services/RandomArrayElement');
const NamesHelpers = require('../helpers/NamesHelpers');

class PersonalData {

    constructor() {
    }

    /**
     * this function create a firstName 
     * @returns  string | object
     */
    firstName() {
        return RandomArrayElement.randomElement(NamesHelpers.getSimpleNames());
    }

    /**
    * this function create a lastname
    * @returns  string | object
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
    * @returns  string | object
    */
    fullName() {
        return this.firstName() + ' ' +  this.lastName()
    }

    /**
     * this function create a rg
    * @returns  string | object
    */
    rg() {
        return NamesHelpers.geneateRG();
    }

    /**
    * this function create a cpf with ou without point
    * @param {boolean} points
    * @returns  string | object
    */
    cpf(points) {
        return NamesHelpers.generateCpfFake(points);
    }

    /**
    * this function generate a email
    * @returns  string | object
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
    * @returns  string | object
    */
    workCard(points) {
        return NamesHelpers.generateWorkCard(points);
    }

    /**
    * this function generate a passport
    * @returns  string | object
    */
    passPort() {
        let initial = RandomArrayElement.randomString(true, 2)
        return NamesHelpers.generatePassport(initial);
    }

    /**
    * this function generate a birthDate
    * @param {boolean} slash
    * @returns  string | object
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
    * @returns  string | object
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
    * @returns  string | object
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
        let person = this.firstName()
            .lastName()
            .fullName()
            .birthDate(true)
            .cpf(true)
            .rg()
            .phone(true, true)
            .email()
            .workCard(true)
            .passPort(true)
        return person;
    }

    /**
    * if you not want do create a new class you just clear the context of person
    * @returns 
    */
    clear() {
        this.person = {}
    }

}

module.exports = PersonalData