function calculadora() {
  const operacao = Number(
    prompt(
      "escolha uma operação:\n 1- soma(+) \n 2- subtração (-) \n 3 - multiplicação (*) \n 4 - divisão real (/) \n 5 - Divisão inteira (%) \n 6 - potenciação (**)"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("Erro - Operação Inválida");
    calculadora();
  } else {
    let n1 = Number(prompt("Insira o primeiro valor: "));
    let n2 = Number(prompt("Insira o segundo valor: "));
    let resultado;

    if (!n1 || !n2) {
      alert("Erro - parâmetros inválido");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt(
          "Desejas fazer uma nova Operação? \n 1- sim \n 2 - nao"
        );

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais!");
        } else {
          alert("Digite uma operação válida");
          novaOperacao();
        }
      }
    }

    // if (operacao == 1) {
    //   soma();
    // } else if (operacao == 2) {
    //   subtracao();
    // } else if (operacao == 3) {
    //   multiplicacao();
    // } else if (operacao == 4) {
    //   divisaoReal();
    // } else if (operacao == 5) {
    //   divisaoInteira();
    // } else if (operacao == 6) {
    //   potenciacao();
    // }

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}
calculadora();
