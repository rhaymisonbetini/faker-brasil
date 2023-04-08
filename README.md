<div align="center">
  <img src="./src/assets/logo.png" width="100%" height="150"/>
</div>

<p align="center">
   <img alt="Bower" src="https://img.shields.io/bower/l/MI?style=flat-square">
   <img alt="Bower" src="https://img.shields.io/badge/version-1.0.0-blue">
</p>


<h1 align="center">A MAIOR BIBLIOTECA DE DADOS FAKES GENUINAMENTE BRASILEIROS. FEITO DE BR PARA BR!</h1>

<h4>Como instalar essa bagaça!</h4>

```
Previsao de lançamento no npm em 09-04-2023
```
Pronto, agora você precisa importa a Lib no seu arquivo javascript

```javascript
const SuperFakerBrasil = require('faker-brasil');
```
Agora vamos criar uma nova instância da classe SuperFakerBrasil e estaremos pronto para utilizar toda nossa biblioteca.
Essa super classe estende de todas as outras... criando assim uma super classe fake

```javascript
const fakerBrasil = new SuperFakerBrasil();
```
Prontinho! Estamos prontos para utilizar e criar dados fakes. 
Nossa biblioteca hoje conta com diversos métodos de criação de dados que estão distribuídos em 
15 classes geradoras!

 ### Geradores
 * <a href="#peronal"> Dados pessoais</a></a>
 * <a href="#anddress"> Dados de endereço</a>
 * <a href="#auto"> Dados de Automóveis </a>
 * <a href="#bank"> Dados Bancários</a>
 * <a href="#gov"> Dados de Agências governamentais</a>
 * <a href="#gym"> Dados de Academia e treinos</a>
 * <a href="#health"> Dados de Instituições de saúde (hospital, veterinária, odonto)</a>
 * <a href="#internet"> Dados de Internet</a>
 * <a href="#market"> Dados de Mercado (super mercado, eletrônicos, eletrodomésticos, farmácia)</a>
 * <a href="#industry"> Dados da Indústria</a>
 * <a href="#univerity"> Dados de Universidades.</a>
 * <a href="#sports"> Dados Esportes</a>
 * <a href="#image"> Dados Imagens</a>
 * <a href="#music"> Dados Musicais</a>
 * <a href="#social"> Dados Redes Sociais, Textos, Noticias</a>
 * <a href="#univerity"> Dados Geograficos - DESENVOLVIMENTO.</a>
 * <a href="#univerity"> Dados Cientificos - DESENVOLVIMENTO.</a>

<h3 id="p">Dados Pessoais</h3>

```javascript
    //Este método retorna um nome simples ex: Lucas, Pedro, Sara
    firstName() 

    //Este método retorna um sobre nome ex: Balestre, Cenedesi, Ferari,Leoardes
    lastName() 

    //Este metdo retorna um nome completo:  Lucas Betini soares de almeida
    fullName()

    //Retorna um rg fake
    rg()
    
    // Este método retorn um cpf valido com mascara ou nao...
    // false: 12345678955
    // true:  123.456.789-55
    cpf(points = false)


    // Este método retorn um email com ou sem um prefixo
    // null: radom@radom.com.br ou .pt
    // firstName:  firstName@radom.com.br ou pt
    email(firstName = null)

    //Retorna uma cnh fake
    cnh()

    //Retorna uma carteira de trabalho fake com ou sem pontos.
    workCard(points = false)

    //Retorna um passporte fake
    passPort()

    //Retorna uma data de nascimento fake
    //false: dd-mm-yyyy
    ///true: dd/mm/yyyy
    birthDate(slash = false)

    //retorna um telefone fake
    //prefix true para  +55 e false para nao inserir
    //mask true para conter mascara no ddd: ex (27)
    //ex: phone(true,true) +55 (27)3316-4597
    phone(prefix, mask)

    //retorna um celular fake
    //prefix true para  +55 e false para nao inserir
    //mask true para conter mascara no ddd: ex (27)
    //ex: cellPhone(true,true) +55 (27)99956-5478
    cellPhone(prefix, mask)

    //Este método é bem da hora e preguiçoso! Ele te retorna uma pessoa com dados completo!
    //ex retorno: {
    // firstName: this.firstName(),
    // lastName: this.lastName(),
    // fullName: this.fullName(),
    // birthDate: this.birthDate(true),
    // cpf: this.cpf(true),
    // rg: this.rg(),
    // phone: this.phone(true, true),
    // cellPhone: this.cellPhone(true, true),
    // email: this.email(),
    // workCard: this.workCard(true),
    // passPort: this.passPort(true)
    //}
    newPerson()

    //Este método te retorna uma pessoa completa com menos de 18 anos de 
    //idade com base no ano corrente
    newPersonYounger()

    //Este método te retorna uma pessoa adulta completa com mais de 18 e menos de 60 anos
    newAdultPerson()

    //Este método te retorna uma pessoa idosa completa com mais de 60 anos
    newOlderPerson()

```
<h3 id="anddress">Dados de endereço</h3>

