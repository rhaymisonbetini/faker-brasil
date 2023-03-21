'use strict'
var pseudoRandom = Math.random;
var visaPrefixList = new Array(
    "4539",
    "4556",
    "4916",
    "4532",
    "4929",
    "40240071",
    "4485",
    "4716",
    "4"
);
var mastercardPrefixList = new Array(
    "51",
    "52",
    "53",
    "54",
    "55"
);
var amexPrefixList = new Array(
    "34",
    "37"
);
var discoverPrefixList = new Array("6011");
var dinersPrefixList = new Array(
    "300",
    "301",
    "302",
    "303",
    "36",
    "38"
);
var enRoutePrefixList = new Array(
    "2014",
    "2149"
);
var jcbPrefixList = new Array(
    "35"
);
var voyagerPrefixList = new Array("8699");

const Schemes = {
    "VISA": {
        prefixList: visaPrefixList,
        digitCount: 16
    },
    "MasterCard": {
        prefixList: mastercardPrefixList,
        digitCount: 16
    },
    "Amex": {
        prefixList: amexPrefixList,
        digitCount: 15
    },
    "Diners": {
        prefixList: dinersPrefixList,
        digitCount: 16
    },
    "Discover": {
        prefixList: discoverPrefixList,
        digitCount: 16
    },
    "EnRoute": {
        prefixList: enRoutePrefixList,
        digitCount: 16
    },
    "JCB": {
        prefixList: jcbPrefixList,
        digitCount: 16
    },
    "Voyager": {
        prefixList: voyagerPrefixList,
        digitCount: 16
    }
}

class BankHelpers {

    /**
   * The entry-point function
   * @param {String} CardScheme  The Card Scheme
   * @param {Number} [howMany]   Defaults to 1
   * @return {String}
   */
    static generateCredCardNumber(CardScheme = null, howMany = null) {
        var amount = howMany || 1;
        // Try to get configs to the selected Scheme
        let number = ''
        if (typeof Schemes[CardScheme] != 'undefined') {
            number = this.credCardNumber(
                Schemes[CardScheme].prefixList,
                Schemes[CardScheme].digitCount,
                amount
            );
        }
        else { // Defaults to MasterCard
            number = this.credCardNumber(
                Schemes["MasterCard"].prefixList,
                Schemes["MasterCard"].digitCount,
                amount
            );
        }

        let p1 = number[0].slice(0,4);
        let p2 = number[0].slice(4,8);
        let p3 = number[0].slice(8,12);
        let p4 = number[0].slice(12,16);

        return `${p1} ${p2} ${p3} ${p4}`

    }

    /**
    * Revert a String
    * @param  {String} str
    * @return {String}
    */
    static strrev(str) {
        if (!str) return '';
        var revstr = '';
        for (var i = str.length - 1; i >= 0; i--)
            revstr += str.charAt(i)
        return revstr;
    }

    /**
     * Complete a prefixed number-string
     * @param  {String} prefix  is the start of the CC number as a string, any number of digits
     * @param  {Number} length  is the length of the CC number to generate. Typically 13 or 16
     * @return {String}
     */
    static completedNumber(prefix, length) {

        var ccnumber = prefix;

        // generate digits

        while (ccnumber.length < (length - 1)) {
            ccnumber += Math.floor(pseudoRandom() * 10);
        }

        // reverse number and convert to int

        var reversedCCnumberString = this.strrev(ccnumber);

        var reversedCCnumber = new Array();
        for (var i = 0; i < reversedCCnumberString.length; i++) {
            reversedCCnumber[i] = parseInt(reversedCCnumberString.charAt(i));
        }

        // calculate sum

        var sum = 0;
        var pos = 0;

        while (pos < length - 1) {

            var odd = reversedCCnumber[pos] * 2;
            if (odd > 9) {
                odd -= 9;
            }

            sum += odd;

            if (pos != (length - 2)) {

                sum += reversedCCnumber[pos + 1];
            }
            pos += 2;
        }

        // calculate check digit

        var checkdigit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
        ccnumber += checkdigit;

        return ccnumber;

    }

