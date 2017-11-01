const expect = require('chai').expect
const ModelsController = require('../src/mappers/models_controller')
const Course = require('../models/course')
const Content = require ('../models/content')
const Author = require ('../models/author')


describe('ModelsController', function() {

    it('#findAll deve rotornar todos os cursos', function() {
      courseModel = new ModelsController(Course)
      let all
      let allDB
      courseModel.findAll((all) => {
        Course.find({}, allDB => {
           all = all
           allDB = allDB
        })
      })
      expect(all).to.equal(allDB)
    })

})
