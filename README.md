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
Criamos uma nova instância da classe SuperFakerBrasil e estamos pronto para utilizar toda nossa biblioteca.
Essa super classe estende de todas as outras através, criando assim uma super classe fake

```javascript
const fakerBrasil = new SuperFakerBrasil();
```
Prontinho! Estamos prontos para utilizar e criar dados fakes. 
Nossa biblioteca hoje conta com diversos métodos de criação de dados que estão distribuídos em 
11 classes geradoras!

 ### Geradores
 * <a href="#peronal"> Dados pessoais</a></a>
 * <a href="#anddress"> Dados de endereço</a>
 * <a href="#auto"> Dados de automóveis </a>
 * <a href="#bank"> Dados Bancários</a>
 * <a href="#gov"> Dados de agência governamentais, </a>
 * <a href="#gym"> Dados de Academia e treinos, </a>
 * <a href="#health"> Dados de instituições de saúde (hospital, veterinária, odonto)</a>
 * <a href="#internet"> Dados de internet, </a>
 * <a href="#market"> Dados de Mercado (super mercado, eletrônicos, eletrodomésticos, farmácia), </a>
 * <a href="#industry"> Dados da indústria, </a>
 * <a href="#univerity"> Dados de Universidades.</a>
 * <a href="#univerity"> Dados geograficos - DESENVOLVIMENTO.</a>
 * <a href="#univerity"> Dados imagens - DESENVOLVIMENTO.</a>
 * <a href="#univerity"> Dados sportes - DESENVOLVIMENTO.</a>


<h3 id="p">Dados Pessoais</h3>

```javascript
    //Este metodo retorna um nome simples ex: Lucas, Pedro, Sara
    firstName() 

    //Este metodo retorna um sobre nome ex: Balestre, Cenedesi, Ferari,Leoardes
    lastName() 

    //Este metdo retorna um nome completo:  Lucas Betini soares de almeida
    fullName()

    //Retorna um rg fake
    rg()
    
    // Este metodo retorn um cpf valido com mascara ou nao...
    // false: 12345678955
    // true:  123.456.789-55
    cpf(points = false)


    // Este metodo retorn um email com ou sem um prefixo
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

    //Este metodo é bem da hora e preguiçoso! Ele te retorna uma pessoa com dados completo!
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

    //Este metodo te retorna uma pessoa completa com menos de 18 anos de 
    //idade com base no ano corrente
    newPersonYounger()

    //Este metodo te retorna uma pessoa adulta completa com mais de 18 e menos de 60 anos
    newAdultPerson()

    //Este metodo te retorna uma pessoa idosa completa com mais de 60 anos
    newOlderPerson()

```
<h3 id="anddress">Dados de endereço</h3>

```javascript
  //Este metodo é um quebra galho e busca um cep diretamente nos correios
  async getAddressByCepCorreio(cep)

  //Este metodo gera um cep randomico
  randomCep()

  //Este metodo gera um cep randomigo pela localidade
  //location:location  ex: SP, RJ, MG, ES
  randomCepByState(location)

  //Este metodo gera um nome de rua alatorio
  street()

  //Este metodo gera um nome de bairro fake
  neighborhood()

  //Este metodo gera randomicamente um condominio, conunto, predio, edificil etc...
  //ex: Condominio Juares de Padua
  building()

  //Este metodo retorna uma cidade aleatoria
  city()

  //Metoto retorna um estado brasileiro aleatorio
  state()

  //Este metodo gera randomicamente um endereco completo
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

  //Este metodo retorna randomicamente um endereco completo, só que de do metodo buildg
  // O retorno é igual ao do randomFullAddress adicionando apenas o campo bloco
  randomFullAddressBuilding()

```
<h3 id="auto">Dados de automóveis</h3>

