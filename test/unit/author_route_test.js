const chai = require('chai')
const sinonChai = require('sinon-chai')
const sinon = require('sinon')
chai.use(sinonChai)
const expect = chai.expect

const author = require('../../src/routes/author')

describe('Author route', function () {
  it('faz algo', function () {
    expect(true).to.equal(false)
  })
})
