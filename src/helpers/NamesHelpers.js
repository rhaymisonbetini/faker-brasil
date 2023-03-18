'use strict'

class NamesHelpers {

    /**
    * get number module
    * @param {number} dividendo - int
    * @param {number} divisor - int
    * @return {number} int
    */
    static getModulo(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }

    static getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * generate  random number
     * @param {number} total - integer 
     * @return {array} array
     */
    static getRandomNumbers(total) {
        let numbers = [];
        for (let i = 0; i < total; i++) {
            numbers[i] = this.getRandomNumberBetween(1, 9);
        }
        return numbers;
    }

    /**
     * generate verificator
     * @param {array} numeros - array numeros
     * @return {number} int
     */
    static getVerifyDigit(numeros = []) {
        let digito = 0;
        let arraySize = numeros.length + 1;

        numeros.map((numero, index) => {
            digito += numero * (arraySize - index);
        });

        digito = 11 - (this.getModulo(digito, 11));
        return digito >= 10 ? 0 : digito;
    }

    /**
     * generate cpf number
     * @param {boolean} points 
     * @return {string} string - 11 digits
     */
    static generateCpfFake(points) {
        let number = this.getRandomNumbers(9);
        number.push(this.getVerifyDigit(number));
        number.push(this.getVerifyDigit(number));
        number = number.join('');
        if (points) {
            let first = number.slice(0, 3);
            let second = number.slice(3, 6);
            let third = number.slice(6, 9);
            let final = number.slice(9, 12);
            number = `${first}.${second}.${third}-${final}`
        }
        return number;
    }

    /**
     * generate cpf number
     * @return {string} string 
     */
    static geneateRG() {
        var num_ = 12;
        var aux1 = new Array(num_);
        aux1[0] = '483710027';
        aux1[1] = '165980187';
        aux1[2] = '438133018';
        aux1[3] = '468238992';
        aux1[4] = '110336793';
        aux1[5] = '389773645';
        aux1[6] = '338627017';
        aux1[7] = '294854459';
        aux1[8] = '337310026';
        aux1[9] = '429085072';
        aux1[10] = '271117813';
        aux1[11] = '348280683';
        aux1[12] = '467466269';
        return aux1[Math.round(Math.random() * num_)];
    }

    /**
     * generate email 
     * @param {string} email 
     * @return {string} String 
     */
    static generateEmail(email) {
        return `${email}@mail.com.br`.replace(/ /g, '');
    }

    /**
     * generate workcard 
     * @param {bool} points 
     * @return String 
     */
    static generateWorkCard(points) {
        let numbers = this.getRandomNumbers(11);
        numbers = numbers.join('');
        if (points) {
            var first = numbers.slice(0, 3);
            var second = numbers.slice(3, 8);
            var third = numbers.slice(8, 10);
            var final = numbers.slice(10, 11);
            numbers = `${first}.${second}.${third}-${final}`
        }
        return numbers;
    }

    /**
    * generate passport 
    * @param {string} inital
    * @return {string} string 
    */
    static generatePassport(inital) {
        let numbers = this.getRandomNumbers(6);
        return `${inital}${numbers.join('')}`;
    }

    /**
     * generate phone number with prefix or string
     * @param {string} ddd 
     * @param {string} prefix 
     * @param {bool} mask 
     * @returns {string} string
     */
    static generatePhone(ddd, prefix, mask) {
        let phone = parseInt(Math.random() * 1000000, 10).toString()
        if (mask) {
            let first = phone.slice(0, 2)
            let second = phone.slice(2, 6)
            phone = '(' + ddd + ') ' + '33' + first + '-' + second
        } else {
            phone = ddd + '33' + phone;
        }
        return prefix ? '+55 ' + phone : phone;
    }

    /**
    * generate phone number with prefix or string
    * @param {string} ddd 
    * @param {string} prefix 
    * @param {bool} mask 
    * @returns {string} string
    */
    static generateCellphone(ddd, prefix, mask) {
        let cellPhone = parseInt(Math.random() * 10000000, 10).toString()
        if (mask) {
            let first = cellPhone.slice(0, 2)
            let second = cellPhone.slice(2, 6)
            cellPhone = '(' + ddd + ') ' + '9' + first + '-' + second
        } else {
            cellPhone = ddd + '9' + cellPhone;
        }
        return prefix ? '+55 ' + cellPhone : cellPhone;
    }