```javascript
  //Este método é um quebra galho e busca um cep diretamente nos correios
  async getAddressByCepCorreio(cep)

  //Este método gera um cep randomico
  randomCep()

  //Este método gera um cep randomigo pela localidade
  //location:location  ex: SP, RJ, MG, ES
  randomCepByState(location)

  //Este método gera um nome de rua alatorio
  street()

  //Este método gera um nome de bairro fake
  neighborhood()

  //Este método gera randomicamente um condominio, conunto, predio, edificil etc...
  //ex: Condominio Juares de Padua
  building()

  //Este método retorna uma cidade aleatória
  city()

  //Metoto retorna um estado brasileiro aleatório
  state()

  //Este método gera randomicamente um endereco completo
  //ex de retorno: {
  //  cep: string,
  //  state: string,
  //  fullstate: string,
  //  city: string,
  //  neighborhood: string,
  //  street: string,
  //  number: number,
  //  complement: string
  // }
  randomFullAddress()

  //Este método retorna randomicamente um endereco completo, só que de do método buildg
  // O retorno é igual ao do randomFullAddress adicionando apenas o campo bloco
  randomFullAddressBuilding()

```
<h3 id="auto">Dados de automóveis</h3>

```javascript

  //Este método retorn um modelo e marca de modo : Honda Pop 110i,Honda PCX
  motocicle()

  //Este método retorna um nome de carro ex:Sentra S 2.0/ 2.0 Flex Fuel 16V Aut.
  autoName()

  //Este método retorna uma carro de automovel ex: nissan
  autoModel()

  //Este método retorna um carro com nome e modelo
  auto()

  //Este método retprma um array de carros pelo modelo
  //model:string ex: Renault
  // return [...{{ "name": "LOGAN Authentique Hi-Flex 1.0 16V 4p", "marca": "Renault" },
  // { "name": "LOGAN Authentique Hi-Flex 1.6 8V 4p", "marca": "Renault" }} ...]
  autosByModel(model)

  //Este método retorna apenas um carro aleatório pelo modelo
  //model:string ex: Renault
  //{ "name": "LOGAN Authentique Hi-Flex 1.6 8V 4p", "marca": "Renault" }
  autoByModel(model)

  //Este método retorna uma placa de carro com ou sem mascara
  //mask: boolean 
  // true xxx-xxxx
  // false xxxxxxx
  licensePlate(mask)

  //Este método retorna um numero fake de renavam
  renavam()
  //Este método retorna um numero fake de chassi
  chassi()

  //Este método retorna uma categoria aleatória
  //ex: ALUGUEL, PARTICULAR
  category()

  //Este método retorn um tipo aleatório
  //ex:AUTOMÓVEL, MICROÔNIBUS,ÔNIBUS
  type()

  //Este método retorna a cacorrecia
  //ex: AMBULÂNCIA, TRAILER,FURGÃO
  body()

  //Este método retorna o tipo de combustivel do carro
  //ex: ÁLCOOL,DIESEL,GASOGÊNIO
  fuel()

  //Este método retorna a especie do carro
  //ex: CARGA, ESPECIAL, PASSAGEIRO
  specie()

  //Este método retorna as restricoes do veiculo
  //ex: ALIENAÇÃO FIDUCIÁRIA,RESTRIÇÃO POR BENEF. TRIBUTÁRIO
  restrictions()

  //Este método retorna uma cor aleatória de veiculo
  //ex: AMARELO,FANTASIA,PRATA
  color()

  //Este é o método preguiçoso que retorna um carro com todos os dados completos
  //ex: {
  // name: auto.name,
  // model: auto.marca,
  // licencePlate: this.licensePlate(true),
  // chassi: this.chassi(),
  // renavam: this.renavam(),
  // category: this.category(),
  // type: this.type(),
  // body: this.body(),
  // fuel: this.fuel(),
  // specie: this.specie(),
  // restrictions: this.restrictions(),
  // color: this.color(),
  // }
  fullAuto()

  //Este é o método preguiçoso que retorna uma moto com todos os dados completos
  //ex: {
  // name: auto,
  // model: auto.split(' ')[0],
  // licencePlate: this.licensePlate(true),
  // chassi: this.chassi(),
  // renavam: this.renavam(),
  // fuel: 'Gasolina',
  // color: this.color(),
  // }
  fullMotocicle()

```

