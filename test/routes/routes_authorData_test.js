const authorData = require('../../src/routes/authorData')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

describe('AuthorData', function() {
  const authorItem = {
    name: 'Albis Forenzzi'
  }

  const req = { params: { id: 1 }}
  const res = { render: sinon.spy() }
  const next = sinon.spy()

  const authorController = {
    findAuthorById: sinon.stub().resolves(authorItem)
  }

  context('com promise resolvida', function() {
    it('chama findAuthorById com id do request', function() {
      authorData(authorController)(req, res, next)
      expect(authorController.findAuthorById).to.have.been.calledWith(req.params.id)
    })

    it('renderiza template dos cursos do #authorData', function() {
      authorData(authorController)(req, res, next)
      expect(res.render).to.have.been.calledWith('authorForm', { authorItem })
    })
  })
})
