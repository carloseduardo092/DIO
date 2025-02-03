function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "joão",
  idade: 23,
};
const pessoa2 = {
  nome: "Carlos",
  idade: 24,
};

console.log(calculaIdade.call(pessoa2, 10));
console.log(calculaIdade.apply(pessoa2, [15]));
