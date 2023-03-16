'use strict'

const RandomArrayElement = require('../services/RandomArrayElement');
const NamesHelpers = require('../helpers/NamesHelpers');

class PersonalData {

    constructor() {
        this.person = {};
        this.RandomArrayElement = new RandomArrayElement();
        this.NamesHelpers = new NamesHelpers();
    }

    /**
     * this function create a firstName 
     * @param {boolean} chainEnd
     * @returns  string | object
     */
    firstName(chainEnd = false) {
        let name = this.RandomArrayElement.randomElement(this.NamesHelpers.getSimpleNames());
        if (this.person) {
            this.person.firstName = name
            return chainEnd ? this.person : this;
        }
        return name;
    }

    /**
    * this function create a lastname
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    lastName(chainEnd = false) {

        let totallastName = this.RandomArrayElement.randoNumber();
        let lastName = '';

        for (let i = 0; i < Math.round(totallastName); i++) {
            lastName += ' ' + this.RandomArrayElement.randomElement(this.NamesHelpers.getLastName());
        }
        lastName = lastName.trim();
        if (this.person) {
            this.person.lastName = lastName;
            return chainEnd ? this.person : this;
        }
        return lastName;
    }

    /**
    * this function create a full name if exist or create a new full name
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    fullName(chainEnd = false) {
        if (this.person) {
            let firstName = this.person.firstName ?? this.firstName();
            let lastName = this.person.lastName ?? this.lastName();
            this.person.fullname = firstName + ' ' + lastName
            return chainEnd ? this.person : this;
        }
        return this.firstName() + ' ' + this.lastName();
    }

    /**
     * this function create a rg
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    rg(chainEnd) {
        if (this.person) {
            this.person.rg = this.NamesHelpers.geneateRG();
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.geneateRG();
    }

    /**
    * this function create a cpf with ou without point
    * @param {boolean} points
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    cpf(points, chainEnd = false) {
        if (this.person) {
            this.person.cpf = this.NamesHelpers.generateCpfFake(points);
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.generateCpfFake();
    }

    /**
    * this function generate a email
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    email(chainEnd) {
        if (this.person) {
            let firstName = this.person.firstName ?? this.firstName();
            let lastName = this.person.lastName ?? this.lastName();
            this.person.email = this.NamesHelpers.generateEmail(firstName + lastName);
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.generateEmail();
    }

    /**
    * this function generate a workcard
    * @param {boolean} points
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    workCard(points, chainEnd = false) {
        if (this.person) {
            this.person.workCard = this.NamesHelpers.generateWorkCard(points);
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.generateWorkCard(points);
    }

    /**
    * this function generate a passport
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    passPort(chainEnd = false) {
        let initial = this.RandomArrayElement.randomString(true, 2)
        if (this.person) {
            this.person.passport = this.NamesHelpers.generatePassport(initial);
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.generatePassport(initial);
    }

    /**
    * this function generate a birthDate
    * @param {boolean} slash
    * @param {boolean} chainEnd
    * @returns  string | object
    */
    birthDate(slash, chainEnd = false) {
        const emptyDate = new Date();
        const randomDate = new Date();
        const dateFormatter = Intl.DateTimeFormat('PT-br');
        let formattedRandomDate = dateFormatter.format(emptyDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 40000)));
        if (!slash) {
            formattedRandomDate = formattedRandomDate.replace(/\//g, '-');
        }
        if (this.person) {
            this.person.birthDate = formattedRandomDate
            return chainEnd ? this.person : this;
        }
        return formattedRandomDate;
    }

    /**
     * this function generate a birthDate
     * @param {boolean} slash
     * @param {boolean} chainEnd
     * @returns  object
     */
    newPerson() {
        let person = this.firstName()
            .lastName()
            .fullName()
            .birthDate(true)
            .cpf(true)
            .rg()
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