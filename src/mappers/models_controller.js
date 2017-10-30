class ModelsController {

  constructor(model) {
    this.model = model
  }

  find(query) {
    return this.model.findOne(query).exec()
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
