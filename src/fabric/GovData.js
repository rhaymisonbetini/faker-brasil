'use strict'

const RandomArrayElement = require('../services/RandomArrayElement');
const GovHelpers = require('../helpers/GovHelpers');

class GovData {

    /**
    * return array of string with a any many reginal conuncil
    * @returns {Array<string>}
    */
    professionalCouncilList() {
        return GovHelpers.professionalCouncil();
    }

    /**
    * return a random name of a professional council.
    * ex: Advogados: Ordem dos Advogados do Brasil Nacional (OAB) e Ordem dos Advogados do Brasil Seccional (OAB do respectivo estado de atuação)",
    * @returns {string}
    */
    professionalCouncil() {
        return RandomArrayElement.randomElement(GovHelpers.professionalCouncil());
    }

    /**
     * This method try find a professional council by sigla.
     * ex: find OAB, CFED, CFESS, CFA.
     * You can try pass a part of sigla too: COREC ( of CORECON ) return the correct information, for example.
     * @param {string} sigla 
     * @returns {string}
     */
    professionalCouncilBySigla(sigla) {
        let pCs = GovHelpers.professionalCouncil();
        let find = pCs.find(element => element.includes(sigla));
        return find;
    }


    /**
    * return array of string with a superior court in Brazil
    * @returns {Array<string>}
    */
    superiorCourtList() {
        return GovHelpers.superiorCourt();
    }

    /**
    * return array of string with a superior court in Brazil
    * ex: "Supremo Tribunal Federal (STF)""
    * @returns {string}
    */
    superiorCourt() {
        return RandomArrayElement.randomElement(GovHelpers.superiorCourt());
    }

    /**
    * return array of string with a regional court in Brazil
    * @returns {Array<string>}
    */
    regionalCourtList() {
        return GovHelpers.regionalCourt();
    }

    /**
    * return array of string with a regional court in Brazil
    * ex: "Tribunal Regional Federal da 2ª Região (TRF2) (ES e RJ)""
    * @returns {string}
    */
    regionalCourt() {
        return RandomArrayElement.randomElement(GovHelpers.regionalCourt());
    }

    /**
    * return array of string with a justice court in Brazil
    * @returns {Array<string>}
    */
    justiceCourtList() {
        return GovHelpers.justiceCourt();
    }

    /**
    * return  string with a justice court in Brazil
    * ex: "Supremo Tribunal Federal (STF)"
    * @returns {string}
    */
    justiceCourt() {
        return RandomArrayElement.randomElement(GovHelpers.justiceCourt());
    }

    /**
    * return array of string with a electoral court in Brazil
    * @returns {Array<string>}
    */
    electoralCourtList() {
        return GovHelpers.electoraCourt();
    }

    /**
    * return  string with a electoral court in Brazil
    * ex: "Tribunal Regional Eleitoral do Acre"
    * @returns {string}
    */
    electoralCourt() {
        return RandomArrayElement.randomElement(GovHelpers.electoraCourt());
    }

    /**
    * return array of string with a worker court in Brazil
    * @returns {Array<string>}
    */
    workerCourtList() {
        return GovHelpers.workerCourt();
    }

    /**
    * return  string with a electoral court in Brazil
    * ex: "Tribunal Regional do Trabalho da 1ª Região (TRT1) (RJ)",
    * @returns {string}
    */
    workerCourt() {
        return RandomArrayElement.randomElement(GovHelpers.workerCourt());
    }

    /**
   * return  string with a military court in Brazil
   * @returns {Array<string>}
   */
    militaryCourtList() {
        return GovHelpers.militaryCourt();
    }

    /**
    * return string with a military court in Brazil
    * ex: "Tribunal Regional Eleitoral do Acre"
    * @returns {string}
    */
    militaryCourt() {
        return RandomArrayElement.randomElement(GovHelpers.militaryCourt());
    }

    /**
    * returns a string of a division of the chamber of deputies 
    * ex: "Tribunal Regional Eleitoral do Acre"
    * @returns {string}
    */
    ChamberOfDeputies() {
        return RandomArrayElement.randomElement(GovHelpers.ChamberOfDeputies());
    }

    /**
    * returns a string of a division of the federalSenate
    * ex: "Tribunal Regional Eleitoral do Acre"
    * @returns {string}
    */
    federalSenate() {
        return RandomArrayElement.randomElement(GovHelpers.federalSenate());
    }

    /**
    * returns a string of a division of the civil house
    * ex: "Subchefia Adjunta de Políticas Sociais"
    * @returns {string}
    */
    civilHouse() {
        return RandomArrayElement.randomElement(GovHelpers.civilHouse());
    }

    /**
    * returns a string of a division of the ministries
    * ex: "Agricultura e Pecuária"
    * @returns {string}
    */
    ministries() {
        return RandomArrayElement.randomElement(GovHelpers.ministries());
    }

}

module.exports = GovData