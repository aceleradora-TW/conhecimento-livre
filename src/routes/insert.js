const Controller = require('../mappers/models_controller')

const index = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  
}

module.exports = index
