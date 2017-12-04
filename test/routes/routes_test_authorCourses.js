const authorCourses = require('../../src/routes/authorCourses')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const db = require('../aux/db_test')

chai.use(sinonChai)
const expect = chai.expect

const req = { params: { id: 1 }}
const res = { render: sinon.spy() }
const next = () => {}

const courses = db.courses

const authorController = {
  findAuthorById: sinon.stub().resolves(db)
}

describe('AuthorCourses', () => {
  context('com promise resolvida', () => {
    it('chama findAuthorById com id do request', () => {
      authorCourses(authorController)(req, res, next)
      expect(authorController.findAuthorById).to.have.been.calledWith(req.params.id)
    })
    it('renderiza template dos cursos do #authorCourses', () => {
      authorCourses(authorController)(req, res, next)
      expect(res.render).to.have.been.calledWith('authorCourses', { authorItem: db, courses })
    })
  })
})
