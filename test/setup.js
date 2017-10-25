const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const stubPromise = require('sinon-stub-promise')

chai.use(sinonChai)
stubPromise(sinon)

module.exports = {expect: chai.expect}
