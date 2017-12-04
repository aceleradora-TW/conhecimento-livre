const index = require('../../src/routes/index')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const db = require('../aux/db_test')

chai.use(sinonChai)
const expect = chai.expect

const req = {}
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

let authorController = {}

beforeEach(() => {
  authorController = new Controller(db)
  sinon.stub(authorController, 'findAll').resolves(db)
})

describe('Index', () => {
  it('Deve chamar a função #findAll', () => {
    index(authorController)(req, res)
    expect(authorController.findAll).to.have.been.calledOnce
  })

  it('Deve chamar res.render com todos os cursos', () => {
    index(authorController)(req, res)
    expect(res.render).to.have.been.calledOnce
    expect(res.render).to.have.been.calledWith('index', {allAuthors: db})
  })
})
