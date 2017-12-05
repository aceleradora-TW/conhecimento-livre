const chai = require('chai')
const sinonChai = require('sinon-chai')
const sinon = require('sinon')
chai.use(sinonChai)
const expect = chai.expect

const authorRoute = require('../../src/routes/author')

describe('Author route', function () {
  const authorItem = {
    courses: [{ title: 'Goodfellas', description: 'funny how?' }]
  }
  const authorController = { findAuthorById: sinon.stub().resolves(authorItem) }
  const req = { params: { id: 42 } }
  const res = { render: sinon.spy() }
  const next = () => {}

  context('com promise resolvida', function () {
    it('chama findAuthorById com id do request', function () {
      authorRoute(authorController)(req, res, next)

      expect(authorController.findAuthorById).to.have.been.calledWith(req.params.id)
    })

    it('renderiza template author com parametros', function () {
      authorRoute(authorController)(req, res, next)

      expect(res.render).to.have.been.calledWith('author', { authorItem })
    })
  })
})
