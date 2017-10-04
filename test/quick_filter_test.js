const expect = require('chai').expect
const quickFilter = require('../quick_filter')

describe('quickFilter', function () {
  it('#returnSearch() deve retornar beginner', function () {
    const array = ['beginner']
    const level = 'beginner'
    expect(quickFilter.returnSearch(level, array).toString()).to.equal('beginner')
  })
  it('#returnSearch() deve percorrer um array e retornar a lista de elementos compativeis', function () {
    const array = ['beginner', 'beginner', 'beginner', 'advanced']
    const level = 'beginner'
    expect(quickFilter.returnSearch(level, array).toString()).to.equal('beginner,beginner,beginner')
  })
  it('#returnSearch() deve retornar os objetos correspondentes ao level do curso', function() {
    const objeto1 = { curso: 'js', level: 'beginner'}
    const objeto2 = { curso: 'js', level: 'advanced'}
    const objeto3 = { curso: 'js', level: 'beginner'}
    const array = [objeto1, objeto2, objeto3]
    const level = 'beginner'
    expect(quickFilter.returnSearch(level, array)).to.equal([objeto1, objeto3, obje])
  })
})










//
// const expect = require('chai').expect
// const quickFilter = require('../quick_filter')
//
// describe('quickFilter', function () {
//   it('#returnSearch() deve retornar beginner', function () {
//     let array = ['beginner']
//     let level = 'beginner'
//     expect(quickFilter.returnSearch(level, array)).to.equal('beginner')
//   })
//   it('#returnSearch() deve percorrer um array e retornar a lista de elementos compativeis', function () {
//     let array = ['beginner', 'beginner', 'beginner', 'advanced']
//     let level = 'beginner'
//     expect(quickFilter.returnSearch(level, array)).to.equal('beginner,beginner,beginner')
//   })
// })
