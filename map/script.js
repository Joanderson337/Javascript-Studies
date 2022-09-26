// 1. Utilizando o .map, crie uma lista que contenha todos os valores da lista 
// "numeros" multiplicados por dois, e logue-a no console.

const numeros = [10, 20, 30, 40, 50];

const numerosX2 = numeros.map( item => {
  return item * 2
})

console.log(numerosX2)

// 2. Crie uma lista, usando o .map, baseando-se na lista "usuarios", que contenha
//  a "idade" de cada usuário multiplicada por 2.

const usuarios = [
  { nome: 'John', idade: 20 },
  { nome: 'Jane', idade: 27 }, 
  { nome: 'Doe', idade: 18} 
]

const usuariosIdadeX2 = usuarios.map((item)=>{
  return {...item, idade: item.idade * 2}
})

console.log(usuariosIdadeX2)

// 3. Crie uma lista de strings, baseando-se na lista "pessoas", que diga se a pessoa pode ir
//  ou não para a Matrix. Para ir, ela precisa der uma idade maior que 18.

const pessoas = [
    {
        nome: "Angelina Jolie",
        idade: 80
    },
    {
        nome: "Eric Jones",
        idade: 2
    },
    {
        nome: "Paris Hilton",
        idade: 5
    },
    {
        nome: "Kayne West",
        idade: 16
    },
    {
        nome: "Bob Ziroll",
        idade: 100
    }
]

const verificaIdade = pessoas.map((pessoas) =>{
  if(pessoas.idade > 18){
   return `${pessoas.nome}, pode ir para Matrix!`
  } else {
   return `${pessoas.nome}, não tem a idade mínima!`
  }
})

console.log(verificaIdade)

// Exemplo: 
// ["Angelina Jolie pode ir para Matrix!", 
// "Eric Jones não tem a idade mínima!", 
// "Paris Hilton não tem a idade mínima!", 