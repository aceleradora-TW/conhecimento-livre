module.exports = {
  'Step one: Acessar o site' : function (client) {
     client
      .url('http://localhost:3000/')
      .pause(1000)
  },
  'Step two: Clicar em algum curso' : function (client) {
     client
      .click('.card')
      .pause(1000)
  },

  'Step three: Clicar no botão de começar' : function (client){
     client
      .click('#btnInit')
      .pause(1000)
  },

  'Step four: Clicar no vídeo para que a aula começe' : function(client){
     client
      .click('#videoPlayer')
      .pause(2000)
  },

  'Step five: Clica no link do autor e acessa a página de autor' : function(client){
     client
      .click('.authorContent')
      .pause(1000)
  },
  'Step six: Acessar um novo curso a partir da página do autor' : function (client){
     client
      .click('.card')
      .click('#btnInit')
      .pause(1000)
      .end();
  },
 };
