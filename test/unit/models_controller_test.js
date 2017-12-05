const chai = require('chai')
const sinonChai = require('sinon-chai')
const sinon = require('sinon')
chai.use(sinonChai)
const expect = chai.expect

const ModelsController = require('../../src/mappers/models_controller')

describe('Models Controller', function () {
  const exec = { exec: () => {} }
  const model = {
    find: sinon.stub().returns(exec),
    findOne: sinon.stub().returns(exec),
    update : sinon.stub().returns(exec)
  }
  const modelsController = new ModelsController(model)

  it('findAll chama find na model', function () {
    modelsController.findAll()

    expect(model.find).to.have.been.called
  })

  it('findAuthorById chama findOne passando id', function () {
    modelsController.findAuthorById(42)

    expect(model.findOne).to.have.been.calledWith({ _id: 42 })
  })

  it('findCourseById chama findOne passando o id', function () {
    modelsController.findCourseById(2)

    expect(model.findOne).to.have.been.calledWith({ 'courses._id': 2 },
                                                  { 'courses.$': 1, name: 1 })
  })

  it('findCourseByContentId chama findOne passando o id', function () {
    modelsController.findCourseByContentId(3)

    expect(model.findOne).to.have.been.calledWith({ 'courses.contents._id': 3 },
                                                  { 'courses.$': 1, name: 1 })
  })

  it('deleteCourse chama update passando id', function () {
    modelsController.deleteCourse(4)

    expect(model.update).to.have.been.calledWith({ 'courses._id': 4},
                                                 { $pull: { 'courses': { '_id': 4 } } })
  })
})
