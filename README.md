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

<strong>Dados pessoais, dados de automóveis, Dados Bancários, Dados de agência governamentais, 
Dados de Academia e treinos, dados de instituições de saúde (hospital, veterinária, odonto), 
dados de internet, dados de Mercado (super mercado, eletrônicos, eletrodomésticos, farmácia), 
dados da indústria, dados de Universidades.</strong>

## Metodo de dados pessoais

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
    // @param {boolean} points
    cpf(points = false)


    // Este metodo retorn um email com ou sem um prefixo
    // null: radom@radom.com.br ou .pt
    // firstName:  firstName@radom.com.br ou pt
    // @param {boolean} points
    email(firstName = null)


```