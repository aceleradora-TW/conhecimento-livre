class Search {
  constructor(filterTest) {
    this.filterTest = filterTest
  }

  filter(dataset, filterInput) {
    return dataset.filter(this.filterTest(filterInput))
  }
}

module.exports = Search
