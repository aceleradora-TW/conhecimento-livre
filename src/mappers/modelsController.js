class ModelsController {
  constructor(model) {
    this.model = model
  }

  findAll(fn) {
    this.model.find({}, function (err, all) {
      if (err) {
        console.log(err);
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
}

module.exports = ModelsController
