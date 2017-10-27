const index = Content => (req, res) => {
  Content.find({}, (err, allContents) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { allContents })
    }
  })
}
module.exports = index
