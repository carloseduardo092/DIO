function separarAlunosPorStatus(alunos, mediaFinal) {
  const aprovados = [];
  const reprovados = [];

  for (const aluno of alunos) {
    const { nome, nota } = aluno;

    if (nota >= mediaFinal) {
      aprovados.push({ nome, nota });
    } else {
      reprovados.push({ nome, nota });
    }
  }

  aprovados.sort((a, b) => b.nota - a.nota);
  reprovados.sort((a, b) => a.nota - b.nota);

  return {
    aprovados,
    reprovados,
    totalAprovados: aprovados.length,
    totalReprovados: reprovados.length,
  };
}

const alunos = [
  { nome: "João", nota: 10 },
  { nome: "Carlos", nota: 9 },
  { nome: "Eduardo", nota: 8 },
  { nome: "Camilla", nota: 5 },
  { nome: "José", nota: 4 },
  { nome: "junior", nota: 4 },
];

const mediaFinal = 6;

const { aprovados, reprovados, totalAprovados, totalReprovados } =
  separarAlunosPorStatus(alunos, mediaFinal);

console.log("Aprovados:", aprovados);
console.log("Total de Aprovados: ", totalAprovados);
console.log("Reprovados:", reprovados);
console.log(
  "Total de Reprovados: ",
  totalReprovados,
  "\nEstude mais, não desista!"
);
