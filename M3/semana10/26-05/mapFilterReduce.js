const listaDeCarros = ["monza", "onix", "IX35", "HRV", "Santa Fé", "Palio"];

const objetoDeCarro = listaDeCarros.map((carro, index, arrayInteiro) => {
  return {
    modelo: carro,
    id: index,
  };
});

// console.log(objetoDeCarro)

const notas = [2, 5, 6, 3, 8, 4, 9, 8, 0, 10, 8, 8];

const totalNotas = notas
  .map((nota) => nota)
  .reduce((atual, total) => atual + total);

console.log(totalNotas);

const novosNumeros = notas.map((n) => n * 10).join(",");

const acimaDaMedia = notas.filter((n) => n > 5);
console.log(acimaDaMedia);

const alunos = [
  {
    nome: "samuel",
    idade: 12,
    media: 7,
  },
  {
    nome: "jr",
    idade: 12,
    media: 8,
  },
  {
    nome: "Pedro",
    idade: 12,
    media: 3,
  },
  {
    nome: "Gustavo",
    idade: 12,
    media: 5,
  },
  {
    nome: "Samela",
    idade: 12,
    media: 9,
  },
  {
    nome: "Suelen",
    idade: 12,
    media: 8,
  },
];

const alunosNaMedia = alunos.filter((alunos) => alunos.media > 5)

console.log(alunosNaMedia);