    /**
     * this function return a array of simples names
     * @returns {Array}
     */
    static getSimpleNames() {
        return ["Helena", "Miguel"
            , "Alice", "Arthur"
            , "Laura", "Heitor"
            , "Manuela", "Bernardo"
            , "Valentina", "Davi"
            , "Sophia", "Théo"
            , "Isabella", "Lorenzo"
            , "Heloísa", "Gabriel"
            , "Luiza", "Pedro"
            , "Júlia", "Benjamin"
            , "Lorena", "Matheus"
            , "Lívia", "Lucas"
            , "Maria Luiza", "Nicolas"
            , "Cecília", "Joaquim"
            , "Eloá", "Samuel"
            , "Giovanna", "Henrique"
            , "Maria Clara", "Rafael"
            , "Maria Eduarda", "Guilherme"
            , "Mariana", "Enzo"
            , "Lara", "Murilo"
            , "Beatriz", "Benício"
            , "Antonella", "Gustavo"
            , "Maria Júlia", "Isaac"
            , "Emanuelly", "João Miguel"
            , "Isadora", "Lucca"
            , "Ana Clara", "Enzo Gabriel"
            , "Melissa", "Pedro Henrique"
            , "Ana Luiza", "Felipe"
            , "Ana Júlia", "João Pedro"
            , "Esther", "Pietro"
            , "Lavínia", "Anthony"
            , "Maitê", "Daniel"
            , "Maria Cecília", "Bryan"
            , "Maria Alice", "Davi Lucca"
            , "Sarah", "Leonardo"
            , "Elisa", "Vicente"
            , "Liz", "Eduardo"
            , "Yasmin", "Gael"
            , "Isabelly", "Antônio"
            , "Alícia", "Vitor"
            , "Clara", "Noah"
            , "Isis", "Caio"
            , "Rebeca", "João"
            , "Rafaela", "Emanuel"
            , "Marina", "Cauã"
            , "Ana Laura", "João Lucas"
            , "Maria Helena", "Calebe"
            , "Agatha", "Enrico"
            , "Gabriela", "Vinícius"
            , "Catarina", "Bento"]
    }

