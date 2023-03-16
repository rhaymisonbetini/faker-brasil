'use strict'

class NamesHelpers {

    /**
    * get number module
    * @param dividendo - int
    * @param divisor - int
    * @return int
    */
    getModulo(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }

    getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * generate  random number
     * @param total - integer 
     * @return array
     */
    getRandomNumbers(total) {
        let numbers = [];
        for (let i = 0; i < total; i++) {
            numbers[i] = this.getRandomNumberBetween(1, 9);
        }
        return numbers;
    }

    /**
     * generate verificator
     * @param numeros - array numeros
     * @return int
     */
    getVerifyDigit(numeros = []) {
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
     * @return String - 11 digitos 
     */
    generateCpfFake(points) {
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
     * @return String 
     */
    geneateRG() {
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
     * @return String 
     */
    generateEmail(email) {
        return `${email}@mail.com.br`.replace(/ /g, '');
    }

    /**
     * generate workcard 
     * @return String 
     */
    generateWorkCard(points) {
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

    generatePassport(inital) {
        let numbers = this.getRandomNumbers(6);
        return `${inital}${numbers.join('')}`;
    }

    /**
     * this function return a array of simples names
     * @returns {Array}
     */
    getSimpleNames() {
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
    getLastName() {
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



}

module.exports = NamesHelpers