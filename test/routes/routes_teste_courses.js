const course = require('../../src/routes/course')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

describe('Course', function() {
  const authorItem = {
    courses: [{title: 'Goodfellas', description: 'funny how?', contents: [{class: 'Part2'}]}]
  }
  const firstContent = authorItem.courses[0].contents[0]
  const authorController = {
    findCourseById: sinon.stub().resolves(authorItem)
  }
  const req = { params: { id: 1 }}
  const res = { render: sinon.spy() }
  const next = () => {}

  context('com promise resolvida', function() {
    it('chama findCourseById com id do request', function() {
      course(authorController)(req, res, next)
      expect(authorController.findCourseById).to.have.been.calledWith(req.params.id)
    })
    it('renderiza template dos cursos do #course', function() {
      course(authorController)(req, res, next)
      expect(res.render).to.have.been.calledWith('course', { authorItem, firstContent })
    })
  })
})
