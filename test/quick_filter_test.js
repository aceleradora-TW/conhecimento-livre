const expect = require('chai').expect
const quickFilter = require('../quick_filter')

describe('quickFilter', function () {
  it('#returnSearch() deve retornar os objetos correspondentes ao level do curso', function() {
    const objeto1 = { curso: 'js', level: 'beginner'}
    const objeto2 = { curso: 'js', level: 'advanced'}
    const objeto3 = { curso: 'js', level: 'beginner'}
    const array = [objeto1, objeto2, objeto3]
    const resultTest = [objeto1, objeto3]
    const level = 'beginner'
    expect(quickFilter.returnSearch(level, array).toString()).to.equal(resultTest.toString())
  })
  it('#returnSearch() deve retornar vazio quando nao ha o parametro beginner', function() {
    const objeto1 = { curso: 'js', level: 'advanced'}
    const objeto2 = { curso: 'js', level: 'advanced'}
    const objeto3 = { curso: 'js', level: 'advanced'}
    const array = [objeto1, objeto2, objeto3]
    const resultTest = 0
    const level = 'beginner'
    expect(quickFilter.returnSearch(level, array).length).to.equal(resultTest)
  })
})
