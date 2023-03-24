'use strict'

const AutoHelpers = require('../helpers/AutoHelpers');
const RandomArrayElement = require('../services/RandomArrayElement')

class AutoData {

    /**
    * return a auto model.
    * If you whant the model you just need split return and get 0 position
    * @returns {string}
    */
    motocicle() {
        return RandomArrayElement.randomElement(AutoHelpers.motocicle())
    }

    /**
    * return a auto model
    * @returns {string}
    */
    autoModel() {
        return RandomArrayElement.randomElement(AutoHelpers.auto()).marca
    }

    /**
    * return a auto name
    * @returns {string}
    */
    autoName() {
        return RandomArrayElement.randomElement(AutoHelpers.auto()).name
    }

    /**
    * return a object with model and name
    * @returns {Object}
    */
    auto() {
        return RandomArrayElement.randomElement(AutoHelpers.auto())
    }

    /**
    * return objecti with model and name by name
    * @param {string} model 
    * @returns {Array<Object>}
    */
    autosByModel(model) {
        return AutoHelpers.autosByModel(model)
    }

    /**
    * return objecti with model and name by name
    * @param {string} model 
    * @returns {Array<Object>}
    */
    autoByModel(model) {
        return AutoHelpers.autoByModel(model)
    }
    /**
     * return a licenseplate with or not mask
     * @param {boolean} mask
     * @return {string}
     */
    licensePlate(mask = false) {
        let initial = '';
        let number = '';
        let min = 0;
        let max = 9;
        for (let i = 0; i < 3; i++) {
            initial += RandomArrayElement.randomElement(RandomArrayElement.alphabet());
            number += (Math.floor(Math.random() * (max - min + 1)) + min).toString();
        }
        return mask ? initial + '-' + number : initial + number;
    }

    /**
     *  generate renanvam wutg 11 digits
     * @returns  {string}
     */
    renavam() {
        return RandomArrayElement.randomStringOnlyNumbers(11)
    }

    /**
     * return a fake chassi
     * @returns {string}
     */
    chassi() {
        let c1 = RandomArrayElement.randomString(3)
        let c2 = RandomArrayElement.randomString(6)
        let c3 = RandomArrayElement.randomString(2)
        let c4 = RandomArrayElement.randomString(6)
        return `${c1} ${c2} ${c3} ${c4}`
    }

    /**
    * get category of car
    * @returns {string}
    */
    category() {
        return RandomArrayElement.randomElement(AutoHelpers.category()).nome
    }

    /**
     * get type of car
     * @returns {string}
     */
    type() {
        return RandomArrayElement.randomElement(AutoHelpers.type()).nome
    }

    /**
    * get body of car
    * @returns {string}
    */
    body() {
        return RandomArrayElement.randomElement(AutoHelpers.body()).nome
    }

    /**
    * get fuel of car
    * @returns {string}
    */
    fuel() {
        return RandomArrayElement.randomElement(AutoHelpers.fuel()).nome
    }

    /**
    * get specie of car
    * @returns {string}
    */
    specie() {
        return RandomArrayElement.randomElement(AutoHelpers.specie()).nome
    }

    /**
    * get restrictions of car
    * @returns {string}
    */
    restrictions() {
        return RandomArrayElement.randomElement(AutoHelpers.restrictions()).nome
    }

    /**
    * get color of car
    * @returns {string}
    */
    color() {
        return RandomArrayElement.randomElement(AutoHelpers.color()).nome
    }

    /**
     * return a full auto details
     * @returns {Object}
     */
    fullAuto() {
        let auto = this.auto();
        return {
            name: auto.name,
            model: auto.marca,
            licencePlate: this.licensePlate(true),
            chassi: this.chassi(),
            renavam: this.renavam(),
            category: this.category(),
            type: this.type(),
            body: this.body(),
            fuel: this.fuel(),
            specie: this.specie(),
            restrictions: this.restrictions(),
            color: this.color(),
        }
    }

    
    /**
     * return a full motocicly
     * @returns {Object}
     */
    fullMotocicle() {
        let auto = this.motocicle();
        return {
            name: auto,
            model: auto.split(' ')[0],
            licencePlate: this.licensePlate(true),
            chassi: this.chassi(),
            renavam: this.renavam(),
            fuel: 'Gasolina',
            color: this.color(),
        }
    }

}

module.exports = AutoData