const boletim1 ={
    'matematica': 6,
    'historia': 7,
    'fisica': 8,
    'geografia': 9,
    'quimica': 10
  };
const boletim2 = {
    'matematica': 6,
    'historia': 7,
    'fisica': 8,
    'geografia': 9,
    'quimica': 10
  };
const boletim3 = {
    'matematica': 6,
    'historia': 7,
    'fisica': 8,
    'geografia': 9,
    'quimica': 9
  };

function recompensa(boletim1, boletim2, boletim3) {
  let filho1 = 0;
  let filho2 = 0;
  let filho3 = 0;

  const tabelaIdades = {
    idadePrimeiroFilho: 14,
    idadeSegundoFilho: 9,
    idadeTerceiroFilho: 8,
  }

  for (let nota in boletim1) {
    let totalNota = boletim1[nota];
    filho1 += totalNota;
  }
  for (let nota in boletim2) {
    let totalNota = boletim2[nota];
    filho2 += totalNota;
  }
  for (let nota in boletim3) {
    let totalNota = boletim3[nota];
    filho3 += totalNota;
  }

  console.log(filho1, filho2, filho3);

 

  if (filho3 >= filho1 && filho3 >= filho2) {
    return "Eu preciso comprar uma bicicleta para meu terceiro filho.";
  } else if (filho2 >= filho1 && filho2 > filho3) {
    return "Eu preciso comprar uma bicicleta para meu segundo filho.";
  } else {
    return "Eu preciso comprar uma bicicleta para meu primeiro filho.";
  }
}

console.log(recompensa(boletim1, boletim2, boletim3))
