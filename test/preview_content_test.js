const expect = require('chai').expect
const Preview = require('../preview_content')


describe('Preview Content', function() {
  it('Recebe um objeto e retorna a descricao', function() {
    const obj1 = { descricao: 'Embarque nessa jornada magica pelo mundo de mongo em Proto I.O.', data: '23/03/1995', duracao: '3:59', avaliacao: 'Ruim', titulo: 'Aula de Mongo', autor: 'Mauricio' }

    const Preview_conteudo = new Preview()

    const result = Preview_conteudo.ImprimeConteudo(obj1)

    expect(result).to.equal(1)
  })

})
