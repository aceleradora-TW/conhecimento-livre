const authorCourses = require('../../src/routes/authorCourses')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

describe('AuthorCourses', function() {
  const authorItem = {
    courses: [{title: 'Goodfellas', description: 'funny how?'}]
  }

  const courses = authorItem.courses

  const req = { params: { id: 1 }}
  const res = { render: sinon.spy() }
  const next = function() {}
  const authorController = {
    findAuthorById: sinon.stub().resolves(authorItem)
  }

  context('com promise resolvida', function() {
    it('chama findAuthorById com id do request', function() {
      authorCourses(authorController)(req, res, next)
      expect(authorController.findAuthorById).to.have.been.calledWith(req.params.id)
    })
    it('renderiza template dos cursos do #authorCourses', function() {
      authorCourses(authorController)(req, res, next)
      expect(res.render).to.have.been.calledWith('authorCourses', { authorItem, courses })
    })
  })
})
