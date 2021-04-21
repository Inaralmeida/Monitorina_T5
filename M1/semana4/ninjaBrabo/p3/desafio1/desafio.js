


 var arma = prompt('Apareceu um monstro \nEscolha sua arma: \n 1 - FACA\n2 - garrafa')
 function escolherArma(){
    
 
     if(arma === '1'){
         document.write(`
         <p>Você  escolheu a FACA, então você venceu</p>

         <img src='https://st2.depositphotos.com/2885805/5832/v/600/depositphotos_58328449-stock-illustration-hand-holding-trophy.jpg' alt="">
 
        <a href="../desafio2/desafio1">conytinuar jornada</a>


         `)
     }else{
         document.write(`
         Você perdeu`)
     }
 }
 
 escolherArma()