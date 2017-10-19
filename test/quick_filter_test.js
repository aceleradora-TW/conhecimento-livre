const expect = require('chai').expect
const quickFilter = require('../src/filter/quick_filter')

describe('quickFilter', function () {
  it('#returnSearch() deve retornar os objetos correspondentes ao level do curso', function() {
    const objeto1 = { curso: 'js', nivel: 'beginner'}
    const objeto2 = { curso: 'js', nivel: 'advanced'}
    const objeto3 = { curso: 'js', nivel: 'beginner'}
    const array = [objeto1, objeto2, objeto3]
    const resultTest = [objeto1, objeto3]
    const nivel = 'beginner'
    expect(quickFilter.returnSearch(nivel, array).toString()).to.equal(resultTest.toString())
  })
  it('#returnSearch() deve retornar vazio quando nao ha o parametro beginner', function() {
    const objeto1 = { curso: 'js', nivel: 'advanced'}
    const objeto2 = { curso: 'js', nivel: 'advanced'}
    const objeto3 = { curso: 'js', nivel: 'advanced'}
    const array = [objeto1, objeto2, objeto3]
    const resultTest = 0
    const nivel = 'beginner'
    expect(quickFilter.returnSearch(nivel, array).length).to.equal(resultTest)
  })
})
