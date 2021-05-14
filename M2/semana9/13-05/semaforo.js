const vermelho = document.querySelector("#vermelho");
  const amarelo = document.querySelector("#amarelo");
  const verde = document.querySelector("#verde");

function semaforo() {
  

  vermelho.style = `background-color: red`;

  trocaCor();
}

function trocaCor() {

  setTimeout(() => {
    vermelho.style = `background-color:  red`;
    amarelo.style = `background-color: rgba(0, 0, 0, 0.685)`;
    verde.style = `background-color: rgba(0, 0, 0, 0.685)`;
  }, 0000);
  setTimeout(() => {
    vermelho.style = `background-color: rgba(0, 0, 0, 0.685);`;
    amarelo.style = `background-color: #ffb200`;
    verde.style = `background-color: rgba(0, 0, 0, 0.685);`;
  }, 3000);
  setTimeout(() => {
    vermelho.style = `background-color: rgba(0, 0, 0, 0.685);`;
    amarelo.style = `background-color: rgba(0, 0, 0, 0.685)`;
    verde.style = `background-color: green;`;
  }, 6000);

  setTimeout(() => {
    trocaCor();
  }, 10000);
}