    /**
    * this function return a array of lastname
    * @returns {Array}
    */
    static getLastName() {
        return [
            "Agrisi",
            "Merisio",
            "Agrizi",
            "AgriziNeto",
            "Agrizzi",
            "AgrizziPckardt",
            "AgrizziPckardt",
            "Agrizzi",
            "Vaa",
            "Almon",
            "Vaa",
            "Aguar",
            "Aiette",
            "Aiette",
            "alo",
            "Airoso",
            "Akchi",
            "Aláza",
            "Aa",
            "Aani",
            "Aberco",
            "Aberaz",
            "Aberto",
            "Abino",
            "Abuquerque",
            "Aanta",
            "Bellè",
            "Bellon",
            "Bernbé",
            "Betini",
            "Brito",
            "Butler",
            "Bceti",
            "Bchetti",
            "Baaró",
            "Badr",
            "Baiense",
            "Baana",
            "Baarini",
            "Baldo",
            "Baldotto",
            "Balestre",
            "Balaa",
            "Balarini",
            "Bandeia",
            "Banhos",
            "Pereia",
            "Baptisa",
            "Baquete",
            "Baazzuol",
            "Baato",
            "Baboa",
            "Baboa",
            "Sila",
            "Baboa",
            "Bacellos",
            "Bacelos",
            "Barnbe",
            "Baro",
            "Barone",
            "Barazuol",
            "Barazzuol",
            "Barreia",
            "Barreto",
            "Beard",
            "Bedore",
            "Beavello",
            "Beliato",
            "Belli",
            "Bellini",
            "Bellon",
            "Belmck",
            "Beltame",
            "Beltan",
            "Belz",
            "Bea",
            "Benedetti",
            "Benevenutte",
            "Benevides",
            "Bena",
            "Benia",
            "Bealdo",
            "Beard",
            "Lepine",
            "Berg",
            "Berami",
            "Berger",
            "Bernbé",
            "Varalho",
            "aaro",
            "averani",
            "Causse",
            "Constâcio",
            "CorraCorrea",
            "Cosa",
            "CosaBaa",
            "Callero",
            "Ccon",
            "Ccíla",
            "Lorenzoni",
            "Ccote",
            "Ccotti",
            "Cei",
            "Celot",
            "Cenedesi",
            "Ceolin",
            "Ceotto",
            "Cergueia",
            "Cerqueia",
            "Cerantes",
            "Cechel",
            "Cecon",
            "Ceconeto",
            "Ceconetto",
            "Cevoani",
            "Caas",
            "Capiniti",
            "Caves",
            "Chebb",
            "Chaada",
            "Charellotto",
            "Chian",
            "de Aaújo",
            "de Patos",
            "de Moaes",
            "de Abreu",
            "De Agnoi",
            "De Agnoi",
            "DeAngeli",
            "De Agostini",
            "de Aguar",
            "de Aberas",
            "de Aberaz",
            "de Alaa",
            "de Almeia",
            "De Almeya",
            "de Alarena",
            "de Amigo",
            "de Andade",
            "de Andades",
            "De Angeli",
            "De Angeli",
            "Neto",
            "de Aajuo",
            "Feitoa",
            "Felet",
            "Felete",
            "Feletti",
            "Ferdiando",
            "Ferlin",
            "Ferandes",
            "Ferandes",
            "Ferandez",
            "Ferrco",
            "Ferrão",
            "Ferarese",
            "Ferari",
            "Ferreia",
            "FerreiaBaa",
            "Ferrighetto",
            "Ferro",
            "Feu",
            "Fidelis",
            "Figueia",
            "Figueredo",
            "Filete",
            "Fileti",
            "Gicomele",
            "Gaaldi",
            "Guera",
            "Gbriel",
            "Gburro",
            "George",
            "Gealdo",
            "Ghian",
            "Gicomeli",
            "Gicomeli",
            "Rezende",
            "Légoa",
            "Leitão",
            "Leite",
            "Leme",
            "Lemos",
            "Lems",
            "Leoardes",
            "Leonel",
            "Leopoldo",
            "Lepine",
            "Lerner",
            "Lesa",
            "Lardi",
            "Lbeator",
            "Lbeatori",
            "Liduino",
            "Lia",
            "Lingardi",
            "Lino",
            "Liba",
            "Lizbo",
            "Longo",
            "Machado",
            "Mergár",
            "Mesquia",
            "Miana",
            "Mortensen",
            "Matrozzi",
            "Macedo",
            "MelloCorteza",
            "Melo",
            "Mendes",
            "Mendona",
            "Meneardo",
            "Meneghin",
            "Meneguete",
            "Meneses",
            "Menezes"
        ]
    }

    /**
    * this function return a array of ddd with state
    * @returns {Array}
    */
    static getDDDBrasil() {
        return [
            "11-SP",
            "12-SP",
            "13-SP",
            "14-SP",
            "15-SP",
            "16-SP",
            "17-SP",
            "18-SP",
            "19-SP",
            "21-RJ",
            "22-RJ",
            "24-RJ",
            "27-ES",
            "28-ES",
            "31-MG",
            "32-MG",
            "33-MG",
            "34-MG",
            "35-MG",
            "37-MG",
            "38-MG",
            "41-PR",
            "42-PR",
            "43-PR",
            "44-PR",
            "45-PR",
            "46-PR",
            "47-SC",
            "48-SC",
            "49-SC",
            "51-RS",
            "53-RS",
            "54-RS",
            "55-RS",
            "61-DF",
            "62-GO",
            "63-TO",
            "64-GO",
            "65-MT",
            "66-MT",
            "67-MS",
            "68-AC",
            "69-RO",
            "71-BA",
            "73-BA",
            "74-BA",
            "75-BA",
            "77-BA",
            "79-SE",
            "81-PE",
            "82-AL",
            "83-PB",
            "84-RN",
            "85-CE",
            "86-PI",
            "87-PE",
            "88-CE",
            "89-PI",
            "91-PA",
            "92-AM",
            "93-PA",
            "94-PA",
            "95-RR",
            "96-AP",
            "97-AM",
            "98-MA",
            "99-MA"
        ]
    }

}

module.exports = NamesHelpers