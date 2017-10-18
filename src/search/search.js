class Search {
  constructor(anyFilter) {
    this.anyFilter = anyFilter
  }

  setFilter(anyFilter){
    this.anyFilter = anyFilter
  }

  filter(dataset, filterInput) {
    return dataset.filter(this.anyFilter(filterInput))
  }
}

module.exports = Search