<h3 id="bank">Dados Bancários</h3>

```javascript
  //Este método retorna um objeto com um banco brasileiro aleatório
  //ex: "code": "001","name": "BANCO DO BRASIL",
  bank()

  //Este método retorna aleatóriamente o nome de um banco brasileiro
  bankName()

  //Este método retorna os tipos de contas bancárias existentes
  //ex: ['CORRENTE', 'PJ', 'POUPANÇA', 'CONJUNTA']
  accountType()

  //Este método retorna uma conta bancaria
  //154787-9
  bankAccountNumber()

  //Este método retorna uma agencia bancaria de 4 digitios
  bankAgency()

  //Este método retorna  o numero de um cartao de crédito valido
  creadCardNumber()

  //Este método retorna um objeto de cartao de crédito completo
  //Ele aceita uma flag como parametro, caso nao seja passado ele escolhe uma das opcoes possiveis.
  //flags = ['VISA', 'MasterCard', 'Amex', 'Diners', 'Discover', 'EnRoute', 'JCB', 'Voyager']
  //ex:{flag:'string', number:'string','ccv',expiration:'string'}
  credCard(flag)

  //Este método cria uma conta bancaria completa com cartao
  //Aceita uma flag para cartao ( como método credCard)
  //ex:  return {
  //code: bank.code,
  //name: bank.name,
  //accountNumber: this.bankAccountNumber(),
  //agency: this.bankAgency(),
  //type: this.accountType(),
  //card: this.credCard(flag)
  // }
  fullBank(flag)
```
<h3 id="gov"> Dados de agências governamentais</h3>

```javascript
   
  //Este método retorna um array de string com conselhos de profissões
  // ex:Advogados: Ordem dos Advogados do Brasil Nacional (OAB) e Ordem dos Advogados do Brasil Seccional (OAB do respectivo estado de atuação)
  professionalCouncilList()

  //Este método retorna apenas um conselho de profissoes aleatório
  //ex:Conselho Federal de Biomedicina (CFBM) e conselhos regionais (CRBM)
  professionalCouncil()

  //Este método retorna um conselho pela sigla
  //sigla:string OMB = Ordem dos Músicos do Brasil (OMB)
  professionalCouncilBySigla(sigla)

  //Este método retorna um array com os supremos tribunais do governo
  //ex:Supremo Tribunal Federal (STF), Tribunal Superior do Trabalho (TST)
  superiorCourtList()
   
  //Este método retorna um array com os tribuinais regionais
  //ex:Tribunal Regional Federal da 3ª Região (TRF3) (MS e SP)
  superiorCourt()
   
  //Este método métodoo retorna apenas um tribunal regional aleatório por vez
  regionalCourt()
    
  //Este método retorna um array com os tribunais de justiça do Brasil
  //ex:Tribunal de Justiça do Ceará (TJCE)
  justiceCourtList()
   
  //Este método retorna apenas um tribunal de justiça aleatório
  //ex: Tribunal de Justiça do Rio de Janeiro (TJRJ)
  justiceCourt()
   
  //Este método retorn um array com os tribunais eleitorais
  //ex: Tribunal Regional Eleitoral do Acre,Tribunal Regional Eleitoral do Ceará
  electoralCourtList()
   
  //Este método retorna um tribunal eleitoral randomico
  //ex:Tribunal Regional Eleitoral de Rondônia
  electoralCourt()

  //Este método retorna um array com os tribunais do trabalho
  //ex:Tribunal Regional Eleitoral do Acre
  workerCourtList()
   
  //Este método retorna uma string com um tribunal do trabalho aleatório
  //ex:Tribunal Regional Eleitoral do Piauí
  workerCourt()
   
  //Este método retorna um array com os tribunais miliares do Brasil
  //ex:Tribunal de Justiça Militar de Minas Gerais (TJMMG)
  militaryCourtList()

  //Este método retorn um tribunal militar aleatório
  militaryCourt()

  //Este método retorna um departamento ou assemblia aleatório da camara dos deputados
  //ex: Ouvidoria Parlamentar,Diretoria-Geral (DG),Departamento de Comissões (Decom)
  chamberOfDeputies()

  //Este método retorna um departamento, partição ou assemblia do senado federal
  //ex:Corregedoria Parlamentar,Conselho Editorial
  federalSenate ()

  //Este método retorna um departamento, partição ou assemblia da casa civil
  //ex:Subchefia de Análise Governamental, Subchefia Adjunta de Gestão Pública
  civilHouse()

  //Este método retorna um ministerio aleatório que é representado por um ministro
  //ex:Agricultura e Pecuária,Comunicações,Esporte,Educação
  ministries()


```
<h3 id="gym">Dados de Academia e treinos</h3>

