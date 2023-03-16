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
    * this function a email
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

    workCard() {
        if (this.person) { }
        return this;
    }

    passPort() {
        if (this.person) { }
        return this;
    }

    birthDate() {
        if (this.person) { }
        return this;
    }

    clear() {
        this.person = {}
        return this;
    }

}

module.exports = PersonalData