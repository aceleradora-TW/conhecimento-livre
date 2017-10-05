const returnSearch = (level, database) => {
  const result = []

  database.forEach(function(element){
    if(element.level == level){
      result.push(element)
    }
  })
  return result
}

module.exports = { returnSearch }
