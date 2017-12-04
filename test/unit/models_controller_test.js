const chai = require('chai')
const sinonChai = require('sinon-chai')
const sinon = require('sinon')
chai.use(sinonChai)
const expect = chai.expect

const ModelsController = require('../../src/mappers/models_controller')

describe('Models Controller', function () {
  it('findAll chama find na model', function () {
    const exec = { exec: () => {} }
    const model = { find: sinon.stub().returns(exec) }
    const modelsController = new ModelsController(model)

    modelsController.findAll()

    expect(model.find).to.have.been.called
  })
})
