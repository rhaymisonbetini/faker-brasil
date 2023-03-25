'use strict'

const IndustryData = require('./IndustryData')
const MarketHelpers = require('../helpers/MarketHelpers');
const RandomArrayElement = require('../services/RandomArrayElement');
const DateHelpers = require('../helpers/DateHelpers')
const AutoHelpers = require('../helpers/AutoHelpers')

class MarketData {
    /**
     * return marketProduct name, price and validate
     * @param {boolean} complete
     * @returns Object
     */
    marketProduct(complete = false) {
        let industryData = new IndustryData();
        let product = {
            product: RandomArrayElement.randomElement(MarketHelpers.marketList()),
            price: RandomArrayElement.randoNumberInNotFloor(1, 20).toFixed(2),
            date: DateHelpers.moreToday(),
        }

        complete ? product.supplier = industryData.fullEnterPrise('Varejo') : null;
        return product;
    }


    /**
     * return Array of objetct of a MakertProducts by Suplier
     * @param {number} products 
     * @param {number} supplier 
     * @returns {Array<Object>}
     */
    generateMarketBySupplier(products, supplier) {
        let industryData = new IndustryData();
        let supplierList = [];
        for (let i = 0; i < supplier; i++) {
            let supp = industryData.fullEnterPrise('Varejo');
            let productsList = [];
            for (let j = 0; j < products; j++) {
                productsList.push(this.marketProduct())
            }
            supplierList.push({
                supplier: supp,
                products: productsList
            })
        }
        return supplierList;
    }

    /**
    * return drugStore name, price and validate
     * @param {boolean} complete
    * @returns Object
    */
    drugStoreProducts(complete = false) {
        let industryData = new IndustryData();
        let product = {
            product: RandomArrayElement.randomElement(MarketHelpers.drugStore()),
            price: RandomArrayElement.randoNumberInNotFloor(1, 100).toFixed(2),
            date: DateHelpers.moreToday(),
        }
        complete ? product.supplier = industryData.fullEnterPrise('Medicamentos') : null;
        return product;
    }

    /**
    * return Array of objetct of a drugstore by Suplier
    * @param {number} products 
    * @param {number} supplier 
    * @returns {Array<Object>}
    */
    generateDrugStoreBySupplier(products, supplier) {
        let industryData = new IndustryData();
        let supplierList = [];
        for (let i = 0; i < supplier; i++) {
            let supp = industryData.fullEnterPrise('Medicamentos');
            let productsList = [];
            for (let j = 0; j < products; j++) {
                productsList.push(this.drugStoreProducts())
            }
            supplierList.push({
                supplier: supp,
                products: productsList
            })
        }
        return supplierList;
    }

    /**
    * return eletronico name, price and validate
    * @param {boolean} complete
    * @returns Object
    */
    eletronicProducts(complete = false) {
        let industryData = new IndustryData();
        let product = {
            product: RandomArrayElement.randomElement(MarketHelpers.eletro()),
            price: RandomArrayElement.randoNumberInNotFloor(1, 100).toFixed(2),
            date: DateHelpers.moreToday(),
        }
        complete ? product.supplier = industryData.fullEnterPrise('Eletrônico') : null;
        return product;
    }

    /**
    * return Array of objetct of a eletronico by Suplier
    * @param {number} products 
    * @param {number} supplier 
    * @returns {Array<Object>}
    */
    generateEletronicSupplier(products, supplier) {
        let industryData = new IndustryData();
        let supplierList = [];
        for (let i = 0; i < supplier; i++) {
            let supp = industryData.fullEnterPrise('Eletrônico');
            let productsList = [];
            for (let j = 0; j < products; j++) {
                productsList.push(this.eletronicProducts())
            }
            supplierList.push({
                supplier: supp,
                products: productsList
            })
        }
        return supplierList;
    }

    /**
    * return eletronico name, price and validate
    * @param {boolean} complete
    * @returns {Array<Object>}
    */
    pcProducts(complete = false) {
        let industryData = new IndustryData();
        let product = {
            product: RandomArrayElement.randomElement(MarketHelpers.pcMarket()),
            price: RandomArrayElement.randoNumberInNotFloor(1, 100).toFixed(2),
            date: DateHelpers.moreToday(),
        }
        complete ? product.supplier = industryData.fullEnterPrise('Informática') : null;
        return product;
    }

    /**
     * return a cellphone model string
     * @returns {string}
     */
    cellPhoneModel() {
        return RandomArrayElement.randomElement(MarketHelpers.cellPhone())
    }

    /**
     * return a single constrution item
     * @returns {string}
     */
    construction() {
        return RandomArrayElement.randomElement(MarketHelpers.construction())
    }

    /**
    * return Array of objetct of a eletronico by Suplier
    * @param {number} products 
    * @param {number} supplier 
    * @returns {Array<Object>}
    */
    generatepcProductsSupplier(products, supplier) {
        let industryData = new IndustryData();
        let supplierList = [];
        for (let i = 0; i < supplier; i++) {
            let supp = industryData.fullEnterPrise('Informática');
            let productsList = [];
            for (let j = 0; j < products; j++) {
                productsList.push(this.pcProducts())
            }
            supplierList.push({
                supplier: supp,
                products: productsList
            })
        }
        return supplierList;
    }


    /**
    * return eletronico name, price and validate
    * @param {boolean} complete
    * @returns {Array<Array>}
    */
    pc() {
        return RandomArrayElement.randomElement(MarketHelpers.pc())
    }


    /**
    * return eletronico name, price and validate
    * @param {boolean} complete
    * @returns {Array<Object>}
    */
    clothesProduct(complete = false) {
        let industryData = new IndustryData();
        let product = {
            product: RandomArrayElement.randomElement(MarketHelpers.clothes()),
            price: RandomArrayElement.randoNumberInNotFloor(1, 100).toFixed(2),
            gender: RandomArrayElement.randomElement(['M', 'F']),
            size: RandomArrayElement.randomElement(['PP', 'P', 'M', 'G', 'XG', 'XXG']),
            color: RandomArrayElement.randomElement(AutoHelpers.color()).nome,
            date: DateHelpers.moreToday(),
        }
        complete ? product.supplier = industryData.fullEnterPrise('Vestuário') : null;
        return product;
    }

    /**
    * return Array of objetct of a eletronico by Suplier
    * @param {number} products 
    * @param {number} supplier 
    * @returns {Array<Object>}
    */
    generateClothesProductsSupplier(products, supplier) {
        let industryData = new IndustryData();
        let supplierList = [];
        for (let i = 0; i < supplier; i++) {
            let supp = industryData.fullEnterPrise('Vestuário');
            let productsList = [];
            for (let j = 0; j < products; j++) {
                productsList.push(this.clothesProduct())
            }
            supplierList.push({
                supplier: supp,
                products: productsList
            })
        }
        return supplierList;
    }

}

module.exports = MarketData