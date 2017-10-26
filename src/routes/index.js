const index = Course => (req, res) => {
  Course.find({}, (err, allContents) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { allContents })
    }
  })
}
module.exports = index