```javascript
  //Este método retorna um nome fantasia para uma Academia
  //ex: Espaço Fitness
  gymName()

  //Este método retorna um nome aleatório de um equipamento de treino
  //ex: Aparelho de glúteo,Apolete,Puxador,Peck Deck
  machineGymName()

  //Este método retorna um exercicio aleatório
  //ex:Stiff unilateral
  radomExerciseName()
  
  //Este método retorna um array de string com execicios para um grupo muscular
  //0 - coxa. 1 - panturrilha. 2 - peitoral.3 - dorsal. 4 - deltoides.5 - biceps.6 - triceps.
  //type:number
  //ex: exerciseGroup(2)
  //return [
  //"Panturrilha burrinho (gêmeos sentado)",
  //"Panturrilha em pé unilateral",
  //"Panturrilha em pé (bilateral)",
  // ],
  exerciseGroup(type)
  
  //Este método retorna uma técnica especial de musculaçao
  //Ex: Pós-exaustao, SST
  speciaTechniques()
  
  //Este método é muito da hora, pois ele te retorna uma serie de exercicios de forma randômica.
  // O retorno é um array de objetos contendo seu treino com nome, técnica especial e série
  //ex: [ {name: "Supino com barra", especialTechnique: "SST", serie: 3x10 }, 
  // {name: "cruzamento de cabos", especialTechnique: "Sem técnica especial", serie: 5x12 } ]
  radomWorkout()
  
  //Este método retorna uma semana completa de treinos.
  //Retorna um array de arrays onde a chave é o dia da semana e contendo o treino daquele dia.
  // dias da semana 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
  //ex:[
  // monday: [
  //{
  //name: 'flexão de braço fechado (Apoio mãos fechadas)',
  //especialTechnique: 'Drop-set',
  //serie: '5x15'
  //},
  //{
  //name: 'Tríceps coice com halteres',
  //especialTechnique: 'Sem técnica especial',
  //serie: '4x12'
  //},
  //{
  //name: 'Mergulho com mãos apoiadas no banco',
  //especialTechnique: 'Pós-exaustao',
  //serie: '5,20'
  //}
  //..
  weekWorkout()
```
<h3 id="health">Dados de instituições de saúde (hospital, veterinária, odonto)</h3>

```javascript

  //Este metodo retorna um nome aleagorio de uma unidade de saude/hospital
  //ex:Unidade de pronto atendimento Joaquim Melo, Hospital Santa izabel
  hospital()

  //Este metodo retorna uma especialidade médica
  //ex:Podólogo,Nefrologista,Cirurgião
  medicSpecialist()

  //Este metodo retorna um tipo de exame médico
  //ex:hemograma,teste ergométrico,ultrassonografia transvaginal
  medicalExams()

  //Este metodo retorna o nome de uma clínica odontologica
  //ex:Centro do Sorriso,Pronto Odonto,Mundial dentes
  dental()

  //Este metodo retorna uma lista de exames odontologicos
  //ex:Rx interproximal (“bitewing”),Telerradiografia sem traçado
  dentalExams()

  //Este metodo retorna uma especialidade odontologica
  //ex:Endodontia,Ortodontia
  dentalSpecialist()

  //Este metodo retorna o nome de uma clinica veterinaria
  //ex:Clínica Veterinária e Pet Shop Amigo Animal,Saudavel Cão
  veterinarian()

  //Este metodo retorna uma lista de exames veterinarios
  //ex:PARR: Diagnóstico e Imunofenotipagem de linfomas,Anaplasma spp
  vetExams()

  //Este metodo retorna uma especialidade veterinaria
  //ex:patologia,nefrologia e urologia
  vetSpecialist()

```
<h3 id="internet">Dados de internet</h3>

