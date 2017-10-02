const expect = require('chai').expect
const Search = require('../../src/search/search')

describe('Search', function() {
  it('Filtra um item em um array baseado em um filtro retornado por uma funcao', function() {
    const filterTest = string => item => item.cargo.toLowerCase().includes(string)
    const searchByCargo = new Search(filterTest)
    const obj1 = { nome: 'Alvaro', cargo: 'Mentor' }
    const obj2 = { nome: 'Leco', cargo: 'P.O.' }
    const dataset = [obj1, obj2]
    const filterInput = 'men'

    const filteredData = searchByCargo.filter(dataset, filterInput, filterTest)

    expect(filteredData[0].nome).to.equal('Alvaro')
  })

  it('filters two items from dataset', function() {
    const filterTest = text => item => item.includes(text)
    const search = new Search(filterTest)
    const dataset = ['alvo', 'alvaro', 'leco']
    const filterInput = 'alv'

    const filteredData = search.filter(dataset, filterInput)

    expect(filteredData[0]).to.equal('alvo')
    expect(filteredData[1]).to.equal('alvaro')
  })
})
