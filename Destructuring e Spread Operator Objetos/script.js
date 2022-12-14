// 1. Acesse as propriedades "tamanhoDaBarba", "idade" e 
// "familia" do objeto "viking" por meio do Destructuring, e logue-as no console.

const viking = {
  familia: 'Lothbrok',
  tamanhoDaBarba: 'enorme',
  idade: 30
};

const {tamanhoDaBarba, idade, familia} = viking;
console.log(tamanhoDaBarba, idade, familia);
// 2. Acesse as propriedades "name" e "age" do objeto "usuário"
//  por meio do Destructuring, renomeie-as para sua tradução em português, e logue-as no console.

const usuario = {
  name: 'Jane Doe',
  age: 28,
}

const {name: nome, age : _idade} = usuario
console.log(nome, _idade)

// 3. Acesse, utilizando o Destructuring, todas as propriedades dentro dos objetos 
// "dadosPessoais" e "dadosProfissionais" do objeto "piloto", e logue-as no console.

const piloto = {
  dadosPessoais: {
    nome: 'Ayrton Senna',
    idade: 34
  },
  dadosProfissionais: {
    categoria: 'Fórmula 1',
    conquistas: 'É o melhor de todos os tempos. =)'
  }
}

const {dadosPessoais: { name, idade : __idade}, dadosProfissionais: {categoria, conquistas}} = piloto;

// 4. Assinale as propriedades "a" e "b" do objeto abaixo a duas variáveis,
//  e distribua as restantes em uma.

const obj = {a: 10, b: 20, c: 30, d: 40};

const {a, b, ...rest} = obj