```javascript
  //Este método vai ter retornar um ip fake
  ip();

  //Este metodo vai te retornar um objecto dados fakes de uma network
  //ex de retorno {
  // ip: string,
  // maske: string,
  // bitmask: string,
  // hostmask: strin,
  // broadcast: string,
  // size: string,
  // first: string,
  // las: string,
  // }
  network()

  //Este método vai te retornar um dominio fake
  //domain:string caso queira passar um nome base de criacao
  //https:boolean caso queria informar para que seja gerado um https
  //ex retorno: http://emagrecercomsaude.com.br
  domain(domain = null, https = false)
```
<h3 id="market">Dados de Mercado (super mercado, eletrônicos, eletrodomésticos, farmácia)</h3>

```javascript
  //Este metodo retorna um objeto produto de supermercado
  //complete:boolean = informa se o produto deve ser retornado com seu fornecedor
  //ex:{`product:'string', price: number, date:string, supplier:object}
  marketProduct(complete = false)

  //Este metodo gera uma lista de fornecedores com seus produtos
  //products:number = informa quantos produtos voce deseja por fonecedores
  //supplier:number = quantidade de fornecedores que voce quer gerar
  //ex:[{supplier: supp,products: productsList},{supplier: supp,products: productsList}]
  //Onde supplier e o metodo de gerador de industria e o producto e uma array com o metodo marketProduct
  generateMarketBySupplier(products, supplier)

  //Este metodo retorna um objeto produto de farmácia
  //complete:boolean = informa se o produto deve ser retornado com seu fornecedor
  //ex:{`product:'string', price: number, date:string,supplier:object}
  drugStoreProducts(complete = false)

  //Este metodo gera uma lista de fornecedores de Medicamentos com seus produtos
  //products:number = informa quantos produtos voce deseja por fonecedores
  //supplier:number = quantidade de fornecedores que voce quer gerar
  //ex:[{supplier: supp,products: productsList},{supplier: supp,products: productsList}]
  //Onde supplier e o metodo de gerador de industria e o producto e uma array com o metodo drugStoreProducts
  generateDrugStoreBySupplier(products, supplier)

  //Este metodo retorna um objeto produto de Eletrônico
  //complete:boolean = informa se o produto deve ser retornado com seu fornecedor
  //ex:{`product:'string', price: number, date:string,supplier:object}
  eletronicProducts(complete = false)


  //Este metodo gera uma lista de Eletrônico de Medicamentos com seus produtos
  //products:number = informa quantos produtos voce deseja por fonecedores
  //supplier:number = quantidade de fornecedores que voce quer gerar
  //ex:[{supplier: supp,products: productsList},{supplier: supp,products: productsList}]
  //Onde supplier e o metodo de gerador de industria e o producto e uma array com o metodo eletronicProducts
  generateEletronicSupplier(products, supplier)

  //Este metodo retorna um objeto produto de Informática
  //complete:boolean = informa se o produto deve ser retornado com seu fornecedor
  //ex:{`product:'string', price: number, date:string,supplier:object}
  pcProducts(complete=false)

  //Este metodo gera uma lista de Eletrônico de Informática com seus produtos
  //products:number = informa quantos produtos voce deseja por fonecedores
  //supplier:number = quantidade de fornecedores que voce quer gerar
  //ex:[{supplier: supp,products: productsList},{supplier: supp,products: productsList}]
  //Onde supplier e o metodo de gerador de industria e o producto e uma array com o metodo pcProducts
  generatepcProductsSupplier(products, supplier)

  //Este metodo retorna um modelo de celular
  //ex:Motorola, Galaxy S20 FE 5G Azul-Marinho
  cellPhoneModel()

  //Este metodo retorna um item de material de construcao
  //Ex:Broxa p / pintura,Conexão simples para torneira
  construction()

  //Este metodo retorna um Array de string com um computador e sua configuracao completa
  //ex: [
  // 'Intel Core i5-10210U (10ª geração);',
  // 'SSD de 512GB;',
  // '8GB de memória RAM;',
  // 'Tela de 15.6" com resolução HD;',
  // 'Windows 10;',
  // 'Uma porta USB 2.0 e uma porta USB 3.0;',
  // 'HDMI.',
  // ]
  pc()

  //Este metodo retorna um objeto produto de Vestuário
  //complete:boolean = informa se o produto deve ser retornado com seu fornecedor
  //ex:{`product:'string', price: number, date:string,gender:string, size:string, color:string, supplier:object}
  clothesProduct(complete)

  //Este metodo gera uma lista de Eletrônico de Informática com seus produtos
  //products:number = informa quantos produtos voce deseja por fonecedores
  //supplier:number = quantidade de fornecedores que voce quer gerar
  //ex:[{supplier: supp,products: productsList},{supplier: supp,products: productsList}]
  //Onde supplier e o metodo de gerador de industria e o producto e uma array com o metodo clothesProduct
  generateClothesProductsSupplier(products, supplier)

