function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "a", "y") {
    return name + " Está tocando uma pra mim!";
  } else {
    return name + " Não está tocando Banjo";
  }
}

console.log(areYouPlayingBanjo("Apollo"));
console.log(areYouPlayingBanjo("Yakku"));