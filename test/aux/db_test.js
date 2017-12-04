const db = [{
  name: "Waldemar Neto",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  email: "waldemar@exemplo.com",
  photourl: "https://yt3.ggpht.com/-W7_0SI56z2k/AAAAAAAAAAI/AAAAAAAAAAA/_4eiB3q8lTQ/s288-c-k-no-mo-rj-c0xffffff/photo.jpg",
  courses:[
    {
      _id: 1,
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
          _id: 2,
          title: "Setup com ES6 + Babel + Express",
          author: "Waldemar Neto",
          type: "video",
          url: "l4glc0XNVbM",
          preview: "Começando a serie de Node.js API testável vamos fazer o setup do nosso ambiente, configurar o nosso transpilador para poder usar a ultima versão do Ecmascript o Ecmascript6.",
          views: 51
        },
        {
          _id: 3,
          title: "Integration tests com Mocha, Chai e supertest",
          author: "Waldemar Neto",
          type: "video",
          url: "CTz5pCnZ03k",
          preview: "No segundo video  da serie de Node.js API testável vamos fazer o setup do nosso ambiente de testes, começaremos pelo teste de integração que vai nos guiar no design da nossa API.",
          views: 19
        }
      ]
    }],
  },
  {
    name: "Loiane",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    email: "waldemar@exemplo.com",
    photourl: "https://yt3.ggpht.com/-W7_0SI56z2k/AAAAAAAAAAI/AAAAAAAAAAA/_4eiB3q8lTQ/s288-c-k-no-mo-rj-c0xffffff/photo.jpg",
    courses:[
      {
        _id: 4,
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
            _id: 5,
            title: "Setup com ES6 + Babel + Express",
            author: "Waldemar Neto",
            type: "video",
            url: "l4glc0XNVbM",
            preview: "Começando a serie de Node.js API testável vamos fazer o setup do nosso ambiente, configurar o nosso transpilador para poder usar a ultima versão do Ecmascript o Ecmascript6.",
            views: 51
          },
          {
            _id: 6,
            title: "Integration tests com Mocha, Chai e supertest",
            author: "Waldemar Neto",
            type: "video",
            url: "CTz5pCnZ03k",
            preview: "No segundo video  da serie de Node.js API testável vamos fazer o setup do nosso ambiente de testes, começaremos pelo teste de integração que vai nos guiar no design da nossa API.",
            views: 19
          }
        ]
      }]
    }]

    module.exports = db
