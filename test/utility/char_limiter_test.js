const charLimiter = require('../../src/utility/char_limiter')
const expect = require('chai').expect


let mockText = ''

beforeEach(() => {
  mockText = 'Eu sou uma string realmente grande'
});


describe("char_limiter ", () => {
  it("Deve retornar o texto editado", () => {
    mockText = charLimiter(mockText, 25)
    expect(mockText).to.equal('Eu sou uma string real...')
  })

  it("Deve retornar o texto sem editá-lo", () => {
    mockText = charLimiter(mockText, 80)
    expect(mockText).to.equal('Eu sou uma string realmente grande')
  })
})
