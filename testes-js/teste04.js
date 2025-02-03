function palavrasFrase(string) {
  string = string.split(" ");
  return string.length;
}

const frase = prompt("INSIRA UMA FRASE: ")
if(frase) {
    alert("Tamanho da frase: " + palavrasFrase(frase))
}else {
    alert("Nenhuma frase inserida")
}