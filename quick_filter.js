const returnSearch = (filter, database) => {
  const result = []

  database.forEach(function (element) {
    if (element.nivel === filter) {
      result.push(element)
    }
  })
  return result
}

module.exports = { returnSearch }
