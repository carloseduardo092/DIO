function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "João",
  idade: 30,
};

const pessoa2 = {
  nome: "Maria",
  idade: 25,
};
// console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.apply(pessoa2, [10]));
