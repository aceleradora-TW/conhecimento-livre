const expect = require('chai').expect
const DbMapper = require('../src/mappers/db_mapper')
const Course = require('../src/model/course')
const Content = require ('../src/model/content')
const User = require ('../src/model/user')


<<<<<<< baefb2f8c30ebc579bc97ad9291b7e76338fa514
describe('DbMapper', function() {
=======
describe.only('DbMapper', function() {
>>>>>>> <Mauricio,Filipe> Adiciona users
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

<<<<<<< baefb2f8c30ebc579bc97ad9291b7e76338fa514
  it('retorna cursos', function() {

    const courses = dbMapper.findAllCourses()
=======
  it('returns courses', function() {

    const courses = dbMapper.findAll()
>>>>>>> <Mauricio,Filipe> Adiciona users

    expect(courses.length).to.equal(3)
  })

<<<<<<< baefb2f8c30ebc579bc97ad9291b7e76338fa514
  it('retorna dados do curso', function() {
=======
  it('returns course\'s data', function() {
>>>>>>> <Mauricio,Filipe> Adiciona users
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

<<<<<<< baefb2f8c30ebc579bc97ad9291b7e76338fa514
  it ('retorna user', function() {
=======
  it ('returns user\'s', function() {
>>>>>>> <Mauricio,Filipe> Adiciona users

    const users = dbMapper.getUsers()
    expect(users.length).to.equal(3)
  })

<<<<<<< baefb2f8c30ebc579bc97ad9291b7e76338fa514
  it ('retorna novo usuario', function() {
=======
  it ('returns new user', function() {
>>>>>>> <Mauricio,Filipe> Adiciona users

    const users = dbMapper.getUsers()
    const user = new User('joao bolao junior')

    dbMapper.createUser(users,user.name)

    expect(users[3]).to.equal(user.name)
  })
})
