module.exports = {
  'Teste de integração da página incial' : function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.title('Conhecimento Livre')
      .click('a[class=link]')
      .pause(1000)
      .assert.visible('a[class=miniatura]')
      .assert.visible('p[class=title]')
      .click('aa[class=miniatura]')
      .pause(1000)
      .assert.visible('a[class=miniatura]')
      .assert.visible('p[class=title]')
      .end();
  }
};
