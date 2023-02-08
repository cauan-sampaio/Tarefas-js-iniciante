//const pessoa1 = { objeto pessoa1
  //  nome: 'Luiz',
    //sobrenome: 'Miranda',
    //idade: 25
//};
//console.log(pessoa1.nome);
function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 29);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade); 
const pessoa3 = { 
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
  fala() {
  console.log(`${this.nome} ${this.sobrenome} está falando oi...`);// this: Este objeto
  console.log(`A minha idade é : ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++;
  }
};
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();