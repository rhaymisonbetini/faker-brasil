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
            let firstName = this.person.firstName ?? this.firstName() ;
            let lastName  = this.person.lastName ?? this.lastName();
            this.person.fullname = firstName + ' ' + lastName 
            return chainEnd ? this.person : this;
        }
        return this.firstName() + ' ' + this.lastName();
    }

    rg() {
        if (this.person) {
            this.person.cpf = this.NamesHelpers.gerarCpfFake();
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.gerarCpfFake();
    }

    cpf() {
        if (this.person) {
            this.person.cpf = this.NamesHelpers.gerarCpfFake();
            return chainEnd ? this.person : this;
        }
        return this.NamesHelpers.gerarCpfFake();
    }

    email() {
        if (this.person) { }
        return this;
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