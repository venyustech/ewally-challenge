# Desafio da Ewally

rede de recomendações de amigos

## Tecnologias

As seguintes ferramentas e frameworks foram usados na construção do projeto:

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)

## Link do deploy:
[ewally-challenge.onrender.com](https://ewally-challenge.onrender.com)

## Testes no Postman:

Caso queira ter acesso a todas as rotas de maneira mais prática, você pode acessar [clicando aqui](https://www.postman.com/warped-robot-193763/workspace/ewally-testes/collection/20979079-3e487873-4028-46f5-befc-d691f8cc3477)
PS: lembre de adicionar o valor da variavel  HOST está rodando o link de deploy. Caso queira, mude para localhost

## Modo do desenvolvedor:

Para executar isso no modo dev, você deve usar o ambiente Node.

Então você tem que:

### Clonar esse repositório:

$ git clone git@github.com:venyustech/ewally-challenge.git

### Instalar as dependencias:

$ npm install

### Adicionar .env

duplique a rota .env.exemple e renomeie apenas para ".env" - Dentro desse arquivo, mude "NODE_ENV=development_or_test" para "NODE_ENV=development"

### Adicionar .env.test

duplique a rota .env.exemple e renomeie apenas para ".env.test" - Dentro desse arquivo, mude "NODE_ENV=development_or_test" para "NODE_ENV=test"

### Rodar na sua máquina:

$ npm run dev

#### Rodar testes:

$ npm run test

#### E aproveite :)

###Rotas implementadas:

##### Create Person - [POST] localhost:3000/person

    entrada:
    {
      "cpf": "12345678909",
      "name": "Joaozinho"
    }

##### Get Person - [GET] localhost:3000/person/:CPF

##### Clean - [DELETE] localhost:3000/clean

##### Create Relationship - [POST] localhost:3000/relationship

    entrada:
    {
      "cpf1": "11111111111",
      "cpf2": "22222222222"
    }

##### Get Recommenda"ons - [GET] localhost:3000/recommendations/:CPF
