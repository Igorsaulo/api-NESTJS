<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
A API utiliza o framework NestJS, que é baseado em Node.js e fornece uma estrutura robusta para construir aplicativos da web escaláveis. A autenticação é implementada usando JWK, que é um padrão para representar e transmitir chaves criptográficas em formato JSON. Além disso, a API permite o registro de usuários.

A estrutura geral da API inclui os seguintes componentes principais:

Controladores (Controllers): Os controladores definem os pontos de extremidade (endpoints) da API que podem ser acessados pelos clientes. Eles lidam com as requisições HTTP recebidas e direcionam as chamadas para os serviços apropriados.

Serviços (Services): Os serviços contêm a lógica de negócio da API. Eles lidam com a manipulação de dados, chamadas a bancos de dados ou serviços externos e executam as operações necessárias para atender às requisições dos controladores.

Modelos de dados (Data Models): Os modelos de dados definem a estrutura dos objetos usados pela API. No contexto de registro de usuário, pode haver um modelo de dados para representar um usuário, contendo propriedades como nome, email e senha.

Rotas protegidas (Protected Routes): A API possui rotas que requerem autenticação para acessar. Isso é alcançado usando middlewares de autenticação que verificam a validade dos tokens JWK fornecidos pelos clientes.

Banco de dados (Database): A API se integra a um banco de dados para armazenar informações dos usuários registrados. Isso pode ser feito usando um banco de dados relacional (por exemplo, MySQL, PostgreSQL) ou um banco de dados NoSQL (por exemplo, MongoDB).

Autenticação usando JWK (JWK Authentication): A autenticação é realizada utilizando tokens JWK. O cliente envia um token JWK válido nas requisições protegidas e o servidor verifica a validade do token antes de fornecer acesso aos recursos protegidos.

Registro de usuário (User Registration): A API fornece um ponto de extremidade (endpoint) para que os clientes possam se registrar. Os clientes enviam os detalhes do novo usuário (como nome, email e senha) e a API cria um novo registro no banco de dados.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