    /**
     * Actually generate a credit card number
     * @param  {[type]} prefixList [description]
     * @param  {[type]} length     [description]
     * @param  {[type]} howMany    [description]
     * @return {[type]}            [description]
     */
    static credCardNumber(prefixList, length, howMany) {

        var result = new Array();
        for (var i = 0; i < howMany; i++) {

            var randomArrayIndex = Math.floor(pseudoRandom() * prefixList.length);
            var ccnumber = prefixList[randomArrayIndex];
            result.push(this.completedNumber(ccnumber, length));
        }

        return result;
    }

    /**
     * return array of backs types
     * @returns {Array<Objext>}
     */
    static types() {
        return ['CORRENTE', 'PJ', 'POUPANÇA', 'CONJUNTA']
    }

    /**
     * return array of backs
     * @returns {Array<Objext>}
     */
    static banks() {
        return [
            {
                "code": "001",
                "name": "BANCO DO BRASIL",
            },
            {
                "code": "341",
                "name": "ITAÚ",
            },
            {
                "code": "104",
                "name": "CAIXA ECONÔMICA FEDERAL",
            },
            {
                "code": "033",
                "name": "BANCO SANTANDER S.A.",
            },
            {
                "code": "070",
                "name": "BRB - BANCO DE BRASÍLIA",
            },
            {
                "code": "077",
                "name": "BANCO INTER",
            },
            {
                "code": "237",
                "name": "BRADESCO",
            },
            {
                "code": "745",
                "name": "CITIBANK",
            },
            {
                "code": "422",
                "name": "BANCO SAFRA",
            },
            {
                "code": "399",
                "name": "BANCO HSBC",
            },
            {
                "code": "756",
                "name": "BANCOOB",
            },
            {
                "code": "212",
                "name": "BANCO ORIGINAL",
            },
            {
                "code": "002",
                "name": "BANCO CENTRAL DO BRASIL",
            },
            {
                "code": "003",
                "name": "BANCO DA AMAZONIA S.A",
            },
            {
                "code": "004",
                "name": "BANCO DO NORDESTE DO BRASIL S.A",
            },
            {
                "code": "007",
                "name": "BANCO NAC DESENV. ECO. SOCIAL S.A",
            },
            {
                "code": "008",
                "name": "BANCO MERIDIONAL DO BRASIL",
            },
            {
                "code": "020",
                "name": "BANCO DO ESTADO DE ALAGOAS S.A",
            },
            {
                "code": "021",
                "name": "BANCO DO ESTADO DO ESPIRITO SANTO S.A",
            },
            {
                "code": "022",
                "name": "BANCO DE CREDITO REAL DE MINAS GERAIS SA",
            },
            {
                "code": "024",
                "name": "BANCO DO ESTADO DE PERNAMBUCO",
            },
            {
                "code": "025",
                "name": "BANCO ALFA S/A",
            },
            {
                "code": "026",
                "name": "BANCO DO ESTADO DO ACRE S.A",
            },
            {
                "code": "027",
                "name": "BANCO DO ESTADO DE SANTA CATARINA S.A",
            },
            {
                "code": "028",
                "name": "BANCO DO ESTADO DA BAHIA S.A",
            },
            {
                "code": "029",
                "name": "BANCO DO ESTADO DO RIO DE JANEIRO S.A",
            },
            {
                "code": "030",
                "name": "BANCO DO ESTADO DA PARAIBA S.A",
            },
            {
                "code": "031",
                "name": "BANCO DO ESTADO DE GOIAS S.A",
            },
            {
                "code": "032",
                "name": "BANCO DO ESTADO DO MATO GROSSO S.A.",
            },
            {
                "code": "034",
                "name": "BANCO DO ESADO DO AMAZONAS S.A",
            },
            {
                "code": "035",
                "name": "BANCO DO ESTADO DO CEARA S.A",
            },
            {
                "code": "036",
                "name": "BANCO DO ESTADO DO MARANHAO S.A",
            },
            {
                "code": "037",
                "name": "BANCO DO ESTADO DO PARA S.A",
            },
            {
                "code": "038",
                "name": "BANCO DO ESTADO DO PARANA S.A",
            },
            {
                "code": "039",
                "name": "BANCO DO ESTADO DO PIAUI S.A",
            },
            {
                "code": "041",
                "name": "BANCO DO ESTADO DO RIO GRANDE DO SUL S.A",
            },
            {
                "code": "047",
                "name": "BANCO DO ESTADO DE SERGIPE S.A",
            },
            {
                "code": "048",
                "name": "BANCO DO ESTADO DE MINAS GERAIS S.A",
            },
            {
                "code": "059",
                "name": "BANCO DO ESTADO DE RONDONIA S.A",
            },
            {
                "code": "106",
                "name": "BANCO ITABANCO S.A.",
            },
            {
                "code": "107",
                "name": "BANCO BBM S.A",
            },
            {
                "code": "109",
                "name": "BANCO CREDIBANCO S.A",
            },
            {
                "code": "116",
                "name": "BANCO B.N.L DO BRASIL S.A",
            },
            {
                "code": "148",
                "name": "MULTI BANCO S.A",
            },
            {
                "code": "151",
                "name": "CAIXA ECONOMICA DO ESTADO DE SAO PAULO",
            },
            {
                "code": "153",
                "name": "CAIXA ECONOMICA DO ESTADO DO R.G.SUL",
            },
            {
                "code": "165",
                "name": "BANCO NORCHEM S.A",
            },
            {
                "code": "166",
                "name": "BANCO INTER-ATLANTICO S.A",
            },
            {
                "code": "168",
                "name": "BANCO C.C.F. BRASIL S.A",
            },
            {
                "code": "175",
                "name": "CONTINENTAL BANCO S.A",
            },
            {
                "code": "184",
                "name": "BBA - CREDITANSTALT S.A",
            },
            {
                "code": "199",
                "name": "BANCO FINANCIAL PORTUGUES",
            },
            {
                "code": "200",
                "name": "BANCO FRICRISA AXELRUD S.A",
            },
            {
                "code": "201",
                "name": "BANCO AUGUSTA INDUSTRIA E COMERCIAL S.A",
            },
            {
                "code": "204",
                "name": "BANCO S.R.L S.A",
            },
            {
                "code": "205",
                "name": "BANCO SUL AMERICA S.A",
            },
            {
                "code": "206",
                "name": "BANCO MARTINELLI S.A",
            },
            {
                "code": "208",
                "name": "BANCO PACTUAL S.A",
            },
            {
                "code": "210",
                "name": "DEUTSCH SUDAMERIKANICHE BANK AG",
            },
            {
                "code": "211",
                "name": "BANCO SISTEMA S.A",
            },
            {
                "code": "213",
                "name": "BANCO ARBI S.A",
            },
            {
                "code": "214",
                "name": "BANCO DIBENS S.A",
            },
            {
                "code": "215",
                "name": "BANCO AMERICA DO SUL S.A",
            },
            {
                "code": "216",
                "name": "BANCO REGIONAL MALCON S.A",
            },
            {
                "code": "217",
                "name": "BANCO AGROINVEST S.A",
            },
            {
                "code": "218",
                "name": "BS2",
            },
            {
                "code": "219",
                "name": "BANCO DE CREDITO DE SAO PAULO S.A",
            },
            {
                "code": "220",
                "name": "BANCO CREFISUL",
            },
            {
                "code": "221",
                "name": "BANCO GRAPHUS S.A",
            },
            {
                "code": "222",
                "name": "BANCO AGF BRASIL S. A.",
            },
            {
                "code": "223",
                "name": "BANCO INTERUNION S.A",
            },
            {
                "code": "224",
                "name": "BANCO FIBRA S.A",
            },
            {
                "code": "225",
                "name": "BANCO BRASCAN S.A",
            },
            {
                "code": "228",
                "name": "BANCO ICATU S.A",
            },
            {
                "code": "229",
                "name": "BANCO CRUZEIRO S.A",
            },
            {
                "code": "230",
                "name": "BANCO BANDEIRANTES S.A",
            },
            {
                "code": "231",
                "name": "BANCO BOAVISTA S.A",
            },
            {
                "code": "232",
                "name": "BANCO INTERPART S.A",
            },
            {
                "code": "233",
                "name": "BANCO MAPPIN S.A",
            },
            {
                "code": "234",
                "name": "BANCO LAVRA S.A.",
            },
            {
                "code": "235",
                "name": "BANCO LIBERAL S.A",
            },
            {
                "code": "236",
                "name": "BANCO CAMBIAL S.A",
            },
            {
                "code": "239",
                "name": "BANCO BANCRED S.A",
            },
            {
                "code": "240",
                "name": "BANCO DE CREDITO REAL DE MINAS GERAIS S.",
            },
            {
                "code": "241",
                "name": "BANCO CLASSICO S.A",
            },
            {
                "code": "242",
                "name": "BANCO EUROINVEST S.A",
            },
            {
                "code": "243",
                "name": "BANCO MÁXIMA S.A",
            },
            {
                "code": "244",
                "name": "BANCO CIDADE S.A",
            },
            {
                "code": "245",
                "name": "BANCO EMPRESARIAL S.A",
            },
            {
                "code": "246",
                "name": "BANCO ABC ROMA S.A",
            },
            {
                "code": "247",
                "name": "BANCO OMEGA S.A",
            },
            {
                "code": "249",
                "name": "BANCO INVESTCRED S.A",
            },
            {
                "code": "250",
                "name": "BANCO SCHAHIN CURY S.A",
            },
            {
                "code": "251",
                "name": "BANCO SAO JORGE S.A.",
            },
            {
                "code": "252",
                "name": "BANCO FININVEST S.A",
            },
            {
                "code": "254",
                "name": "BANCO PARANA BANCO S.A",
            },
            {
                "code": "255",
                "name": "MILBANCO S.A.",
            },
            {
                "code": "256",
                "name": "BANCO GULVINVEST S.A",
            },
            {
                "code": "258",
                "name": "BANCO INDUSCRED S.A",
            },
            {
                "code": "261",
                "name": "BANCO VARIG S.A",
            },
            {
                "code": "262",
                "name": "BANCO BOREAL S.A",
            },
            {
                "code": "263",
                "name": "BANCO CACIQUE",
            },
            {
                "code": "264",
                "name": "BANCO PERFORMANCE S.A",
            },
            {
                "code": "265",
                "name": "BANCO FATOR S.A",
            },
            {
                "code": "266",
                "name": "BANCO CEDULA S.A",
            },
            {
                "code": "267",
                "name": "BANCO BBM-COM.C.IMOB.CFI S.A.",
            },
            {
                "code": "275",
                "name": "BANCO REAL S.A",
            },
            {
                "code": "277",
                "name": "BANCO PLANIBANC S.A",
            },
            {
                "code": "282",
                "name": "BANCO BRASILEIRO COMERCIAL",
            },
            {
                "code": "291",
                "name": "BANCO DE CREDITO NACIONAL S.A",
            },
            {
                "code": "294",
                "name": "BCR - BANCO DE CREDITO REAL S.A",
            },
            {
                "code": "295",
                "name": "BANCO CREDIPLAN S.A",
            },
            {
                "code": "300",
                "name": "BANCO DE LA NACION ARGENTINA S.A",
            },
            {
                "code": "302",
                "name": "BANCO DO PROGRESSO S.A",
            },
            {
                "code": "303",
                "name": "BANCO HNF S.A.",
            },
            {
                "code": "304",
                "name": "BANCO PONTUAL S.A",
            },
            {
                "code": "308",
                "name": "BANCO COMERCIAL BANCESA S.A.",
            },
            {
                "code": "318",
                "name": "BANCO B.M.G. S.A",
            },
            {
                "code": "320",
                "name": "BANCO INDUSTRIAL E COMERCIAL",
            },
            {
                "code": "346",
                "name": "BANCO FRANCES E BRASILEIRO S.A",
            },
            {
                "code": "347",
                "name": "BANCO SUDAMERIS BRASIL S.A",
            },
            {
                "code": "351",
                "name": "BANCO BOZANO SIMONSEN S.A",
            },
            {
                "code": "353",
                "name": "BANCO GERAL DO COMERCIO S.A",
            },
            {
                "code": "356",
                "name": "ABN AMRO S.A",
            },
            {
                "code": "366",
                "name": "BANCO SOGERAL S.A",
            },
            {
                "code": "369",
                "name": "PONTUAL",
            },
            {
                "code": "370",
                "name": "BEAL - BANCO EUROPEU PARA AMERICA LATINA",
            },
            {
                "code": "372",
                "name": "BANCO ITAMARATI S.A",
            },
            {
                "code": "375",
                "name": "BANCO FENICIA S.A",
            },
            {
                "code": "376",
                "name": "CHASE MANHATTAN BANK S.A",
            },
            {
                "code": "388",
                "name": "BANCO MERCANTIL DE DESCONTOS S/A",
            },
            {
                "code": "389",
                "name": "BANCO MERCANTIL DO BRASIL S.A",
            },
            {
                "code": "392",
                "name": "BANCO MERCANTIL DE SAO PAULO S.A",
            },
            {
                "code": "394",
                "name": "BANCO B.M.C. S.A",
            },
            {
                "code": "409",
                "name": "UNIBANCO - UNIAO DOS BANCOS BRASILEIROS",
            },
            {
                "code": "412",
                "name": "BANCO NACIONAL DA BAHIA S.A",
            },
            {
                "code": "415",
                "name": "BANCO NACIONAL S.A",
            },
            {
                "code": "420",
                "name": "BANCO NACIONAL DO NORTE S.A",
            },
            {
                "code": "424",
                "name": "BANCO NOROESTE S.A",
            },
            {
                "code": "434",
                "name": "BANCO FORTALEZA S.A",
            },
            {
                "code": "453",
                "name": "BANCO RURAL S.A",
            },
            {
                "code": "456",
                "name": "BANCO TOKIO S.A",
            },
            {
                "code": "464",
                "name": "BANCO SUMITOMO BRASILEIRO S.A",
            },
            {
                "code": "466",
                "name": "BANCO MITSUBISHI BRASILEIRO S.A",
            },
            {
                "code": "472",
                "name": "LLOYDS BANK PLC",
            },
            {
                "code": "473",
                "name": "BANCO FINANCIAL PORTUGUES S.A",
            },
            {
                "code": "477",
                "name": "CITIBANK N.A",
            },
            {
                "code": "479",
                "name": "BANCO DE BOSTON S.A",
            },
            {
                "code": "480",
                "name": "BANCO PORTUGUES DO ATLANTICO-BRASIL S.A",
            },
            {
                "code": "483",
                "name": "BANCO AGRIMISA S.A.",
            },
            {
                "code": "487",
                "name": "DEUTSCHE BANK S.A - BANCO ALEMAO",
            },
            {
                "code": "488",
                "name": "BANCO J. P. MORGAN S.A",
            },
            {
                "code": "489",
                "name": "BANESTO BANCO URUGAUAY S.A",
            },
            {
                "code": "492",
                "name": "INTERNATIONALE NEDERLANDEN BANK N.V.",
            },
            {
                "code": "493",
                "name": "BANCO UNION S.A.C.A",
            },
            {
                "code": "494",
                "name": "BANCO LA REP. ORIENTAL DEL URUGUAY",
            },
            {
                "code": "495",
                "name": "BANCO LA PROVINCIA DE BUENOS AIRES",
            },
            {
                "code": "496",
                "name": "BANCO EXTERIOR DE ESPANA S.A",
            },
            {
                "code": "498",
                "name": "CENTRO HISPANO BANCO",
            },
            {
                "code": "499",
                "name": "BANCO IOCHPE S.A",
            },
            {
                "code": "501",
                "name": "BANCO BRASILEIRO IRAQUIANO S.A.",
            },
            {
                "code": "502",
                "name": "BANCO SANTANDER DE NEGOCIOS S.A",
            },
            {
                "code": "504",
                "name": "BANCO MULTIPLIC S.A",
            },
            {
                "code": "505",
                "name": "BANCO GARANTIA S.A",
            },
            {
                "code": "600",
                "name": "BANCO LUSO BRASILEIRO S.A",
            },
            {
                "code": "601",
                "name": "BFC BANCO S.A.",
            },
            {
                "code": "602",
                "name": "BANCO PATENTE S.A",
            },
            {
                "code": "604",
                "name": "BANCO INDUSTRIAL DO BRASIL S.A",
            },
            {
                "code": "607",
                "name": "BANCO SANTOS NEVES S.A",
            },
            {
                "code": "608",
                "name": "BANCO OPEN S.A",
            },
            {
                "code": "610",
                "name": "BANCO V.R. S.A",
            },
            {
                "code": "611",
                "name": "BANCO PAULISTA S.A",
            },
            {
                "code": "612",
                "name": "BANCO GUANABARA S.A",
            },
            {
                "code": "613",
                "name": "BANCO PECUNIA S.A",
            },
            {
                "code": "616",
                "name": "BANCO INTERPACIFICO S.A",
            },
            {
                "code": "617",
                "name": "BANCO INVESTOR S.A.",
            },
            {
                "code": "618",
                "name": "BANCO TENDENCIA S.A",
            },
            {
                "code": "621",
                "name": "BANCO APLICAP S.A.",
            },
            {
                "code": "622",
                "name": "BANCO DRACMA S.A",
            },
            {
                "code": "623",
                "name": "BANCO PAnAMERICANO S.A",
            },
            {
                "code": "624",
                "name": "BANCO GENERAL MOTORS S.A",
            },
            {
                "code": "625",
                "name": "BANCO ARAUCARIA S.A",
            },
            {
                "code": "626",
                "name": "BANCO FICSA S.A",
            },
            {
                "code": "627",
                "name": "BANCO DESTAK S.A",
            },
            {
                "code": "628",
                "name": "BANCO CRITERIUM S.A",
            },
            {
                "code": "629",
                "name": "BANCORP BANCO COML. E. DE INVESTMENTO",
            },
            {
                "code": "630",
                "name": "BANCO INTERCAP S.A",
            },
            {
                "code": "633",
                "name": "BANCO REDIMENTO S.A",
            },
            {
                "code": "634",
                "name": "BANCO TRIANGULO S.A",
            },
            {
                "code": "635",
                "name": "BANCO DO ESTADO DO AMAPA S.A",
            },
            {
                "code": "637",
                "name": "BANCO SOFISA S.A",
            },
            {
                "code": "638",
                "name": "BANCO PROSPER S.A",
            },
            {
                "code": "639",
                "name": "BIG S.A. - BANCO IRMAOS GUIMARAES",
            },
            {
                "code": "640",
                "name": "BANCO DE CREDITO METROPOLITANO S.A",
            },
            {
                "code": "641",
                "name": "BANCO EXCEL ECONOMICO S/A",
            },
            {
                "code": "643",
                "name": "BANCO SEGMENTO S.A",
            },
            {
                "code": "645",
                "name": "BANCO DO ESTADO DE RORAIMA S.A",
            },
            {
                "code": "647",
                "name": "BANCO MARKA S.A",
            },
            {
                "code": "648",
                "name": "BANCO ATLANTIS S.A",
            },
            {
                "code": "649",
                "name": "BANCO DIMENSAO S.A",
            },
            {
                "code": "650",
                "name": "BANCO PEBB S.A",
            },
            {
                "code": "652",
                "name": "BANCO FRANCES E BRASILEIRO SA",
            },
            {
                "code": "653",
                "name": "BANCO INDUSVAL S.A",
            },
            {
                "code": "654",
                "name": "BANCO A. J. RENNER S.A",
            },
            {
                "code": "655",
                "name": "BANCO VOTORANTIM S.A.",
            },
            {
                "code": "656",
                "name": "BANCO MATRIX S.A",
            },
            {
                "code": "657",
                "name": "BANCO TECNICORP S.A",
            },
            {
                "code": "658",
                "name": "BANCO PORTO REAL S.A",
            },
            {
                "code": "702",
                "name": "BANCO SANTOS S.A",
            },
            {
                "code": "705",
                "name": "BANCO INVESTCORP S.A.",
            },
            {
                "code": "707",
                "name": "BANCO DAYCOVAL S.A",
            },
            {
                "code": "711",
                "name": "BANCO VETOR S.A.",
            },
            {
                "code": "713",
                "name": "BANCO CINDAM S.A",
            },
            {
                "code": "715",
                "name": "BANCO VEGA S.A",
            },
            {
                "code": "718",
                "name": "BANCO OPERADOR S.A",
            },
            {
                "code": "719",
                "name": "BANCO PRIMUS S.A",
            },
            {
                "code": "720",
                "name": "BANCO MAXINVEST S.A",
            },
            {
                "code": "721",
                "name": "BANCO CREDIBEL S.A",
            },
            {
                "code": "722",
                "name": "BANCO INTERIOR DE SAO PAULO S.A",
            },
            {
                "code": "724",
                "name": "BANCO PORTO SEGURO S.A",
            },
            {
                "code": "725",
                "name": "BANCO FINABANCO S.A",
            },
            {
                "code": "726",
                "name": "BANCO UNIVERSAL S.A",
            },
            {
                "code": "728",
                "name": "BANCO FITAL S.A",
            },
            {
                "code": "729",
                "name": "BANCO FONTE S.A",
            },
            {
                "code": "730",
                "name": "BANCO COMERCIAL PARAGUAYO S.A",
            },
            {
                "code": "731",
                "name": "BANCO GNPP S.A.",
            },
            {
                "code": "732",
                "name": "BANCO PREMIER S.A.",
            },
            {
                "code": "733",
                "name": "BANCO NACOES S.A.",
            },
            {
                "code": "734",
                "name": "BANCO GERDAU S.A",
            },
            {
                "code": "735",
                "name": "BANCO NEON",
            },
            {
                "code": "736",
                "name": "BANCO UNITED S.A",
            },
            {
                "code": "737",
                "name": "THECA",
            },
            {
                "code": "738",
                "name": "MARADA",
            },
            {
                "code": "739",
                "name": "BGN",
            },
            {
                "code": "740",
                "name": "BCN BARCLAYS",
            },
            {
                "code": "741",
                "name": "BRP",
            },
            {
                "code": "742",
                "name": "EQUATORIAL",
            },
            {
                "code": "743",
                "name": "BANCO EMBLEMA S.A",
            },
            {
                "code": "744",
                "name": "THE FIRST NATIONAL BANK OF BOSTON",
            },
            {
                "code": "746",
                "name": "MODAL S.A.",
            },
            {
                "code": "747",
                "name": "RABOBANK DO BRASIL",
            },
            {
                "code": "748",
                "name": "SICREDI",
            },
            {
                "code": "749",
                "name": "BRMSANTIL SA",
            },
            {
                "code": "750",
                "name": "BANCO REPUBLIC NATIONAL OF NEW YORK (BRA",
            },
            {
                "code": "751",
                "name": "DRESDNER BANK LATEInAMERIKA-BRASIL S/A",
            },
            {
                "code": "752",
                "name": "BANCO BANQUE NATIONALE DE PARIS BRASIL S",
            },
            {
                "code": "753",
                "name": "BANCO COMERCIAL URUGUAI S.A.",
            },
            {
                "code": "755",
                "name": "BANCO MERRILL LYNCH S.A",
            },
            {
                "code": "757",
                "name": "BANCO KEB DO BRASIL S.A.",
            },
            {
                "code": "260",
                "name": "Nu Pagamentos S.A",
            },
            {
                "code": "102",
                "name": "XP INVESTIMENTOS",
            },
            {
                "code": "336",
                "name": "BANCO C6 S.A.",
            },
            {
                "code": "290",
                "name": "PagSeguro Internet S.A.",
            },
            {
                "code": "323",
                "name": "MercadoPago.com Representações Ltda.",
            },
            {
                "code": "332",
                "name": "Acesso Soluções de Pagamento S.A.",
            },
            {
                "code": "325",
                "name": "Órama DTVM S.A.",
            },
            {
                "code": "85",
                "name": "COOPERATIVA CENTRAL DE CREDITO - AILOS",
            },
            {
                "code": "125",
                "name": "PLURAL S.A. BANCO MULTIPLO",
            },
            {
                "code": "197",
                "name": "STONE PAGAMENTOS S.A.",
            }
        ]
    }
}

module.exports = BankHelpers