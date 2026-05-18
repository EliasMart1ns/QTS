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
});

const { votar } = require('./script');

test('Votar', ()=>{
  expect(votar(15)).toBe("Não pode votar");
});

const { numero } = requise('./script');

test('numero', ()=>{
  expect(numero(5)).toBe("positivo");
});

const { bonus } = requise('./script');

test('bonus', ()=>{
  expect(bonus(1000)).toBe(200);
});
