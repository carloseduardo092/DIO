const botao = document.getElementById("change-cat");
const img = document.getElementById("cat");

async function changeMode() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    img.src = data[0].url;
  } catch (error) {
    console.error("Erro ao buscar a imagem do gato:", error);
  }
}

botao.addEventListener("click", changeMode);

changeMode();
