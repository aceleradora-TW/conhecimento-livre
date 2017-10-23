module.exports = {
  'Teste de integração da página incial' : function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.title('Conhecimento Livre')
      .click('a[class=link]')
      .pause(1000)
      .assert.visible('a[class=thumbnail]')
      .assert.visible('p[class=title]')
      .click('aa[class=thumbnail]')
      .pause(1000)
      .assert.visible('a[class=thumbail]')
      .assert.visible('p[class=title]')
      .end();
  }
};
