const expect = require('chai').expect
const DbMapper = require('../src/mappers/db_mapper')
const Course = require('../src/model/course')
const Content = require ('../src/model/content')
const User = require ('../src/model/user')


describe('DbMapper', function() {
  let db, courseMapper

  beforeEach(function() {
    db = {
      collection: function(collectionName) {
        return {

          find: function() {
            return [{ _id: 1, name: 'video1' }, {}, {}]
          },
          insert: function(data) {
            return Object.assign({}, { _id: 1234 }, data)
          },
          update: function(dataUpdate,content) {
            return Object.assign({}, content, {content: [dataUpdate]})
          },
          getUsers: function() {
            return ['Joao','lucas','bruno']
          },
          createUser: function(users,user) {
            return users.push(user)
          }
        }
      }
    }

    dbMapper = new DbMapper(db)
  })

  it('retorna cursos', function() {

<<<<<<< f90524facf131fb35006f0cce3ac16d88a565397
    const courses = dbMapper.findAll()
>>>>>>> <Mauricio,Filipe> Adiciona users
=======
    const courses = dbMapper.findAllCourses()
>>>>>>> <@JessicaFranke,@MauricioSalin> Arruma conflitos

    expect(courses.length).to.equal(3)
  })

  it('retorna dados do curso', function() {
    const course = new Course('Node',3.5,'Node course','Waldeco')
    const data = dbMapper.insert(course)

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)

    const content = new Content('#1', 'Video Node 01', 5.0, 'API Testavel', 'www.meuvideo.com', 'video')
    const dataUpdate = dbMapper.update(content,data)

    expect(dataUpdate._id).to.equal(data._id)
    expect(content.order).to.equal(dataUpdate.content[0].order)
    expect(content.className).to.equal(dataUpdate.content[0].className)
    expect(content.duration).to.equal(dataUpdate.content[0].duration)
    expect(content.description).to.equal(dataUpdate.content[0].description)
    expect(content.url).to.equal(dataUpdate.content[0].url)
    expect(content.type).to.equal(dataUpdate.content[0].type)

  })

  it ('retorna user', function() {

    const users = dbMapper.getUsers()
    expect(users.length).to.equal(3)
  })

  it ('retorna novo usuario', function() {

    const users = dbMapper.getUsers()
    const user = new User('joao bolao junior')

    dbMapper.createUser(users,user.name)

    expect(users[3]).to.equal(user.name)
  })
})
