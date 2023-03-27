'use strict'

class GovHelpers {

    /**
    * return array of string with a superior court in Brazil
    * @returns {Array<string>}
    */
    static superiorCourt() {
        return [

            "Supremo Tribunal Federal (STF)",
            "Superior Tribunal de Justiça (STJ)",
            "Conselho da Justiça Federal (CJF)",
            "Superior Tribunal Militar (STM)",
            "Tribunal Superior do Trabalho (TST)",
            "Conselho Superior da Justiça do Trabalho (CSJT)",
            "Tribunal Superior Eleitoral (TSE)"
        ]
    }

    /**
    * return array of string with a regional court in Brazil
    * @returns {Array<string>}
    */
    static regionalCourt() {
        return [
            "Tribunal Regional Federal da 1ª Região (TRF1) (AC, AM, AP, BA, DF, GO, MA, MT, PA, PI, RO, RR e TO)",
            "Tribunal Regional Federal da 2ª Região (TRF2) (ES e RJ)",
            "Tribunal Regional Federal da 3ª Região (TRF3) (MS e SP)",
            "Tribunal Regional Federal da 4ª Região (TRF4) (PR, RS e SC)",
            "Tribunal Regional Federal da 5ª Região (TRF5) (AL, CE, PB, PE, RN e SE)",
            "Tribunal Regional Federal da 6ª Região (TRF6) (MG)"
        ]
    }

    /**
    * return array of string with a justice court in Brazil
    * @returns {Array<string>}
    */
    static justiceCourt() {
        return [
            "Tribunal de Justiça do Acre (TJAC)",
            "Tribunal de Justiça de Alagoas (TJAL)",
            "Tribunal de Justiça do Amapá (TJAP)",
            "Tribunal de Justiça do Amazonas (TJAM)",
            "Tribunal de Justiça da Bahia (TJBA)",
            "Tribunal de Justiça do Ceará (TJCE)",
            "Tribunal de Justiça do Distrito Federal e Territórios (TJDFT)",
            "Tribunal de Justiça do Espírito Santo (TJES)",
            "Tribunal de Justiça de Goiás (TJGO)",
            "Tribunal de Justiça do Maranhão (TJMA)",
            "Tribunal de Justiça de Mato Grosso (TJMT)",
            "Tribunal de Justiça de Mato Grosso do Sul (TJMS)",
            "Tribunal de Justiça de Minas Gerais (TJMG)",
            "Tribunal de Justiça do Pará (TJPA)",
            "Tribunal de Justiça da Paraíba (TJPB)",
            "Tribunal de Justiça do Paraná (TJPR)",
            "Tribunal de Justiça de Pernambuco (TJPE)",
            "Tribunal de Justiça do Piauí (TJPI)",
            "Tribunal de Justiça do Rio de Janeiro (TJRJ)",
            "Tribunal de Justiça do Rio Grande do Norte (TJRN)",
            "Tribunal de Justiça do Rio Grande do Sul (TJRS)",
            "Tribunal de Justiça de Rondônia (TJRO)",
            "Tribunal de Justiça de Roraima (TJRR)",
            "Tribunal de Justiça de Santa Catarina (TJSC)",
            "Tribunal de Justiça de São Paulo (TJSP)",
            "Tribunal de Justiça de Sergipe (TJSE)",
            "Tribunal de Justiça do Tocantins (TJTO)"
        ]
    }

