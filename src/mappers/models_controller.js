class ModelsController {

  constructor(model) {
    this.model = model
  }

  find(query, callback) {
    this.model.findOne(query, (error, item) => {
      if (error) {
        console.log(error)
      }

      callback(null, item)
    })
  }

  updateViews(id, fn) {
    this.model.update({ _id: id }, { $inc: { views: 1 } }, (err, item) => {
      if (err) {
        console.log(err);
      }

      fn(err, item)
    })
  }
}

module.exports = ModelsController
