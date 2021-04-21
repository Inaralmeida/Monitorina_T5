var limiteTanque = 20
var valorGasolina = 5.50
var kmPercorrido = 135
var destino = prompt('Qual é o seu destino?')
var nome = prompt("Qual é o seu nome")
console.log("Nome do usuario: " + nome)
// manteve a velocidade constante de 60km/p


function viagem(limiteTanque, valorGasolina, kmPercorrido, destino){

    document.write("fizemos uma viagem para " + destino +'<br>')
    document.write("A viagem foi de " + kmPercorrido + 'km <br>')

    //Quantos km faz o tanque
    var kmTotalTanque = limiteTanque * 2
    document.write('O tanque do carro faz ' + kmTotalTanque + 'km <br>')

    console.log(kmTotalTanque)
    //Quantas vezes abastecer
    var qtsVzsAbastecer = Math.ceil(kmPercorrido / kmTotalTanque)
    document.write('Precisamos abastecer ' + qtsVzsAbastecer +'vez(es) <br>')
    console.log(qtsVzsAbastecer)
    //Quantos litros abastecer
    var qtsLitrosAbastecer = (kmPercorrido / 2) - limiteTanque
    document.write('Precisamos abastecer ' + qtsLitrosAbastecer +'litros <br>')
    console.log(qtsLitrosAbastecer)
    //valor gasto com a gasolina
    var gastoGasolina = qtsLitrosAbastecer * valorGasolina
    document.write('Gastamos R$' + gastoGasolina + ' com gasolina <br>')
    console.log(gastoGasolina)
    //quanto tempo durou a viagem
    var tempoViagem = Math.ceil(kmPercorrido / 60)
    document.write("A viagem demorou aproximadamente " + tempoViagem + ' horas')
    console.log(tempoViagem)
}
viagem(limiteTanque, valorGasolina, kmPercorrido, destino)