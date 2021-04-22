var nome, pedido, continuar;
var pedidos = [];
var valores = [];
function conhecerCliente() {
  var nome = prompt("digite seu nome");
  alert(`Ola ${nome}, Boa noite`);
}

function apresentarPreco() {
  var continuar = "1";
  var pedido = "";
  var pedidos = [];
  var valores = [];
  while (continuar === "1") {
    pedido = parseInt(
      prompt(
        "o que gostaria de pedir: \n 1 - Suco\n2 - Agua\n3 - cerveja\n4 - Refrigerante"
      )
    );
    console.log(pedido);
    if (pedido === 1) {
      alert(`Suco: 2,50`);
      pedidos.push("suco");
      valores.push(2.50);
      continuar = prompt(`Gostaria de pedir algo mais\n1-sim\n2-não`);
    } else if (pedido === 2) {
      alert(`Agua: 2,50`);
      pedidos.push("Agua");
      valores.push(2.50);
      continuar = prompt(`Gostaria de pedir algo mais\n1-sim\n2-não`);
    } else if (pedido === 3) {
      alert(`cerveja: 5,50`);
      pedidos.push("cerveja");
      valores.push(5.50);
      continuar = prompt(`Gostaria de pedir algo mais\n1-sim\n2-não`);
    } else if (pedido === 4) {
      alert(`Refrigerante: 4,50`);
      pedidos.push("Refrigerante");
      valores.push(4.50);
      continuar = prompt(`Gostaria de pedir algo mais\n1-sim\n2-não`);
    }
    else{
        alert('Opção invalida tente novamente')
        continuar = 1
    }
    
  }

  document.write(`<h1>Conta</h1>`);
  console.log(pedidos, valores)
  if (pedidos.length === valores.length) {
    var total = 0;
    for (var i = 0; i < pedidos.length; i++) {
      total += parseFloat(valores[i]);
      document.write(`
            <li><p>${pedidos[i]}, R$${valores[i]}</p></li>
            `);
    }
    document.write(`<p>Total:</p><span>R$${total}</span>`);
  }
}

conhecerCliente();
apresentarPreco();
