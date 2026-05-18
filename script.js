function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

module.exports = { somar, mensagemBoasVindas };

function maiornumero(a, b){
  if(a > b){
    return a;
  }
  return b;
}
module.export = { maiorNumero };

function parOuimpar(a, b){
  if(numero % 2 ==0){
    return "par";
  }
  return "impar";
}
module.exports = { parOuimpar };