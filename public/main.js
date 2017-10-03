// /* eslint-env jquery */
// /* eslint-env handlebars */


$(function () {
  const videos = {
    allVideos: [{
      id: 1,
      titulo: 'Setup com ES6 + Babel + Express',
      url: 'l4glc0XNVbM',
    },
    {
      id: 2,
      titulo: 'Integration tests com Mocha, Chai e supertest',
      url: 'CTz5pCnZ03k',
    },
    {
      id: 3,
      titulo: 'Routes e Database com Sequelize e Sqlite3',
      url: 'ixvwD1ZMGLk',
    },
    {
      id: 4,
      titulo: 'Models com Sequelize',
      url: 'J3IQVGSMkLI',
    },
    ],
  }
  const templateListaVideos = $('#videos-template').html();
  const templateV = Handlebars.compile(templateListaVideos);

  $('.lista_videos').append(templateV(videos));
},
)
