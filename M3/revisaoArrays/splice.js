//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
const marcas = ['sansung', 'motorola', 'nokia', 'apple', 'zenphone', 'acer', 'dell', 'asus']
const carros = ['bmw', 'hb20', 'fiat']
marcas.splice(5, 1, carros )

console.log(marcas)


//tambem podemos substituir apenas um elemento 