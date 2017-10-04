const returnSearch = (level, database) => {
  const result = []

  database.forEach(function(element){
    if(element == level){
      result.push(element.toString())
    }
  })
  return result
}

module.exports = { returnSearch }
