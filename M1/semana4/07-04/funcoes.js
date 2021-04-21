let tanque = 20;
let valorGasolina = 5.5;
let kmPercorrido = 135;

//sei que 1/2 litro faz 1km
//O carro anda constantemente em 60km/h
//Quero Saber:
// Quantos km faz o tanque
// quantos Litros é necessario para a viagem
// Quantas Vezes precisam Abastecer
// Quantos litros Abastecer
// quantidade minima de vezes que precisa Abastecer
// valor gasto com a gasolina
// destino
// quantas letras tem o destino
// Mostrar o destino e letra maiuscula
// Em quanto tempo será feita essa viagem

var quantosLitrosFazOTanque = tanque * 2;
var quantosLitrosNecessario = kmPercorrido * 0.5;
var quantasVezesPRecisoAbastecer = Math.floor(
  quantosLitrosNecessario / quantosLitrosFazOTanque
);
var qtsLtsAbastecer = Math.floor(
  quantosLitrosNecessario - quantosLitrosFazOTanque
);
var vezesMinAbastecer = Math.ceil(qtsLtsAbastecer / tanque);
var gastoGasolina = qtsLtsAbastecer * valorGasolina;
console.log(
  quantosLitrosFazOTanque,
  quantosLitrosNecessario,
  quantasVezesPRecisoAbastecer,
  qtsLtsAbastecer,
  vezesMinAbastecer,
  gastoGasolina
);
