const MarketData = require('../fabric/MarketData');
const { it, expect } = require('@jest/globals');
let marketData = new MarketData();

describe('Teste for MarketData generator', () => {

    it('Espect to be a instace of a class', () => {
        expect(marketData).toBeInstanceOf(MarketData)
    })

    it('Get a radom market product', () => {
        let market = marketData.marketProduct();
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
    })

    it('Get a radom market product with suplier', () => {
        let market = marketData.marketProduct(true);
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
        expect(market).toHaveProperty('supplier');
        expect(Object.keys(market.supplier).length).toBeGreaterThan(0)
    })

    it('Get a radom suplier with products ', () => {
        let market = marketData.generateMarketBySupplier(2, true);
        expect(typeof market).toEqual('object');
        expect(market[0]).toHaveProperty('supplier');
        expect(market[0]).toHaveProperty('products');
        expect(market[0].products).toBeInstanceOf(Array);
        expect(market[0].products.length).toBeGreaterThan(0);
        expect(market[0].products.length).toEqual(2);
    })

    it('Get a radom drugstore product', () => {
        let market = marketData.marketProduct();
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
    })

    it('Get a radom drugstore product with suplier', () => {
        let market = marketData.drugStoreProducts(true);
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
        expect(market).toHaveProperty('supplier');
        expect(Object.keys(market.supplier).length).toBeGreaterThan(0)
    })

    it('Get a radom suplier with products ', () => {
        let market = marketData.generateDrugStoreBySupplier(2, true);
        expect(typeof market).toEqual('object');
        expect(market[0]).toHaveProperty('supplier');
        expect(market[0]).toHaveProperty('products');
        expect(market[0].products).toBeInstanceOf(Array);
        expect(market[0].products.length).toBeGreaterThan(0);
        expect(market[0].products.length).toEqual(2);
    })


    it('Get a radom eletronic product', () => {
        let market = marketData.eletronicProducts();
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
    })

    it('Get a radom eletronic product with suplier', () => {
        let market = marketData.eletronicProducts(true);
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
        expect(market).toHaveProperty('supplier');
        expect(Object.keys(market.supplier).length).toBeGreaterThan(0)
    })

    it('Get a radom eletronic with products ', () => {
        let market = marketData.generateEletronicSupplier(2, true);
        expect(typeof market).toEqual('object');
        expect(market[0]).toHaveProperty('supplier');
        expect(market[0]).toHaveProperty('products');
        expect(market[0].products).toBeInstanceOf(Array);
        expect(market[0].products.length).toBeGreaterThan(0);
        expect(market[0].products.length).toEqual(2);
    })

    it('Get a radom pc product', () => {
        let market = marketData.pcProducts();
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
    })

    it('Get a radom pc product with suplier', () => {
        let market = marketData.pcProducts(true);
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
        expect(market).toHaveProperty('supplier');
        expect(Object.keys(market.supplier).length).toBeGreaterThan(0)
    })


    it('Get a cellphoneModel', () => {
        let market = marketData.cellPhoneModel();
        expect(typeof market).toEqual('string');
        expect(market.length).toBeGreaterThan(0);
    })

    it('Get radom pc product with sipler', () => {
        let market = marketData.generatepcProductsSupplier(2, true);
        expect(typeof market).toEqual('object');
        expect(market[0]).toHaveProperty('supplier');
        expect(market[0]).toHaveProperty('products');
        expect(market[0].products).toBeInstanceOf(Array);
        expect(market[0].products.length).toBeGreaterThan(0);
        expect(market[0].products.length).toEqual(2);
    })

    it('Get a random pc config', () => {
        let market = marketData.pc();
        expect(typeof market).toEqual("object");
        expect(market.length).toBeGreaterThan(0);
    })

    it('get radom clothes product', () => {
        let market = marketData.clothesProduct();
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
        expect(market).toHaveProperty('gender');
        expect(market).toHaveProperty('size');
        expect(market).toHaveProperty('color');
    })

    it('get radom clothes product with suplier', () => {
        let market = marketData.clothesProduct(true);
        expect(typeof market).toEqual('object');
        expect(market).toHaveProperty('product');
        expect(market).toHaveProperty('price');
        expect(market).toHaveProperty('date');
        expect(market).toHaveProperty('gender');
        expect(market).toHaveProperty('size');
        expect(market).toHaveProperty('color');
        expect(Object.keys(market.supplier).length).toBeGreaterThan(0)
    })

    it('Get radom clothes product with sipler', () => {
        let market = marketData.generateClothesProductsSupplier(2, true);
        expect(typeof market).toEqual('object');
        expect(market[0]).toHaveProperty('supplier');
        expect(market[0]).toHaveProperty('products');
        expect(market[0].products).toBeInstanceOf(Array);
        expect(market[0].products.length).toBeGreaterThan(0);
        expect(market[0].products.length).toEqual(2);
    })

})