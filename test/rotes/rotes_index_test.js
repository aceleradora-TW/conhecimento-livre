const index = require('../../src/routes/index')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const expect = chai.expect

var req = {};
var res = {
  viewName: ""
  , data : {}
  , render: function(view, viewData) {
    viewName = view;
    data = viewData;
  }
};

class Controller {
  constructor(db) {
    this.db = db
  }
  findAll(){
    let spy = sinon.spy()
    return spy
  }
}

const db = [{
  nome : "Leco",
  courses: [{
    title : "titulo1",
    description : "description1"
  }]
},
{
  nome : "Leco2",
  courses: [{
    title : "titulo2",
    description : "description2"
  }]
}]


describe('Index', function(){
  it('Deve chamar a função #findAll', function() {
    const authorController = new Controller(db)
    sinon.stub(authorController, 'findAll').resolves(db)

    index(authorController)(req, res)

    expect(authorController.findAll).to.have.been.calledOnce


  })

  it('Deve retornar todos os cursos', (done) => {
    const authorController = new Controller(db)
    sinon.stub(authorController, 'findAll').resolves(db)

    index(authorController)(req, res)

    authorController
    .findAll()
    .then((response) => {
      expect(response).to.eql(
        [{
          nome : "Leco",
          courses: [{
            title : "titulo1",
            description : "description1"
          }]
        },
        {
          nome : "Leco2",
          courses: [{
            title : "titulo2",
            description : "description2"
          }]
        }]
      )
      })
    .then(() => done())
    .catch(err => done(err))
  })
})
