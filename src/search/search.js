class Search {

  filter(dataset, filterInput) {
    const array = []
    for (let i = 0; i < dataset.length; i++) {
      if (dataset[i].includes(filterInput))
        array.push(dataset[i])
    }

    return array
  }
}

module.exports = Search
