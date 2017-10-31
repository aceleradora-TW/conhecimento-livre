class ModelsController {
  constructor(model) {
    this.model = model
  }
  findAll(fn) {
    this.model.find({}, (err, all) => {
      if (err) {
        console.log(err);
        fn(null)
      } else {
        fn(all)
      }
    })
  }
  findById(id, fn) {
    this.model.findOne({ _id: id }, (err, item) => {
      if (err) {
        console.log(err)
        fn(null)
      } else {
        fn(item)
      }
    })
  }
  findByName(name, fn) {
    this.model.findOne({ author: name }, (err, item) => {
      if (err) {
        console.log(err)
        fn(null)
      } else {
        fn(item)
      }
    })
  }
  findByLanguage(technology, fn) {
    this.model.findOne({ language: technology }, (err, item) => {
      if (err) {
        console.log(err)
        fn(null)
      } else {
        fn(item)
      }
    })
  }
  updateViews(id, fn) {
    this.model.update({ _id: id }, { $inc: { views: 1 } }, (err, item) => {
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
