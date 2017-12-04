const list = require('../../src/routes/list')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const db = require('../aux/db_test')

chai.use(sinonChai)
const expect = chai.expect

const req = {}
const res = { render: sinon.spy() }
const next = () => {}

const authorController = {
  findAll : sinon.stub().resolves(db)
}

describe('List', () => {
  context('com promise resolvida', () => {
    it('Deve chamar a função #findAll', () => {
      list(authorController)(req, res, next)
      expect(authorController.findAll).to.have.been.calledOnce
    })

    it('Deve chamar res.render com todos os autores e cursos', () => {
      list(authorController)(req, res, next)
      expect(res.render).to.have.been.calledWith('list', { allAuthors: db })
    })
  })
})
