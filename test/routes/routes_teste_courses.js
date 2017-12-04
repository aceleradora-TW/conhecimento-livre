const course = require('../../src/routes/course')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const db = require('../aux/db_test')

chai.use(sinonChai)
const expect = chai.expect


// console.log(db.courses)
// const firstContent = db.courses[0].contents[0]

const req = {}
const res = { render: sinon.spy() }
const next = () => {}

const authorController = {
  findCourseById: sinon.stub().resolves(db)
}

describe('Course', () => {
  context('com promise resolvida', () => {
    it('chama findCourseById com id do request', () => {
      authorCourses(authorController)(req, res, next)
      expect(authorController.findCourseById).to.have.been.calledWith(req.params.id)
    })
    it('renderiza template dos cursos do #courses', () => {
      authorCourses(authorController)(req, res, next)
      expect(res.render).to.have.been.calledWith('courses', { authorItem: db, firstContent })
    })
  })
})
