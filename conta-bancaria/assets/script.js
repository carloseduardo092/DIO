class contaBancaria {
  constructor(config) {
    this.agencia = config.agencia;
    this.numero = config.numero;
    this.tipo = config.tipo;
    this.saldo = config.saldo;
  }
  get saldo(){
    return this._saldo;
  }
  set saldo(valor){
    if(valor < 0){
        alert("Saldo não pode ser negativo.")
        return
    }
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
        return "Saldo insuficiente"
    }
    this._saldo -= valor;
    return `Você sacou R$${valor}.  Saldo atual: R$${this._saldo}`; 
  }

  depositar(valor) {
    if(valor <= 0) {
        return "Depósito inválido!"
    }
    this._saldo += valor;
    return `Você depositou R$${valor}. Saldo atual: $${this._saldo}`
  }
}

class contaCorrente extends contaBancaria {
    constructor(config, cartaoDeCredito){
        super(config);
        this.cartaoDeCredito = cartaoDeCredito
    }
    get cartaoDeCredito(){
        return this._cartaoDeCredito
    }
    set cartaoDeCredito(valor){
        this._cartaoDeCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(config){
        super(config)
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(config){
        super(config)
    }
    sacar(valor){
     if (valor > 500) {
        return "Saque máximo permitido é de R$500."
     }
     return super.sacar(valor)
    }
}

// const minhaConta = new contaCorrente(
//     {agencia:"12343", numero:"56678", tipo:"corrente", saldo:1000},
//     true
// );
// console.log(minhaConta.sacar(200))
// console.log(minhaConta.depositar(500))
// console.log(minhaConta.cartaoDeCredito)