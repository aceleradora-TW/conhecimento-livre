const content = (Content, Search) => (req, res) => {
  const id = req.params.id

  //função que incrementa a visualização

Content.update({'_id': id},{'$inc': {'views': 1}}, function(err, allContents)  {
  if (err){
    console.log(err);
  } else {
      console.log("allContents");
  }
})

  const contentFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(contentFilter)
  Content.find({}, (err, allContents) =>  {
    if (err){
      console.log(err);
    } else {
      const content = Search.filter(allContents, id)

      content

      res.render('content', { allContents, content })
    }
  })
}

module.exports = content
