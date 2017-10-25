const {expect} = require('../setup')
const sinon = require('sinon')
const searchByCourseName = require('../../src/routes/search_by_course_name')

describe('unit -> routes -> SearchByCourseName', () => {

  const Course = {findByTitle: sinon.stub()}
  const params = {courseName: 'Aritmetica'}
  const request = {params}

  beforeEach(() => {
    Course.findByTitle.reset()
  })

  it('Busca pelo titulo em caixa baixa', () => {
    const findPromise = Course.findByTitle.returnsPromise()
    const response = {render: sinon.spy()}

    searchByCourseName(Course)(request, response)

    expect(Course.findByTitle).to.have.been.calledWith('aritmetica')
  })

  it('Renderiza view com o curso encontrado', () => {
    const findPromise = Course.findByTitle.returnsPromise()
    const response = {render: sinon.spy()}
    findPromise.resolves({title: 'bla'})

    searchByCourseName(Course)(request, response)

    expect(response.render).to.have.been.calledWith('search', {courses: {title: 'bla'}})
  })

  it('Responde com mensagem de erro em caso de falha', () => {
    const findPromise = Course.findByTitle.returnsPromise()
    const status = sinon.stub()
    const json = sinon.stub()
    status.returns({json})
    const response = {status}
    findPromise.rejects({message: 'Falhou'})

    searchByCourseName(Course)(request, response)

    expect(status).to.have.been.calledWith(500)
    expect(json).to.have.been.calledWith({error: 'Falhou'})
  })
})
