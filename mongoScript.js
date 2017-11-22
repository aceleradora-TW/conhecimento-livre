db = connect("localhost:27017/conhecimento-livre-dev");

db.authors.insert({
name: "Waldemar Neto",
bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
email: "waldemar@exemplo.com",
photourl: "https://yt3.ggpht.com/-W7_0SI56z2k/AAAAAAAAAAI/AAAAAAAAAAA/_4eiB3q8lTQ/s288-c-k-no-mo-rj-c0xffffff/photo.jpg",
courses:[
  {
  _id: new ObjectId(),
  title: 'Node.js API testável',
  description: 'Nesta série vamos criar uma API em Node.js com testes de unidade, integração e contrato.',
  author:'Waldemar Neto',
  details: '',
  duration: '4 horas',
  publication: 17/05/2017,
  lessons: 16,
  language: 'javascript',
  image: 'http://i1.ytimg.com/vi/l4glc0XNVbM/mqdefault.jpg',
  contents:
    [
      {
        _id: new ObjectId(),
        title: "Setup com ES6 + Babel + Express",
        author: "Waldemar Neto",
        type: "video",
        url: "l4glc0XNVbM",
        preview: "Começando a serie de Node.js API testável vamos fazer o setup do nosso ambiente, configurar o nosso transpilador para poder usar a ultima versão do Ecmascript o Ecmascript6.",
        views: 51
        },
        {
        _id: new ObjectId(),
        title: "Integration tests com Mocha, Chai e supertest",
        author: "Waldemar Neto",
        type: "video",
        url: "CTz5pCnZ03k",
        preview: "No segundo video  da serie de Node.js API testável vamos fazer o setup do nosso ambiente de testes, começaremos pelo teste de integração que vai nos guiar no design da nossa API.",
        views: 19
      },
      {
        _id: new ObjectId(),
        title: "Routes e Database com Sequelize e Sqlite3",
        author: "Waldemar Neto",
        type: "video",
        url: "ixvwD1ZMGLk",
        preview: "No terceiro video da serie de Node.js API testável vamos configurar o nosso app e também as rodas da nossa API.",
        views: 12
      },
      {
        _id: new ObjectId(),
        title: "Models com Sequelize",
        author: "Waldemar Neto",
        type: "video",
        url: "J3IQVGSMkLI",
        preview: "Na quarta parte da série de  Node.js API testável vamos configurar nossos Models, usaremos os models do Sequelize.",
        views: 11
      },
      {
        _id: new ObjectId(),
        title: "Operações de CRUD (Create, Read, Update, Delete)",
        author: "Waldemar Neto",
        type: "video",
        url: "arVY-N0RNPQ",
        preview: "No quinto video da serie de Node.js API testável vamos fazer as operações de CRUD da nossa API e também fazer testes para elas para garantir a funcionalidade.",
        views: 16
      }
    ]
  }]
  })
