//O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

const marcas = ['sansung', 'motorola', 'nokia', 'apple', 'acer', 'dell', 'asus', 'zenphone']


//Mostra só os itens que estão dentro do intervalo passado como parametros, ou seja do index 0 até o index 2
const celulares = marcas.slice(3)
console.log(celulares)