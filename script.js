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

function votar(idade){
  if(idade<16){
    return "não pode votar"
  }
  if(idade<18 || idade>=70){
    return "Voto opcional"
  }
  return "Pode votar"
}
module.exports={ votar };

function numero(valor){

  if(valor>0){
    return "positivo";
  }
  if(valor<0){
    return "Negativo";
  }
  return "Zero";
}
module.exports={ numero };

function bonus(salario){

  if(salario<2000){
    return salario*0.20;
  }
  if(salario<=5000){
    return salario*0.10;
  }
  return salario*0.05;
}
module.exports={ bonus };