    /**
    * return array of string with a any manys electoral court
    * @returns {Array<string>}
    */
    static electoraCourt() {
        return [
            "Tribunal Regional Eleitoral do Acre",
            "Tribunal Regional Eleitoral de Alagoas",
            "Tribunal Regional Eleitoral do Amapá",
            "Tribunal Regional Eleitoral do Amazonas",
            "Tribunal Regional Eleitoral da Bahia",
            "Tribunal Regional Eleitoral do Ceará",
            "Tribunal Regional Eleitoral do Distrito Federal",
            "Tribunal Regional Eleitoral do Espírito Santo",
            "Tribunal Regional Eleitoral de Goiás",
            "Tribunal Regional Eleitoral do Maranhão",
            "Tribunal Regional Eleitoral do Mato Grosso",
            "Tribunal Regional Eleitoral do Mato Grosso do Sul",
            "Tribunal Regional Eleitoral de Minas Gerais",
            "Tribunal Regional Eleitoral do Pará",
            "Tribunal Regional Eleitoral da Paraíba",
            "Tribunal Regional Eleitoral do Paraná",
            "Tribunal Regional Eleitoral de Pernambuco",
            "Tribunal Regional Eleitoral do Piauí",
            "Tribunal Regional Eleitoral do Rio de Janeiro",
            "Tribunal Regional Eleitoral do Rio Grande do Norte",
            "Tribunal Regional Eleitoral do Rio Grande do Sul",
            "Tribunal Regional Eleitoral de Rondônia",
            "Tribunal Regional Eleitoral de Roraima",
            "Tribunal Regional Eleitoral de Santa Catarina",
            "Tribunal Regional Eleitoral de São Paulo",
            "Tribunal Regional Eleitoral de Sergipe",
            "Tribunal Regional Eleitoral de Tocantins"
        ]
    }

    /**
    * return array of string with a any manys worker court
    * @returns {Array<string>}
    */
    static workerCourt() {
        return [
            "Tribunal Regional do Trabalho da 1ª Região (TRT1) (RJ)",
            "Tribunal Regional do Trabalho da 2ª Região (TRT2) (SP / Grande São Paulo e Baixada Santista)",
            "Tribunal Regional do Trabalho da 3ª Região (TRT3) (MG)",
            "Tribunal Regional do Trabalho da 4ª Região (TRT4) (RS)",
            "Tribunal Regional do Trabalho da 5ª Região (TRT5) (BA)",
            "Tribunal Regional do Trabalho da 6ª Região (TRT6) (PE)",
            "Tribunal Regional do Trabalho da 7ª Região (TRT7) (CE)",
            "Tribunal Regional do Trabalho da 8ª Região (TRT8) (AP e PA)",
            "Tribunal Regional do Trabalho da 9ª Região (TRT9) (PR)",
            "Tribunal Regional do Trabalho da 10ª Região (TRT10) (DF e TO)",
            "Tribunal Regional do Trabalho da 11ª Região (TRT11) (AM e RR)",
            "Tribunal Regional do Trabalho da 12ª Região (TRT12) (SC)",
            "Tribunal Regional do Trabalho da 13ª Região (TRT13) (PB)",
            "Tribunal Regional do Trabalho da 14ª Região (TRT14) (AC e RO)",
            "Tribunal Regional do Trabalho da 15ª Região (TRT15) (SP / Interior e Litoral Norte e Sul)",
            "Tribunal Regional do Trabalho da 16ª Região (TRT16) (MA)",
            "Tribunal Regional do Trabalho da 17ª Região (TRT17) (ES)",
            "Tribunal Regional do Trabalho da 18ª Região (TRT18) (GO)",
            "Tribunal Regional do Trabalho da 19ª Região (TRT19) (AL)",
            "Tribunal Regional do Trabalho da 20ª Região (TRT20) (SE)",
            "Tribunal Regional do Trabalho da 21ª Região (TRT21) (RN)",
            "Tribunal Regional do Trabalho da 22ª Região (TRT22) (PI)",
            "Tribunal Regional do Trabalho da 23ª Região (TRT23) (MT)",
            "Tribunal Regional do Trabalho da 24ª Região (TRT24) (MS)",
        ]
    }

    /**
    * return array of string with a any manys military conuncil
    * @returns {Array<string>}
    */
    static militaryCourt() {
        return [
            "Tribunal de Justiça Militar de Minas Gerais (TJMMG)",
            "Tribunal de Justiça Militar do Rio Grande do Sul (TJMRS)",
            "Tribunal de Justiça Militar de São Paulo (TJMSP)"
        ]
    }

