function invertString(string) {
  if (!string) {
    alert("Texto Inválido");
    return;
  }
  string = string.split('').reverse().join('');

  return string;
}

const palavra = prompt("DIGITE UMA PALVRA: ")
if (palavra) {
    alert("Sting invertida: " + invertString(palavra))
} else {
    alert("Nenhuma palavra foi inserida.")
}