```
<h3 id="industry">Dados da indústria</h3>

```javascript

  //Este metodo retorna o nome de uma profissao de forma aleatoria
  //ex:Administrador de Banco de Dados,Advogado,Aeronauta
  job()

  //Este metodo retorna o nome de uma empresa 
  //ex:Grupo  Figueiras LTDA, Empresa Josue dos Santos MEI
  enterprise()

  //Este metodo retorna um numero valido de cnpj
  //mask:boolean true para mascara padrao do cnpj 
  cnpj(mask = false)

  //Este metodo retorna um ramo de atividade
  //ex: Casa e Decoração,Empresas de Telemarketing,Fotografia
  activity()

  //Este metodo retorna um objeto que é uma empresa com todos seus dados completos
  //activity:string  caso queria passar um ramo de atividade
  //ex:{
  // name: string,
  // cnpj: string,
  // inscription: string,
  // openDate: string
  // activity: string,
  // site: string,
  // email:string,
  // phone: string,
  // cellPhone: string,
  // address: object => randomFullAddress no modulo de endereços,
  // }
  fullEnterPrise(activity = null)

  //Este metodo cria os dados de uma nota fiscal eletronica
  //ex:{
  //number: RandomArrayElement.randomStringOnlyNumbers(3),
  // serie: 1,
  // inOrOut: string => ex['ENTRADA', 'SAIDA'],
  // accessKey: string,
  // operation: string => ex['Venda de Produto', 'Prestação de Serviços', 'Remessa', 'Consignação', 'Transferência', 'Devolução', 'Devolução de mercadoria', 'Importação', 'Exportação'],
  // autorizationProtocol: string,
  // crt: string,
  // inscription: string,
  // cpnpj:string,
  // date: string,
  // baseIcms: string,
  // icms: string,
  // value: string,
  // weight:string
  // }
  nfe()

```
<h3 id="univerity">Dados de Universidades</h3>

```javascript
  //Este método retorna um objecto com dados randomicos de uma universiade brasileira
  //incluindo as Miliatares
  //ex:
  // {"universidade": "ACADEMIA DA POLÍCIA CIVIL DO ESTADO DA BAHIA",
  // "sigla": "ACADEPOL",
  // "uf": "BA"}
  getUniversity()

  //Este método retorna uma sigla de uma univerisade aleatoria
  //ex: ASMEC,UNIAN,UNEST,UNIME
  getUniversitySigla()

  //Este método retorna um nome aleatório de uma universidade brasileira
  //ex: UNIÃO DE ENSINO SUPERIOR DE VIÇOSA,UNIÃO DAS ESCOLAS DO GRUPO FAIMI DE EDUCAÇÃO
  getUniveristyName()

```

<h3 id="sports">Dados de Esportes</h3>

```javascript

  //Este metodo retorna o nome de um time de futebol brasileiro de forma randomica
  //:extlético Tubarão,Confiança,Ferroviário
  getRandomBrazilianTeam()

  //Este metodo retorna de forma aleatoria o nome de ume campeonato de futebol Brasileiro
  //ex:Copa do Nordeste,Copa do Brasil Sub-17,Libertadores
  getRandomChampionShip()

  //Este metodo retorna ume estadio Brasileiro com suas caracteristicas
  //ex:Nilton Santos, Rio de Janeiro, Rio de Janeiro RJ, Gov. Municipal, Capacidade: 46.831
  getRandomStadium()

  //Este metodo retorna o resultado aleatorio de uma partida de futebol
  //ex: Flamengo 4 X 0 Bragantino
  randomFootballMatch()

  //Este metodo retorna uma posicao de um atleta
  //ex: Atacante, Goleiro
  soccerPosition()

  //Este metodo retorna um time de futebol completo
  //ex:{
  // name:string
  // team:array<object> -> retorna um array com os jogadores e suas posicoes{ name, position}
  //}
  soccerFullTeam()

  //Este metodo retorna aleatoriamente um time de basquete Brasileiro
  //ex:Bauru Basket (São Paulo)
  basketTeam()

  //Este metodo retorna aleatoriamente uma partida de basqueteerentes
  //ex:C.R. Flamengo (Rio de Janeiro) 120 X 98 Lobos Brasília
  basketTeamMatch()

