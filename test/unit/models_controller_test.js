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
    update: sinon.stub().returns(exec),
    remove: sinon.stub().returns(exec),
    create: sinon.stub(),
    findOneAndUpdate: sinon.stub()
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

  it('deleteAuthor chama o remove passando id', function () {
    modelsController.deleteAuthor(5)

    expect(model.remove).to.have.been.calledWith({ '_id': 5 })
  })

  it('deleteContent chama update passando id', function () {
    modelsController.deleteContent(6)

    expect(model.update).to.have.been.calledWith({ 'courses.contents._id': 6 },
                                                 { $pull: { 'courses.$.contents': { '_id': 6 } } })
  })

  it('insertAuthor chama create passando dados', function () {
    const data = { name: 'leco', email: 'leco@leco.br', bio: 'olar', photourl: 'lalala.com' }

    modelsController.insertAuthor(data)

    expect(model.create).to.have.been.calledWith({ name: data.name, email: data.email,
                                                   bio: data.bio, photourl: data.photourl })
  })

  it('insertCourse chama findOneAndUpdate com id e data', function () {
    const data = {}

    modelsController.insertCourse(7, data)

    expect(model.findOneAndUpdate).to.have.been.calledWith({ _id: 7 },
                                                           { $push: { 'courses': data } })
  })

  it('updateViews chama update passando id e dados de autor', function () {
    const authorData = {
      courses: [{
        contents: {
          id: (contentId) => { return { views: 42 } }
        }
      }]
    }

    modelsController.updateViews(8, authorData)

    expect(model.update).to.have.been.calledWith({ 'courses.contents._id': 8 }, authorData)
  })

  it('updateAuthor chama update passando dados de autor', function () {
    const authorData = { id: 9 }

    modelsController.updateAuthor(authorData)

    expect(model.update).to.have.been.calledWith({ '_id': authorData.id }, authorData)
  })

  it('updateCourse chama update passando dados do curso', function () {
    const courseData = { id: 10 }

    modelsController.updateCourse(courseData)

    expect(model.update).to.have.been.calledWith({ 'courses._id': courseData.id },
                                                 { $set: { 'courses.$': courseData } })
  })

  it('insertContent pega id do video no YouTube de url sem playlist', function () {
    const contentData = {
      url: 'https://www.youtube.com/watch?v=l4glc0XNVbM'
    }

    modelsController.insertContent(42, contentData)

    expect(contentData.url).to.eq('l4glc0XNVbM')
  })

  it('insertContent pega id do video no YouTube de url com playlist', function () {
    const contentData = {
      url: 'https://www.youtube.com/watch?v=l4glc0XNVbM&list=PLz_YTBuxtxt74aOA2W8ArqZpsPlxP-JC9'
    }

    modelsController.insertContent(42, contentData)

    expect(contentData.url).to.eq('l4glc0XNVbM')
  })
})
