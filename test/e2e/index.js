module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.title('Conhecimento Livre')
      .end();
  }
};
