const expect = require('chai').expect
const Search = require('../../src/search/search')

describe('Search', function() {
  it('filtra um item baseando-se em outro filtro passado por parâmetro', function() {
    const roleFilter = string => item => item.role.toLowerCase().includes(string)
    const searchByRole = new Search(roleFilter)
    const obj1 = { name: 'Alvaro', role: 'Mentor' }
    const obj2 = { name: 'Leco', role: 'P.O.' }
    const dataset = [obj1, obj2]
    const filterInput = 'men'

    const filteredData = searchByRole.filter(dataset, filterInput, roleFilter)

    expect(filteredData[0].name).to.equal('Alvaro')
  })

  it('filtra dois itens de uma base de dados', function() {
    const stringFilter = text => item => item.includes(text)
    const search = new Search(stringFilter)
    const dataset = ['alvo', 'alvaro', 'leco']
    const filterInput = 'alv'

    const filteredData = search.filter(dataset, filterInput)

    expect(filteredData[0]).to.equal('alvo')
    expect(filteredData[1]).to.equal('alvaro')
  })
})