```
 
<h3 id="image">Dados de Imagens</h3>

```javascript
  //Todos os metodo do Gerador de Imagens sao async
  //Todos os metodos retornam uma url que voce pode acessar para utilizar a imagem fake
  //ex:https://xsgames.co/randomusers/assets/avatars/male/37.jpg

  //Este metodo gera um avatar aleatorio
  //gender:string => male | female
  async getAvatarImage(gender)

  //Este metodo gera uma imagem randomica e abstrata
  //width:number, height:number
  async getImageRandom(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de carros
  //width:number, height:number
  async getCarImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de carros
  //width:number, height:number
  async getCarImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de animais
  //width:number, height:number
  async getAnimalImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de uma cidade
  //width:number, height:number
  async getCityImage(width = 640, height = 480)

  
  //Este metodo gera uma imagem randomica  de gatos
  //width:number, height:number
  async getCatImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de negocios
  //width:number, height:number
  async getBusinessImage(width = 640, height = 480)


  //Este metodo gera uma imagem randomica  de moda
  //width:number, height:number
  async getFashionImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de comidas
  //width:number, height:number
  async getFoodImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  da natureza
  //width:number, height:number
  async getNatureImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  da vida noturna
  //width:number, height:number
  async getNightlifeImage(width = 640, height = 480)


  //Este metodo gera uma imagem randomica  de pessoas
  //width:number, height:number
  async getPeopleImage(width = 640, height = 480)

  //Este metodo gera uma imagem randomica  de esportes
  //width:number, height:number
  async getSportsImage(width = 640, height = 480)

  
  //Este metodo gera uma imagem randomica tecnica/mecanica/computacao/pecas
  //width:number, height:number
  async getTechnicsImage(width = 640, height = 480)


  //Este metodo gera uma imagem randomica  de transportes
  //width:number, height:number
  async getTransportImage(width = 640, height = 480)
```

<h3 id="music">Dados Musicais</h3>

```javascript

  //Este metodo retorna o nome um festival de musica brasileiro
  //ex:LOLLAPALOOZA,XXXPERIENCE
  musicFestival()

  //Este metodo retorna o nome de uma casa de shows brasileira
  //ex:Rodeo Rock Bar
  eventsHouse()

  //Este metodo retorna um estilo musical aleatorio
  //Ex:emo,pop,progressivo
  musicalStyle()

  //Este metodo retorna uma marca de guitarra
  //Ex:Golden,LTD,Fender
  guitars()

  //Este metodo retorna um instrumento musical de percussao
  //ex:carrilhão,metalofone,pandeiro,bateria
  percussionMusicalInstrument()

  //Este metodo retorna um instrumento musical de sopro aleatorio
  //ex:fagote,sousafone,trompa
  windMusicalInstrument()

  //Este metodo retorna um instrumento musical de corta aleatorio
  //ex: Guitarra, Cavaquinho, Baixo
  stringMusicalInstrument()

  //Este metodo retorna um instrumento eletornico aleatorio
  //ex:sintetizador,teremim,teclado
  eletronicMusicalInstrument()
```

<h3 id="social">Dados Redes Sociais, Textos, Noticias</h3>

```javascript

  //Este metodo retorna um comentario aleatório positivo para redes sociais
  //ex: Que incrível!, Adoreii!, Que legal! 🤩
  positiveComment()

  //Este metodo retorna um comentário aleatorio negaivo para redes sociais
  //ex: Infelizmente não gostei!
  negativeComment()

  //Este metodo retorna um array de parafragros com um texto sobre esporte (futebol)
  //paragraph:number => Por default são gerados 3 paragrafos, caso voce queira um texto maior é só passar a quantidade.
  sportText(paragraph = 3)
```