    /**
    * return array of string with a any manys reginal conuncil
    * @returns {Array<string>}
    */
    static professionalCouncil() {
        return [
            "Administradores: Conselho Federal de Administração (CFA) e conselhos regionais (CRA)",
            "Advogados: Ordem dos Advogados do Brasil Nacional (OAB) e Ordem dos Advogados do Brasil Seccional (OAB do respectivo estado de atuação)",
            "Arquitetos e urbanistas: Conselho de Arquitetura e Urbanismo do Brasil (CAU/BR) e conselhos regionais (CAU/UF)",
            "Assistentes sociais: Conselho Federal de Serviço Social (CFESS) e conselhos regionais (CRESS)",
            "Bibliotecários: Conselho Federal de Biblioteconomia (CFB) e conselhos regionais (CRB)",
            "Biólogos: Conselho Federal de Biologia (CFBIO) e conselhos regionais (CRBIO)",
            "Biomédicos: Conselho Federal de Biomedicina (CFBM) e conselhos regionais (CRBM)",
            "Contabilistas: Conselho Federal de Contabilidade (CFC) e conselhos regionais (CRC)",
            "Corretores de imóveis: Conselho Federal de Corretores de Imóveis (COFECI) e conselhos regionais (CRECI)",
            "Economistas: Conselho Federal de Economia (COFECON) e conselhos regionais (CORECON)",
            "Economistas domésticos: Conselho Federal de Economistas Domésticos (CFED) e conselhos regionais (CRED)",
            "Educadores e Pedagogos: Conselho Federal de Educadores e Pedagogos (CFEP) e conselhos regionais (CREP)",
            "Profissional de Educação Física: Conselho Federal de Educação Física (CONFEF) e conselhos regionais (CREF)",
            "Enfermeiros e obstetrizes: Conselho Federal de Enfermagem (COFEN) e conselhos regionais (COREN)",
            "Engenheiros e agrônomos: Conselho Federal de Engenharia e Agronomia (CONFEA) e conselhos regionais (CREA)",
            "Estatísticos: Conselho Federal de Estatística (CONFE) e conselhos regionais (CONRE)",
            "Farmacêuticos: Conselho Federal de Farmácia (CFF) e conselhos regionais (CRF)",
            "Fisioterapeutas e terapeutas ocupacionais: Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO) e conselhos regionais (CREFITO)",
            "Fonoaudiólogos: Conselho Federal de Fonoaudiologia (CFFa) e conselhos regionais (CREFONO)",
            "Médicos: Conselho Federal de Medicina (CFM) e conselhos regionais (CRM)",
            "Médicos veterinários: Conselho Federal de Medicina Veterinária (CFMV) e conselhos regionais (CRMV)",
            "Museólogos: Conselho Federal de Museologia (COFEM) e conselhos regionais (COREM)",
            "Músicos: Ordem dos Músicos do Brasil (OMB)",
            "Nutricionistas: Conselho Federal de Nutrição (CFN) e conselhos regionais (CRN)",
            "Odontólogos: Conselho Federal de Odontologia (CFO) e conselhos regionais (CRO)",
            "Psicólogos: Conselho Federal de Psicologia do Brasil (CFP) e conselhos regionais (CRP)",
            "Químicos: Conselho Federal de Química (CFQ) e conselhos regionais (CRQ)",
            "Relações-públicas: Conselho Federal de Relações Públicas (CONFERP) e conselhos regionais (CONRERP)",
            "Representantes comerciais: Conselho Federal dos Representantes Comerciais (CONFERE) e conselhos regionais (CORE)",
            "Técnico em radiologia: Conselho Nacional de Técnicos em Radiologia (CONTER) e conselhos regionais (CRTR)",
            "Técnicos industriais: Conselho Federal dos Técnicos Industriais (CFT) e conselhos regionais (CRT)",
            "Técnicos Agrícolas: Conselho Federal dos Técnicos Agrícolas (CFTA) e conselhos regionais (CRTA)"
        ]
    }

