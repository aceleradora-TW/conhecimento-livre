class ModelsController {
  constructor(model) {
    this.model = model
  }

  findAll(fn) {
    this.model.find({}, function (err, all) {
      if (err) {
        console.log(err);
      }
      fn(all)
    })
  }
}

module.exports = ModelsController
