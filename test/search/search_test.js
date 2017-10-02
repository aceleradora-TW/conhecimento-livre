const expect = require('chai').expect
const Search = require('../../src/search/search')

describe('Search', function() {
  it('filters one item from dataset', function() {
    const search = new Search()
    const dataset = ['oi', 'alvaro', 'leco']
    const filterInput = 'alvaro'

    const filteredData = search.filter(dataset, filterInput)

    expect(filteredData[0]).to.equal('alvaro')
  })

  it('filters two items from dataset', function() {
    const search = new Search()
    const dataset = ['alvo', 'alvaro', 'leco']
    const filterInput = 'alv'

    const filteredData = search.filter(dataset, filterInput)

    expect(filteredData[0]).to.equal('alvo')
    expect(filteredData[1]).to.equal('alvaro')
  })
})
