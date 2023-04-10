'use strict';

const GeoHelpers = require("../helpers/GeoHelpers");
const RandomArrayElement = require('../services/RandomArrayElement')

class GeoData {

    geoRandomBrCoordState(state = null) {

        let randomStateCoord = null;
        if (!state) {
            randomStateCoord = RandomArrayElement.randomElement(GeoHelpers.stateCoords());
        } else {
            let geoJson = GeoHelpers.stateCoords();
            randomStateCoord = geoJson.find(geo => geo.state.code == state);
        }

        if (!randomStateCoord) {
            return null;
        }

        let point1 = RandomArrayElement.randomElement(randomStateCoord.borders[0]);
        let point2 = RandomArrayElement.randomElement(randomStateCoord.borders[0]);

        let xM = this.calcMiddlePoint(point1.lat, point2.lat)
        let yM = this.calcMiddlePoint(point1.lng, point2.lng)

        if (xM != point1.lat && yM != point1.lng) {
            //In this point we can move by x and y to get random point and not always the middle
            return {
                state: randomStateCoord.state.code,
                xM: RandomArrayElement.superRandom(xM, xM - RandomArrayElement.randoNumberIn(-.0000000000050, .0000000500)),
                yM: RandomArrayElement.superRandom(yM, yM - RandomArrayElement.randoNumberIn(-.0000000000050, .0000000500))
            }
        } else {
            return {
                state: randomStateCoord.state.code,
                lat: xM,
                lng: yM
            }
        }
    }

    getRandomCoordsByCity(city = null) {
        let randomcityCoord = null;
        if (!city) {
            randomcityCoord = RandomArrayElement.randomElement(GeoHelpers.municipios());
        } else {
            let geoJson = GeoHelpers.municipios();
            randomcityCoord = geoJson.find(geo => geo.city.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") == city);
        }
        if (!randomcityCoord) {
            return null;
        }

        let point1 = RandomArrayElement.randomElement(randomcityCoord.borders[0]);
        let point2 = RandomArrayElement.randomElement(randomcityCoord.borders[0]);
        let xM = this.calcMiddlePoint(point1.lat, point2.lat)
        let yM = this.calcMiddlePoint(point1.lng, point2.lng)

        let point3 = RandomArrayElement.randomElement(randomcityCoord.borders[0]);
        let point4 = RandomArrayElement.randomElement(randomcityCoord.borders[0]);
        let xM2 = this.calcMiddlePoint(point3.lat, point4.lat)
        let yM2 = this.calcMiddlePoint(point3.lng, point4.lng)

        let xf = this.calcMiddlePoint(xM, xM2)
        let yf = this.calcMiddlePoint(yM, yM2)

        return {
            state: randomcityCoord.city.state,
            city: randomcityCoord.city.name,
            lat: xf,
            lng: yf
        }
    }

    calcMiddlePoint(n1, n2) {
        return (n1 + n2) / 2
    }

}

module.exports = GeoData;