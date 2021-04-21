//  var palavra = prompt("Digite uma palavra")


 //saber quantas letras tem a frase/palavra (.length)
//saber se existe um elemento especifico dentro da string (.indexOF)
//Procurar por uma string dentro de uma string
//pode substirtuir o conteudo de uma string (.replace)
//transformar o conteudo para Maisculo (.toUpperCase)
//transformar o conteudo para Minusculo (.toLowerCase)
//Removo os espaços em branco de ambos lados de uma string (.trim())

var palavra = 'café'
var tamPalavra = palavra.length
var busca = palavra.indexOf('a')
var maiusculo = palavra.toUpperCase()
var minusculo = palavra.toLowerCase()


//  document.write(`Palavra: ${palavra}<br>`)
//  document.write(`Numero de letras: ${tamPalavra}<br>`)
//  document.write(`${palavra} tem a letra "A" em qual indice? R: ${busca}<br>`)
//  document.write(`${palavra} em letra minuscula: ${maiusculo}<br>`)
//  document.write(`${palavra} em letra maiuscula: ${minusculo}<br>`)


//  document.write('Transformando Numero em String')
 var numero = 55
 var string = numero.toString()

 var tempo = Math.ceil(135 / 60)
 console.log(tempo)