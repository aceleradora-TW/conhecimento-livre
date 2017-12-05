const authenticate = require('../../src/routes/authenticate')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

describe('Authenticate', function() {

  req = { isAuthenticated: sinon.spy() }
  res = { redirect: sinon.spy() }
  next = sinon.spy()

  beforeEach(function() {
    next.reset()
    req.isAuthenticated.reset()
    res.redirect.reset()
  })

  context('com usuário autenticado', function() {
    it('deve chamar #authenticate', function() {
      req.isAuthenticated = sinon.stub().returns(true)
      authenticate()(req, res, next)
      expect(req.isAuthenticated).to.have.been.calledOnce
      expect(res.redirect).to.have.callCount(0)
    })
    it('deve chamar #next', function() {
      req.isAuthenticated = sinon.stub().returns(true)
      authenticate()(req, res, next)
      expect(next).to.have.been.calledOnce
    })
  })
  context('com usuário não autenticado', function() {
    it('deve chamar #redirect', function() {
      authenticate()(req, res, next)
      expect(next).to.have.been.callCount(0)
      expect(res.redirect).to.have.calledWith('/admin')
    })
  })
})
