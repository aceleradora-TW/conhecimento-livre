module.exports = {
  'Step one: Acessar o site e clicar em algum curso' : function (client) {
    client
    .url('http://localhost:3000/')
    .click('.card')
    .pause(1000)
  },

  'Step two: Clicar no botão de começar' : function (client){
    client
    .click('#btnInit')
    .pause(1000)
  },

  'Step three: Clicar no vídeo para que a aula começe' : function(client){
    client
    .click('#videoPlayer')
    .pause(2000)
  },

  'Step Four: Clicar no botão de proximo para acessar a próxima aula' : function(client){
    client
    .click('#btnNextClass')
    .pause(2000)
  },

  'Step Four: Clicar no botão anterior para acessar a aula anterior' : function(client){
    client
    .click('#btnAntClass')
    .pause(2000)
    .end();
  }
};
