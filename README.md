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
npm install faker-brasil
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
Nossa biblioteca hoje conta com diversos métodos de criação de dados fakes que estão distribuídos em 
11 classes geradoras de dados fakes!

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

  //Este metodo retorna randomicamente um endereco compleot, só que de do metodo buildg
  // O retorno é igual ao do randomFullAddress adicionando apenas o campo bloco
  randomFullAddressBuilding()

```
<h3 id="auto">Dados de automóveis</h3>

```javascript
```

<h3 id="bank">Dados Bancários</h3>

```javascript
```
<h3 id="gov"> Dados de agência governamentais</h3>

```javascript
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

 