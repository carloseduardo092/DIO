function calender(dataArray) {
  var data = new Date(dataArray[0], dataArray[1] - 1, dataArray[2].toString());
  

  const diasDaSemana = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feria",
    "sexta-feira",
    "sábado",
    "domingo",
  ];

  return diasDaSemana[data.getDay()];
}
console.log(calender([2025, 10, 2]));
