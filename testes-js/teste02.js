function contarVogais(string) {
    // Verificando se a string não é nula ou vazia
    if (!string) {
      alert("Por favor, insira uma palavra válida.");
      return;
    }
  
    let contador = 0;
    string = string.toLowerCase(); // Convertendo a string para minúsculas
  
    for (let i = 0; i < string.length; i++) {
      if ('aeiou'.includes(string[i])) { // Verificando se a letra é uma vogal
        contador++; // Incrementando o contador
      }
    }
  
    return contador; // Retornando o número de vogais
  }
  
  const palavra = prompt("DIGITE UMA PALAVRA: "); // Recebendo a entrada do usuário
  if (palavra) {
    alert("Número de vogais: " + contarVogais(palavra)); // Exibindo o resultado com alert
  } else {
    alert("Nenhuma palavra foi inserida.");
  }
  