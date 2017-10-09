module.exports = {
  'Teste de integração da página incial' : function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.title('Conhecimento Livre')
      .click('a[name=link]')
      .end();
  }
};
