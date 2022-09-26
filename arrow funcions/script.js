// 1. Converta as funções abaixo para Arrow Functions.

function somar(a, b) {
  return a + b;
};

// solução

const somarArrow = (a, b) => a + b;

//

function verificarNegativo(numero) {
  return numero < 0;
};

// solução 

const verificarNegativoArrow = numero => numero < 0

// 

function criarUsuario(nome, idade) {
  return {
    nome,
    idade,
  }
};

//solução

const criarUsuarioArrow = (nome, idade) =>({
  nome, idade,
})

// 

setTimeout(function() {
  console.log('Hello world!')
}, 1000)


setTimeout(() => {console.log('hello word')}, 1000)