    /**
    * return array of string with all Chamber of Deputies
    * @returns {Array<string>}
    */
    static ChamberOfDeputies() {
        return [
            "Mesa Diretora",
            "Centro de Estudos e Debates Estratégicos",
            "Ouvidoria Parlamentar",
            "Procuradoria Parlamentar",
            "Corregedoria Parlamentar",
            "Comissões",
            "Colégio de Líderes",
            "Conselho de Ética e Decoro Parlamentar",
            "Deputados (Gabinetes)",
            "Diretoria-Geral (DG)",
            "Assessoria Técnica da Diretoria-Geral (Atec)",
            "Assessoria de Projetos e Gestão (Aproge)",
            "Departamento de Apoio Parlamentar (Deapa)",
            "Departamento de Polícia Legislativa (Depol)",
            "Diretoria Administrativa (Dirad)",
            "Centro de Informática (Cenin)",
            "Departamento de Finanças, Orçamento e Contabilidade (Defin)",
            "Departamento de Material e Patrimônio (Demap)",
            "Departamento Técnico (Detec)",
            "Diretoria Legislativa (Dileg)",
            "Centro de Documentação e Informação (Cedi)",
            "Consultoria Legislativa (Conle)",
            "Consultoria de Orçamento e Fiscalização Financeira (Conof)",
            "Departamento de Comissões (Decom)",
            "Departamento de Taquigrafia, Revisão e Redação (Detaq)",
            "Diretoria de Recursos Humanos (DRH)",
            "Departamento de Pessoal (Depes)",
            "Secretaria Executiva da Comissão do Pecúlio",
            "Centro de Formação, Treinamento e Aperfeiçoamento (Cefor)",
            "Departamento Médico (Demed)",
            "Secretaria Executiva do Pró-Saúde",
            "Secretaria-Geral da Mesa (SGM)",
            "Assessoria Técnico-Jurídica da Secretaria-Geral da Mesa",
            "Secretaria da Mulher",
            "Secretaria de Relações Internacionais",
            "Secretaria de Comunicação Social (Secom)",
            "Secretaria de Controle Interno (Secin)"
        ]
    }

    /**
    * return array of string with all Federal Senate
    * @returns {Array<string>}
    */
    static federalSenate() {
        return [
            "Corregedoria Parlamentar",
            "Procuradoria Parlamentar",
            "Conselho de Comunicação Social - CCS",
            "Conselho de Ética e Decoro Parlamentar",
            "Ouvidoria do Senado Federal",
            "Procuradoria Especial da Mulher",
            "Conselho de Estudos Políticos do SF",
            "Comissões Permanentes",
            "Representação Brasileira no Parlamento do Mercosul",
            "Gabinete",
            "Conselho de Transparência e Controle Social",
            "Secretaria de Transparência",
            "Secretaria de Relações Internacionais",
            "Assessoria Especial da Presidência",
            "Assessoria Técnica",
            "Assessoria de Imprensa",
            "Cerimonial da Presidência",
            "Gabinetes de senadores",
            "Gabinetes de liderança",
            "Comitê de Governança Corporativa e Gestão Estratégica",
            "Conselho Editorial",
            "Secretaria de Controle Interno",
            "Consultoria Legislativa",
            "Conselho de Supervisão do SIS",
            "Conselho de Supervisão do ILB",
            "Advocacia do Senado Federal",
            "Consultoria de Orçamento, Fiscalização e Controle.",
            "Secretaria Geral da Mesa",
            "Secretaria de Apoio a Conselhos e Órgãos do Parlamento – SCOP",
            "Secretaria de Comissões – SCOM",
            "Secretaria de Autógrafos e Correspondências Oficiais - SEAUT",
            "Secretaria de Gestão Legislativa do Congresso Nacional – SGLCN",
            "Secretaria de Gestão Legislativa do Senado Federal – SGLSF",
            "Secretaria de Reg. Leg. de Plenários e de Elab. de Diários - SRELED",
            "Secretaria de Taquigrafia e Redação de Debates Legislativos - STQR",
            "Diretoria Geral",
            "Secretaria de Administração de Contratos - SADCON",
            "Secretaria de Editoração e Publicações - SEGRAF",
            "Secretaria de Finanças, Orçamento e Contabilidade – SAFIN",
            "Secretaria de Gestão de Informação e Documentação – SGIDOC",
            "Secretaria de Gestão de Pessoas - SEGP",
            "Secretaria de Infraestrutura - SINFRA",
            "Secretaria Integrada de Saúde - SIS",
            "Secretaria de Patrimôno - SPATR",
            "Secretaria de Polícia Legislativa - SPSF",
            "Secretaria de Tecnologia da Informação Prodasen - PRDSTI",
            "Secretaria de Comunicação Social",
            "Secretaria Agência e Jornal do Senado – SAJS",
            "Secretaria Rádio Senado – SRSF",
            "Secretaria Tv Senado - STVSEN",
            "Secretaria de Relações Públicas – SRPSF",
            "Instituto Legislativo Brasileiro (ILB)",
        ]
    }

