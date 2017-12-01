+module.exports = {
 +  'Step one: Acessar o site e clicar em algum curso' : function (client) {
 +    client
 +    .url('http://localhost:3000/')
 +    .click('div[class=card]')
 +    .pause(1000)
 +  },
 +
 +  'Step two: Clicar no botão de começar' : function (client){
 +    client
 +    .click('a[id=buttoncomecar]')
 +    .pause(1000)
 +  },
 +
 +  'Step three: Clicar no vídeo para que a aula começe' : function(client){
 +    client
 +    .click('iframe[id=playervideo]')
 +    .pause(2000)
 +  },

    'Step four: Clica no link do autor e acessa a página de autor' : function(client){
      client
      .click('a[id=linkautorcontent]')
      .pause(1000)


      +    .end();
    }


 +};
