class ModelsController {
  constructor(model) {
    this.model = model
  }
  findAll(fn) {
    this.model.find({}, function (err, all) {
      if (err) {
        console.log(err);
        fn(null)
      } else {
        fn(all)
      }
    })
  }
  findById(id, fn) {
    this.model.find({ _id: id }, function (err, item) {
      if (err) {
        console.log(err)
        fn(null)
      } else {
        fn(item)
      }
    })
  }
  findByName(name, fn) {
    this.model.find({ author: name }, function (err, item) {
      if (err) {
        console.log(err)
        fn(null)
      } else {
        fn(item)
      }
    })
  }
  updateViews(id, fn) {
    this.model.update({ _id: id }, { $inc: { views: 1 } }, function (err, item) {
      if (err) {
        console.log(err);
        fn(null)
      } else {
        fn(item)
      }
    })
  }
}

module.exports = ModelsController
