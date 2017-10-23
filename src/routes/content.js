const content = (Content, Search) => (req, res) => {

//ID do conteudo
// quantidade de visualizacoes






  const id = req.params.id
  console.log (id)

  const contentFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(contentFilter)
  Content.find({}, (err, allContents) =>  {
    if (err){
      console.log(err);
    } else {
      const content = Search.filter(allContents, id)
      res.render('content', { allContents, content })
    }
  })
}

module.exports = content