    /**
    * return array of string with all civil house
    * @returns {Array<string>}
    */
    static civilHouse() {
        return [
            "Subchefia de Análise Governamental",
            "Subchefia Adjunta de Análise Legislativa",
            "Subchefia Adjunta de Finanças Públicas",
            "Subchefia Adjunta de Gestão Pública",
            "Subchefia Adjunta de Infraestrutura",
            "Subchefia Adjunta de Política Econômica;",
            "Subchefia Adjunta de Políticas Sociais",
            "Subchefia Adjunta de Segurança Pública e de Defesa",
            "Subchefia de Articulação e Monitoramento",
            "Subchefia Adjunta de Infraestrutura;",
            "Subchefia Adjunta de Gestão Pública e Segurança;",
            "Subchefia Adjunta de Política Econômica;",
            "Subchefia Adjunta de Políticas Sociais;",
            "Secretaria Especial de Relações Governamentais",
            "Subsecretaria de Coordenação e Acompanhamento da Governança Pública;",
            "Subsecretaria de Acompanhamento Orçamentário e Financeiro; e",
            "Subsecretaria de Acesso à Informação e Integração Governamental;",
            "Secretaria de Relacionamento Externo",
            "Subsecretaria para Temas Econômicos;",
            "Subsecretaria para Temas Político-Institucionais;",
            "Subsecretaria para Temas Socioambientais;",
            "Secretaria-Executiva do Programa Nacional de Incentivo ao Voluntariado: Assessoria Especial de Relações Institucionais e Internacionais;",

        ]
    }

    /**
    * return array of string with all ministries
    * @returns {Array<string>}
    */
    static ministries() {
        return [
            "Agricultura e Pecuária",
            "Cidades",
            "Ciência, Tecnologia e Inovação",
            "Comunicações",
            "Cultura",
            "Defesa",
            "Desenvolvimento Agrário e Agricultura Familiar",
            "Desenvolvimento, Indústria, Comércio e Serviços",
            "Desenvolvimento e Assistência Social, Família e Combate à Fome",
            "Direitos Humanos e Cidadania",
            "Educação",
            "Esporte",
            "Fazenda",
            "Gestão e Inovação em Serviços Públicos",
            "Igualdade Racial",
            "Integração e Desenvolvimento Regional",
            "Justiça e Segurança Pública",
            "Meio Ambiente e Mudança do Clima",
            "Minas e Energia",
            "Mulheres",
            "Pesca e Aquicultura",
            "Planejamento e Orçamento",
            "Portos e Aeroportos",
            "Povos Indígenas",
            "Previdência Social",
            "Relações Exteriores",
            "Saúde",
            "Trabalho e Emprego",
            "Transportes",
            "Turismo",
            "Secretaria de Comunicação Social",
            "Secretaria-Geral",
            "Secretaria de Relações Institucionais",
            "Advocacia-Geral da União",
            "Casa Civil",
            "Controladoria-Geral da União",
            "Gabinete de Segurança Institucional",
        ]
    }
}

module.exports = GovHelpers;