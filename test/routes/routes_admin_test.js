const admin = require('../../src/routes/admin')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

const req = {}
const res = {render : sinon.spy()}

describe('Admin', () => {
  it('Deve chamar res.render com a tela do admin', () => {
    admin()(req, res)
    expect(res.render).to.have.been.calledWith('admin')
  })
})
