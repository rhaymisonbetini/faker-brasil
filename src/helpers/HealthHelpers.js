'use strict'

class HealthHelpers {

    /**
    * return type of medics
    * @returns {array<string>}
    */
    static medicEspecialist() {
        return [
            "Podólogo",
            "Clínico geral",
            "Pediatra",
            "Endocrinologista",
            "Neurologista",
            "Reumatologista",
            "Alergista / Imunologista",
            "Psiquiatra",
            "Nefrologista",
            "Ginicologista",
            "Psiquiatra",
            "Cardiologista",
            "Nutricionista",
            "Pneumologista",
            "Cirurgião",
            "Médico de emergência",
            "Oftalmologista",
            "Oncologista",
            "Urologista",
            "Otorrinolaringologista",
            "Anestesista",
            "Dermatologista",
            "Radiologista",
            "Gastroenterologista",
            "Cardiologista",
            "Ortopedista"
        ]
    }

    /**
    * return a list name of medical exam
    * @returns {array<string>}
    */
    static medicalExams() {
        return [
            "hemograma",
            "glicemia em jejum",
            "colesterol e triglicerídeos",
            "ureia e creatina",
            "tgo (ast) e tgp (alt)",
            "tsh e t4 livre",
            "ácido úrico",
            "exames de urina",
            "eletrocardiograma",
            "teste ergométrico",
            "ecocardiograma",
            "papanicolau",
            "mamografia",
            "ultrassonografia transvaginal",
            "toque retal",
            "dosagem de psa.",
            "anamnese clínica e esportiva",
            "avaliação física completa",
            "consulta nutricional",
            "análises clínicas",
            "teste cardiopulmonar",
            "raio-x de tórax",
            "eletrocardiograma",
            "m.a.p.a",
            "holter",
            "audiometria",
            "radiografia",
            "espirometria",
            "eletrocardiograma",
            "colesterol total e frações (hdl, ldl e vldl) e triglicerídeos",
            "transaminases ou tgo (ast) e tgp (alp)",
            "t3 total; t4 livre e tsh",
            "lh (hormônio luteinizante)",
            "e2 (estradiol)",
            "hiv1 e hiv2 para hiv",
            "vdlr para sífilis",
            "teste para clamídia",
            "teste para gonorreia",
            "anti-hcv para hepatite c",
            "anti-hbs e outros para hepatite b",
            "anticorpos igg ou anticorpos igm para herpes 1 e 2.",
            "papanicolaou",
            "colposcopia ou vulvoscopia",
            "ultrassonografias",
            "mamografia ",
            "densitometria óssea"
        ]
    }

    /**
    * return type of dental specialist
    * @returns {array<string>}
    */
    static dentalSpecialist() {
        return [
            "Acupuntura",
            "Cirurgia e Traumatologia Bucomaxilofaciais",
            "Dentística",
            "Disfunção Temporomandibular e Dor Orofacial",
            "Endodontia",
            "Estomatologia",
            "Harmonização orofacial",
            "Homeopatia",
            "Implantodontia",
            "Odontogeriatria",
            "Odontologia do Esporte ",
            "Odontologia do Trabalho",
            "Odontologia Legal",
            "Odontologia para Pacientes com Necessidades Especiais",
            "Odontopediatria",
            "Ortodontia",
            "Ortopedia Funcional dos Maxilares",
            "Patologia Oral e Maxilofacial",
            "Periodontia",
            "Prótese Bucomaxilofacial",
            "Prótese Dentária",
            "Radiologia Odontológica e Imaginologia",
            "Saúde Coletiva"
        ]
    }

