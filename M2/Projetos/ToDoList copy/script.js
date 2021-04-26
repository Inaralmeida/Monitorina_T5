var btnAdd = document.querySelector("#btnAdd");
var lista = document.querySelector("#lista");

btnAdd.addEventListener("click", () => {
  var texto = document.querySelector("#input").value;
  var calendario = document.querySelector('#data')
  var data = moment(calendario.value)
  
  console.log(data.format('DD-MM-YY'))
  criarTarefa(texto);

  input.value = "";
});

function criarTarefa(texto) {
  if (texto.length > 0) {
    var li = document.createElement("li");
    lista.appendChild(li);
    li.classList.add("itemLista");
    li.innerText = texto;

    var div = criarDiv(li);

    btnFeito(div);

    btnExclui(div);
  } else {
    alert("Adicione um texto");
  }
}

function criarDiv(li) {
  var div = document.createElement("div");
  li.appendChild(div);
  return div;
}

function btnFeito(div) {
  var btn = document.createElement("button");
  div.appendChild(btn);
  btn.classList.add("btnFeito");

  btn.addEventListener("click", riscaTarefa);
}

function btnExclui(div) {
  var btn = document.createElement("button");
  div.appendChild(btn);
  btn.classList.add("btnExcluir");
  btn.addEventListener("click", excluiTarefa);
}

function riscaTarefa(event) {
  var btnFeito = event.target;

  var div = btnFeito.parentElement;
  var texto = div.parentElement;

  texto.classList.toggle("feito");
}

function excluiTarefa(event) {
  var btnFeito = event.target;

  var div = btnFeito.parentElement;
  var li = div.parentElement;

  li.remove();
}
