const { somar, mensagemBoasVindas } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

const { maiornumero } = require('./script');

test('maior numero:', () => {
  expect(maiornumero(10,5)).toBe(10);
});

const { parOuimpar } = require('./script');

test('Par ou impar', () =>{
  expect(parOuimpar(4)).toBe("Par");
})