    /**
    * return a list name of dental exam
    * @returns {array<string>}
    */
    static dentalExams() {
        return [
            "Consulta inicial",
            "Consulta de urgência em horário comercial",
            "Consulta de urgência fora do horário comercial",
            "Perícia inicial, Intermediária ou final ",
            "Vistoria de Instalações",
            "Rx periapical",
            "Rx interproximal (“bitewing”) ",
            "Rx oclusal",
            "Rx póstero-anterior",
            "Rx da ATM:incidências",
            "Rx panorâmica",
            "Telerradiografia com traçado computadorizado ",
            "Telerradiografia sem traçado",
            "Rx de mão",
            "Modelos ortodônticos (par) (NORMA: ",
            "“Slide” ou fotografia (máximo:unidades) (NORMA: ",
            "Documentação ortodôntica, ",
            "Rx panorâmica com traçado",
            "Tomografia computadorizada:ATM",
            "Tomografia computadorizada:ATM’s",
            "Tomografia computadorizada:seio da face",
            "Tomografia computadorizada:seios da face",
            "Tomografia computadorizada:dente",
            "Tomografia computadorizada:dentes",
            "Tomografia computadorizada:dentes",
            "Tomografia computadorizada:dentes",
            "Tomografia computadorizada: maxila ou mandíbula total",
            "Teste de risco de cárie ",
            "Teste de pH salivar / Capacidade Tampão ",
            "Teste de fluxo salivar / Sialometria ",
            "Exame citopatológico oncótico de líquidos e raspados ou “imprint” de lesões bucais ",
            "Profilaxia",
            "Orientação de Higiene Oral e de dieta alimentar",
            "Aplicação de flúor gel ",
            "Controle de placa bacteriana",
            "Tratamento de gengivite ",
            "Remineralização ",
            "Aplicação de verniz de flúor",
            "Aplicação de selante",
            "Aplicação de selante invasivo ",
            "Aplicação de cariostático ",
            "Remineralização ",
            "Adequação do meio bucal com ionômero de vidro ",
            "Adequação do meio bucal com IRM ",
            "Restauração de ionômero de vidro , ",
            "Restauração preventiva (ionômero + selante) , ",
            "Coroa de aço, acetato ou policarbonato  Rx inicial periapical e Rx final",
            "imal (P. inicial e P. final) , ",
            "Capeamento pulpar em decíduo ",
            "Capeamento pulpar em permanente ",
            "Restauração provisória ",
            "Pulpotomia ",
            "Tratamento endodôntico em decíduo  Rx final periapical ",
            "Exodontia de decíduo ",
            "Mantenedor de espaço fixo ou removível (P. final com mantenedor)",
            "Placa miorrelaxante ",
            "Plano inclinado ",
            "Condicionamento infantil ",
            "Ulotomia ",
            "Ulectomia ",
            "Restauração de amálgamaface (P. inicial e P. final) ",
            "Restauração de amálgamafaces (P. inicial e P. final) ",
            "Restauração de amálgamafaces (P. inicial e P. final) ",
            "Restauração de amálgamafaces (P. inicial e P. final) ",
        ]
    }

    /**
    * return type of veterinariam specialist
    * @returns {array<string>}
    */
    static vetSpecialist() {
        return [
            "cirurgia",
            "patologia",
            "acupuntura",
            "medicina felina",
            "diagnóstico por imagem",
            "anestesiologia",
            "clínica médica para pequenos animais",
            "inspeção higiênica sanitária e tecnológica",
            "endocrinologia",
            "medicina de animais selvagens",
            "medicina intensiva",
            "dermatologia",
            "cardiologia",
            "oftalmologia",
            "homeopatia",
            "oncologia",
            "medicina veterinária legal",
            "medicina veterinária de coletivo",
            "nefrologia e urologia",
            "nutrição e nutrologia",
        ]
    }

