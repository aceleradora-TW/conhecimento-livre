const index = require('../../src/routes/index')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

const req = {};
const res = { render: sinon.spy() }

class Controller {
  constructor(db) {
    this.db = db
  }
  findAll(){
    let spy = sinon.spy()
    return spy
  }
}

const db = [{
  nome : "Leco",
  courses: [{
    title : "titulo1",
    description : "description1"
  }]
},
{
  nome : "Leco2",
  courses: [{
    title : "titulo2",
    description : "description2"
  }]
}]

let authorController = {}

beforeEach(() => {
  authorController = new Controller(db)
  sinon.stub(authorController, 'findAll').resolves(db)
});

describe('Index', function(){
  it('Deve chamar a função #findAll', function() {
    index(authorController)(req, res)
    expect(authorController.findAll).to.have.been.calledOnce
  })

  it('Deve chamar res.render com todos os cursos', function () {
    index(authorController)(req, res)
    expect(res.render).to.have.been.calledOnce
    expect(res.render).to.have.been.calledWith('index', {allAuthors: db})

  })

  it
})
