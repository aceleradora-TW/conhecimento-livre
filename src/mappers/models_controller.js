class ModelsController {

  constructor(model) {
    this.model = model
  }

  _find(query, callback) {
    this.model.findOne(query, (error, item) => {
      if (error) {
        console.log(error)
      }

      callback(null, item)
    })
  }

  findAll(fn) {
    this._find({}, fn)
  }

  findById(id, fn) {
    this._find({_id: id}, fn)
  }

  findByName(name, fn) {
    this._find({author: name}, fn)
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