    static vetExames() {
        return [
            "Histopatológico (1 amostra)",
            "Histopatológico (amostras adicionais)",
            "Biópsia de Pele para Dermatopatias (até 3 fragmentos)",
            "Biópsia Gástrica com pesquisa Helicobacter spp",
            "Peça cirúrgica (Ex: mastectomia, baço, amputações)",
            "Histopatológico com avaliação de margem cirúrgica)",
            "Citologia (1 local)",
            "Citologia (local adicional)",
            "Citologia Vaginal",
            "PARR: Diagnóstico e Imunofenotipagem de linfomas",
            "Teste para mutação do gene BRAF para carcinoma",
            "de vesícula urinária e próstata de cães",
            "Citometria de Fluxo 1",
            "Citometria de Fluxo 2",
            "PCR para Oncogene C-Kit em Mastocitoma ",
            "PCR para Oncogene C-Kit + Imunoistoquímica",
            "Marcador Sorológico para Tumor de Mama (CEA) ",
            "OncoMapa",
            "MDR 1 - (Gene de múltipla resistência a drogas)",
            "PKD - (Doença do Rim Policístico de Felinos) ",
            "Anaplasma spp",
            "Babesia spp",
            "Bordetella spp ",
            "Blastomyces dermatitidis ",
            "Borrelia burgdorferi",
            "Brucella spp",
            "Calicivírus felino ",
            "Campylobacter spp ",
            "Vírus da Cinomose canina ",
            "Chlamydophila psittaci ",
            "Cryptococcus spp",
            "FeLV Plus (DNA pró viral e RNA) ",
            "FIV Plus (DNA pró viral e RNA) ",
            "Herpesvírus canino 1",
            "Herpesvírus felino 1",
            "Leishmania spp",
            "Mycoplasma haemocanis (Haemobartonella canis)",
            "Mycoplasma haemofelis (Haemobartonella felis) ",
            "Rangelia vitalli",
            "Painel Hemoparasita Canino I",
            "Painel Hemoparasita Canino II",
            "Painel Anemia Canina",
            "Painel Infeccioso Canino II",
            "Painel Entérico Canino II",
            "Painel Reprodutivo Canino",
            "Painel Neurológico Felino",
            "Painel Infeccioso Felino",
            "Painel Respiratório Felino",
            "Painel Uveite Felino",
            "Painel Reprodutivo Felino",
            "Painel Anemia Felino I",
            "Painel Anemia Felino II",
            "Painel Agentes Fúngicos",
            "Babesia Bovinos",
            "Babesia Equinos",
            "Hemoparasitas Equinos II",
        ]
    }

