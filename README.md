<h1 align="center">Padaria Virtual - Backend</h1>


## Visão Geral

Este é o projeto de backend de uma padaria virtual, que oferece funcionalidades para clientes e administradores. Os administradores têm permissões especiais para gerenciar produtos, categorias, ofertas, pedidos e atualizar o status dos pedidos. Os clientes podem adicionar produtos ao carrinho, fazer pedidos, visualizar seus pedidos anteriores e verificar o status de seus pedidos atuais.

## Funcionalidades:

### Administrador:

O administrador tem acesso a todas as funcionalidades do sistema e pode criar, editar e excluir produtos e categorias, colocar produtos em promoção, além de ter controle sobre os pedidos do cliente. Algumas das funcionalidades que o administrador pode realizar são:

- Criar, editar e excluir produtos e categorias;
- Colocar produtos em promoção;
- Visualizar todos os pedidos realizados pelos clientes;
- Alterar o status do pedido (pedido realizado, pedido em preparação, pedido entregue, entre outros).

### Cliente:

O cliente pode visualizar os produtos disponíveis, adicioná-los ao carrinho e fazer o pedido. Ele também pode visualizar seu histórico de pedidos anteriores e o status atual do pedido. Algumas das funcionalidades que o cliente pode realizar são:

- Visualizar os produtos disponíveis;
- Adicionar produtos ao carrinho de compras;
- Finalizar a compra;
- Visualizar seus pedidos anteriores e o status atual do pedido.

## Tecnologias Utilizadas: 

- [Node.js](https://nodejs.org/en): Uma plataforma JavaScript que permite construir aplicações do lado do servidor de forma eficiente e escalável.
- [Express](https://expressjs.com/pt-br/): Um framework de aplicativo web para Node.js que fornece uma abordagem rápida e mínima para construir APIs RESTful.
- [PostgreSQL](https://www.postgresql.org/): Um banco de dados relacional poderoso e de código aberto.
- [Docker](https://www.docker.com/): Uma plataforma de virtualização que permite criar, implantar e executar aplicativos em contêineres.
- [Prisma](https://www.prisma.io/): Um ORM (Object Relational Mapping) para Node.js que facilita a interação com bancos de dados, incluindo o PostgreSQL.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Uma biblioteca de criptografia utilizada para garantir a segurança das senhas dos usuários armazenadas no banco de dados.
- [JWT (JSON Web Token)](https://jwt.io/): Um método seguro para autenticação e troca de informações entre partes, utilizado para autenticação de usuários.


## Como Iniciar o Projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com [npm](http://npmjs.com)) instalado em seu computador. Certifique-se de ter o [PostgreSQL](https://www.postgresql.org/) e o [Docker](https://www.docker.com/) instalados em sua máquina.

```bash
# Clone o repositório do projeto para sua máquina local.
$ git clone https://github.com/miguelfiais/bakery.git

# instale as dependências do projeto.
$ npm install

# Inicie o container do PostgreSQL utilizando o Docker.
$ docker-compose up -d

# Crie as tabelas do banco de dados utilizando o Prisma.
$ npx prisma migrate dev

# inicie o servidor do backend.
$ npm run dev
```

## Considerações Finais

Este projeto de backend de padaria virtual é uma solução completa para gerenciar produtos, categorias, ofertas e pedidos de clientes. Com uma autenticação segura baseada em JWT, um banco de dados PostgreSQL e o Prisma como ORM, o projeto é escalável e pode ser facilmente integrado com outros sistemas.









