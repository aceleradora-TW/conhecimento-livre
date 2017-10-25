const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const stubPromise = require('sinon-stub-promise')
chai.use(sinonChai)
stubPromise(sinon)
const expect = chai.expect

const searchByCourseName = require('../../src/routes/search_by_course_name')

describe('unit -> routes -> SearchByCourseName', () => {

  it('Busca pelo titulo em caixa baixa', () => {
    const Course = {findByTitle: sinon.stub()}
    const findPromise = Course.findByTitle.returnsPromise()
    const params = {courseName: 'Aritmetica'}
    const request = {params}
    const response = {send: sinon.spy()}
    findPromise.resolves('whatever')

    searchByCourseName(Course)(request, response)

    expect(Course.findByTitle).to.have.been.calledWith('aritmetica')
  })

  it('Responde com o curso encontrado', () => {
    const Course = {findByTitle: sinon.stub()}
    const findPromise = Course.findByTitle.returnsPromise()
    const params = {courseName: 'Aritmetica'}
    const request = {params}
    const response = {send: sinon.spy()}
    findPromise.resolves('AA')

    searchByCourseName(Course)(request, response)

    expect(Course.findByTitle).to.have.been.calledWith('aritmetica')
    expect(response.send).to.have.been.calledWith('AA')
  })

  it('Responde com mensagem de erro em caso de falha', () => {
    const Course = {findByTitle: sinon.stub()}
    const findPromise = Course.findByTitle.returnsPromise()
    const params = {courseName: 'Aritmetica'}
    const request = {params}
    const responseStatus = sinon.stub()
    const responseJson = sinon.stub()
    responseStatus.returns({json: responseJson})
    const response = {status: responseStatus}
    findPromise.rejects({message: 'Falhou'})

    searchByCourseName(Course)(request, response)

    expect(responseStatus).to.have.been.calledWith(500)
    expect(responseJson).to.have.been.calledWith({error: 'Falhou'})
  })
})
