function separarAlunosPorStatus(alunos, mediafinal) {
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

const mediaFinal = 6;

const alunos = [
  { nome: "Rony", nota: 10 },
  { nome: "Ayla", nota: 10 },
  { nome: "Carlos", nota: 10 },
  { nome: "Rony", nota: 3 },
  { nome: "Ayla", nota: 4 },
  { nome: "Carlos", nota: 5 },
];

const { aprovados, reprovados, totalAprovados, totalReprovados } =
  separarAlunosPorStatus(alunos, mediaFinal);

console.log("Aprovados: ", aprovados);
console.log("Total de Aprovados: ", totalAprovados);
console.log("Reprovados: ", reprovados);
console.log(
  "Total de Reprovads: ",
  totalReprovados,
  "\nEstude mais, não desista!"
);