    /**
    * return a vertination  array string
    * @returns {array<string>}
    */
    static vetName() {
        return [

            "Clínica Veterinária e Pet Shop Dr. Pet",
            "Clínica Veterinária e Pet Shop Mundo Animal",
            "Clínica Veterinária e Pet Shop Vida de Cão",
            "Clínica Veterinária e Pet Shop Cuidando de Bichos",
            "Clínica Veterinária e Pet Shop Pet House",
            "Clínica Veterinária e Pet Shop Bichos & Cia",
            "Clínica Veterinária e Pet Shop Bom Prato",
            "Clínica Veterinária e Pet Shop Dr. Vida",
            "Clínica Veterinária e Pet Shop Amigo Animal",
            "Clínica Veterinária e Pet Shop Zoológico",
            "Clínica Veterinária e Pet Shop Dr. Bicho",
            "Clínica Veterinária e Pet Shop Cão & Gato",
            "Clínica Veterinária e Pet Shop Petshop",
            "Clínica Veterinária e Pet Shop Dr. Zoo",
            "Clínica Veterinária e Pet Shop Vet+",
            "Clínica Veterinária e Pet Shop Banho & Tosa",
            "Clínica Veterinária e Pet Shop Animalandia",
            "Clínica Veterinária e Pet Shop Dr. Vet",
            "Clínica Veterinária e Pet Shop Animalis",
            "Clínica Veterinária e Pet Shop Mundo dos Bichos",
            "Clínica Veterinária e Pet Shop Dr. Pets",
            "Clínica Veterinária e Pet Shop Vida Animal",
            "Clínica Veterinária e Pet Shop Cuidando do seu Bichinho",
            "Clínica Veterinária e Pet Shop Bichinho Feliz",
            "Clínica Veterinária e Pet Shop Bom Amigo",
            "Clínica Veterinária e Pet Shop Dr. Amigo",
            "Clínica Veterinária e Pet Shop Zoonoses",
            "Clínica Veterinária e Pet Shop Dr. Zoo Animal",
            "Clínica Veterinária e Pet Shop Cão Viver",
            "Clínica Veterinária e Pet Shop Gatinho Amigo",
            "Clínica Veterinária e Pet Shop Pets Amigo",
            "Clínica Veterinária e Pet Shop Drº Vet",
            "Clínica Veterinária e Pet Shop Banho Tosa Animal",
            "Clínica Veterinária e Pet Shop Animal Animais",
            "Clínica Veterinária e Pet Shop Drº Animail",
            "Clínica Veterinária e Pet Shop Vida de Animais",
            "Clínica Veterinária e Pet Shop Cuidando de Seres Vivos",
            "Clínica Veterinária e Pet Shop Bichos Vivos",
            "Clínica Veterinária e Pet Shop Bom Alimento",
            "Clínica Veterinária e Pet Shop Drº Alimentação Saudável",
            "Clínica Veterinária e Pet Shop Zoosaludable",
            "Clínica Veterinária e Pet Shop Drº Zoo",
            "Saudavel Cão",
            "Saudavel Gatinho",
            "Saudavel Pets Saudaveis Drº Vet",
            "Saudavel Banho Tosa",
            "Saudavel Animal Animais",
            "Saudaveis Drº Animail ",
            "Saudavel Vida de Animais",
            "Saudaveis Cuidando de Seres Vivos",
            "Saudaveis Bichos Vivos",
            "Saudaveis Bom Alimento ",
            "Saudavel Drº Alimentação",
            "Saudavel Zoosaludable Drº Zoo",
            "Saudavel Animal zoo",
            "Saudavel Cão",
        ]
    }

    /**
     * return a odonto clinica array string
     * @returns {array<string>}
     */
    static dental() {
        return [
            "Ateliê de Sorriso",
            "Belo sorriso",
            "Centro Clínico dos dentes",
            "Odontologia certa",
            "Sorriso & Cia",
            "Branco Odonto",
            "Clínica do Doutor X",
            "Fino Odonto",
            "Centro do Sorriso",
            "Sorriso geral",
            "Ideal dentes",
            "Ilumine odontologia",
            "New Odonto",
            "Max Odonto",
            "Max Dent",
            "Hiper Odonto",
            "Nova Odonto",
            "Odontologia geral",
            "Pronto Odonto",
            "SOS dentes",
            "Porto dental",
            "Mundial dentes",
            "SOS sorriso",
            "Sempre sorrindo",
            "Saúde & sorriso",
            "Supremo Odonto",
            "Arte do Sorriso",
            "Dentes e dentinhos",
            "Fino dente",
            "Dr. Odonto",
            "Centro Clínico do Sorriso",
            "Soberano Odonto",
            "Mais Odonto",
            "Prime Odonto",
            "Clínica brilho dental",
            "Clínica dente branco",
            "Ponto do Sorriso",
            "Mega White",
            "Bio Odonto",
            "Sorrisão White",
            "Mestre Odonto",
            "Dental Art",
            "Saúde Odonto",
            "Belo sorriso",
            "Hospital dos dentes",
            "Express Odonto",
            "Divino sorriso",
            "Boca e sorriso",
            " OdontoRir",
            "Odonto Master",
            "Top Dentes",
            "Doutor dos dentes",
            "Clínica geral dos dentes",
            "Clínica do belo sorriso",
            "Clínica sorrir sempre",
            "Clínica sorrir mais",
            "Senhor Odonto",
        ]
    }

}

module.exports = HealthHelpers