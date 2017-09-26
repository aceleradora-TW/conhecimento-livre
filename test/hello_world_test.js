const expect = require('chai').expect
const sendString = require('../sendString')

describe('hello_world', function(){

  it('#imprimeString() deve retornar hello world',function(){

    expect (sendString.imprimeString()).to.equal('hello world')

  })

})
