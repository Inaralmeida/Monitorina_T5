const idades = [6, 14, 39, 2, 25, 57, 1, 9];

const maiorDeIdade = idades.filter((idade) => idade < 18);
console.log(maiorDeIdade);

const pets = [
  {
    nome: "Butters",
    idade: 3,
    tipo: "dog",
  },
  {
    nome: "Lizzy",
    idade: 6,
    tipo: "dog",
  },

  {
    nome: "Red",
    idade: 1,
    tipo: "cat",
  },
  {
    nome: "Joey",
    idade: 3,
    tipo: "dog",
  },
  {
    nome: "Tangerina",
    idade: 1,
    tipo: "cat",
  }
];

const sohDogs = pets.filter((item) => item.tipo === 'cat');

console.log(sohDogs);