```javascript

  //Este metodo retorn um modelo e marca de modo : Honda Pop 110i,Honda PCX
  motocicle()

  //Este metodo retorna um nome de carro ex:Sentra S 2.0/ 2.0 Flex Fuel 16V Aut.
  autoName()

  //Este metodo retorna uma carro de automovel ex: nissan
  autoModel()

  //Este metodo retorna um carro com nome e modelo
  auto()

  //Este metodo retprma um array de carros pelo modelo
  //model:string ex: Renault
  // return [...{{ "name": "LOGAN Authentique Hi-Flex 1.0 16V 4p", "marca": "Renault" },
  // { "name": "LOGAN Authentique Hi-Flex 1.6 8V 4p", "marca": "Renault" }} ...]
  autosByModel(model)

  //Este metodo retorna apenas um carro aleatorio pelo modelo
  //model:string ex: Renault
  //{ "name": "LOGAN Authentique Hi-Flex 1.6 8V 4p", "marca": "Renault" }
  autoByModel(model)

  //Este metodo retorna uma placa de carro com ou sem mascara
  //mask: boolean 
  // true xxx-xxxx
  // false xxxxxxx
  licensePlate(mask)

  //Este metodo retorna um numero fake de renavam
  renavam()
  //Este metodo retorna um numero fake de chassi
  chassi()

  //Este metodo retorna uma categoria aleatoria
  //ex: ALUGUEL, PARTICULAR
  category()

  //Este metodo retorn um tipo aleatorio
  //ex:AUTOMÓVEL, MICROÔNIBUS,ÔNIBUS
  type()

  //Este metodo retorna a cacorrecia
  //ex: AMBULÂNCIA, TRAILER,FURGÃO
  body()

  //Este metodo retorna o tipo de combustivel do carro
  //ex: ÁLCOOL,DIESEL,GASOGÊNIO
  fuel()

  //Este metodo retorna a especie do carro
  //ex: CARGA, ESPECIAL, PASSAGEIRO
  specie()

  //Este metodo retorna as restricoes do veiculo
  //ex: ALIENAÇÃO FIDUCIÁRIA,RESTRIÇÃO POR BENEF. TRIBUTÁRIO
  restrictions()

  //Este metodo retorna uma cor aleatoria de veiculo
  //ex: AMARELO,FANTASIA,PRATA
  color()

  //Este é o metodo preguiçoso que retorna um carro com todos os dados completos
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

  //Este é o metodo preguiçoso que retorna uma moto com todos os dados completos
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
  //Este metodo retorna um objeto com um banco brasileiro aleatorio
  //ex: "code": "001","name": "BANCO DO BRASIL",
  bank()

  //Este metodo retorna aleatoriamente o nome de um banco brasileiro
  bankName()

  //Este metodo retorna os tipos de contas bancarias existentes
  //ex: ['CORRENTE', 'PJ', 'POUPANÇA', 'CONJUNTA']
  accountType()

  //Este metodo retorna uma conta bancaria
  //154787-9
  bankAccountNumber()

  //Este metodo retorna uma agencia bancaria de 4 digitios
  bankAgency()

  //Este metodo retorna  o numero de um cartao de crédito valido
  creadCardNumber()

  //Este metodo retorna um objecto de cartao de credito completo
  //Ele aceita uma flag como parametro, caso nao seja passado ele escolhe uma das opcoes possiveis.
  //flags = ['VISA', 'MasterCard', 'Amex', 'Diners', 'Discover', 'EnRoute', 'JCB', 'Voyager']
  //ex:{flag:'string', number:'string','ccv',expiration:'string'}
  credCard(flag)

  //Este metodo cria uma conta bancaria completa com cartao
  //Aceita uma flag para cartao ( como metodo credCard)
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
<h3 id="gov"> Dados de agência governamentais</h3>

```javascript
   
  //Este metodo retorna um array de string com conselhos de profissões
  // ex:Advogados: Ordem dos Advogados do Brasil Nacional (OAB) e Ordem dos Advogados do Brasil Seccional (OAB do respectivo estado de atuação)
  professionalCouncilList()

  //Este metodo retorna apenas um conselho de profissoes aleatorio
  //ex:Conselho Federal de Biomedicina (CFBM) e conselhos regionais (CRBM)
  professionalCouncil()

  //Este metodo retorna um conselho pela sigla
  //sigla:string OMB = Ordem dos Músicos do Brasil (OMB)
  professionalCouncilBySigla(sigla)

  //Este metodo retorna um array com os supremos tribunais do governo
  //ex:Supremo Tribunal Federal (STF), Tribunal Superior do Trabalho (TST)
  superiorCourtList()
   
  //Este metodo retorna um array com os tribuinais regionais
  //ex:Tribunal Regional Federal da 3ª Região (TRF3) (MS e SP)
  superiorCourt()
   
  //Este metodo metodoo retorna apenas um tribunal regional aleatorio por vez
  regionalCourt()
    
  //Este metodo retorna um array com os tribunais de justiça do Brasil
  //ex:Tribunal de Justiça do Ceará (TJCE)
  justiceCourtList()
   
  //Este metodo retorna apenas um tribunal de justiça aleatorio
  //ex: Tribunal de Justiça do Rio de Janeiro (TJRJ)
  justiceCourt()
   
  //Este metodo retorn um array com os tribunais eleitorais
  //ex: Tribunal Regional Eleitoral do Acre,Tribunal Regional Eleitoral do Ceará
  electoralCourtList()
   
  //Este metodo retorna um tribunal eleitoral randomico
  //ex:Tribunal Regional Eleitoral de Rondônia
  electoralCourt()

  //Este metodo retorna um array com os tribunais do trabalho
  //ex:Tribunal Regional Eleitoral do Acre
  workerCourtList()
   
  //Este metodo retorna uma string com um tribunal do trabalho aleatorio
  //ex:Tribunal Regional Eleitoral do Piauí
  workerCourt()
   
  //Este metodo retorna um array com os tribunais miliares do Brasil
  //ex:Tribunal de Justiça Militar de Minas Gerais (TJMMG)
  militaryCourtList()

  //Este metodo retorn um tribunal militar aleatorio
  militaryCourt()

  //Este metodo retorna um departamento ou assembleia aleatorio da camara dos deputados
  //ex: Ouvidoria Parlamentar,Diretoria-Geral (DG),Departamento de Comissões (Decom)
  chamberOfDeputies()

  //Este metodo retorna um departamente, partição ou assembleia do senado federal
  //ex:Corregedoria Parlamentar,Conselho Editorial
  federalSenate ()

  //Este metodo retorna um departamente, partição ou assembleia da casa civil
  //ex:Subchefia de Análise Governamental, Subchefia Adjunta de Gestão Pública
  civilHouse()

  //Este metodo retorna um ministerio aleatorio que é representado por um ministro
  //ex:Agricultura e Pecuária,Comunicações,Esporte,Educação
  ministries()


```
<h3 id="gym">Dados de Academia e treinos</h3>

```javascript
```
<h3 id="health">Dados de instituições de saúde (hospital, veterinária, odonto)</h3>

```javascript
```
<h3 id="internet">Dados de internet</h3>

```javascript
```
<h3 id="market">Dados de Mercado (super mercado, eletrônicos, eletrodomésticos, farmácia)</h3>

```javascript
```
<h3 id="industry">Dados da indústria</h3>

```javascript
```
<h3 id="univerity">Dados de Universidades</h3>

```javascript
```

 