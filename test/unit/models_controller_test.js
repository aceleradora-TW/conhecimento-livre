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
    findOne: sinon.stub().returns(exec)
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
    modelsController.findCourseById(43)

    expect(model.findOne).to.have.been.calledWith({ 'courses._id': 43 })
  })

  it('findCourseByContentId chama findOne passando o id', function () {
    modelsController.findCourseByContentId(44)

    expect(model.findOne).to.have.been.calledWith({ 'courses.contents._id': 44 })
  })
})
