//tramite input ottenere email, confrontare con array di email con for + if all'interno, e stampare esito

//generare numero random da 1 a 6, uno per utente e uno per pc (banco), successivamente stabilire vincitore

function controlloEmail(){
    let inputEmail = document.getElementById('inputEmail').value;
    console.log(inputEmail);

    let arrayEmail = [
        'emailprova1@gmail.com',
        'emailprova2@gmail.com',
        'emailprova3@gmail.com',
        'emailprova4@gmail.com',
    ]

    let soldatino = false;

    for(let i=0; i < arrayEmail.length; i++)
    {
        if(arrayEmail[i]==inputEmail){
            soldatino = true;
        }
    }

    commentoEmail = document.getElementById('email-commento');
    commentoEmail.classList.remove("alert", "alert-success", "alert-danger") //per settare a default quando si clicca nuovamente il comando senza f5 pagina

    if(soldatino == true){

        commentoEmail.classList.add("alert", "alert-success");
        commentoEmail.innerText = "l'email corrisponde ad una presente in archivio";
        console.log("l'email coincide con una in archivio");
        //alert("l'email coincide con una in archivio");

    }else{

        commentoEmail.classList.add("alert", "alert-danger");
        commentoEmail.innerText = "l'email non corrisponde ad una presente in archivio";
        console.log("l'email non coincide");
        //alert("l'email NON coincide con una in archivio");
    }
}


function randomDadi(){

    let banco = 0;

    let player = 0;

    for(let i=0; i< 1; i++){
        let random = Math.floor(Math.random() * 10);
        if(random <= 6 && random>0){
            banco = random;
        }else{
            i= -1;
        }
    }

    for(let i=0; i< 1; i++){
        let random = Math.floor(Math.random() * 10);
        if(random <= 6 && random>0){
            player = random;
        }else{
            i= -1;
        }
    }

    console.log(player);
    console.log(banco);

    let playerDadoIcona = document.getElementById('playerDadoIcona');
    playerDadoIcona.classList.remove("fa-solid", "fa-dice-six", "fa-dice-five",  "fa-dice-four", "fa-dice-three", "fa-dice-two", "fa-dice-one" )

   if(player == 6){
    playerDadoIcona.classList.add("fa-solid", "fa-dice-six")
  }else if(player ==5){
    playerDadoIcona.classList.add("fa-solid", "fa-dice-five")
  }else if(player ==4){
    playerDadoIcona.classList.add("fa-solid", "fa-dice-four")
  }else if(player ==3){
    playerDadoIcona.classList.add("fa-solid", "fa-dice-three")
  }else if(player ==2){
    playerDadoIcona.classList.add("fa-solid", "fa-dice-two")
  }else{
    playerDadoIcona.classList.add("fa-solid", "fa-dice-one")
  }
  

    let bancoDadoIcona = document.getElementById('bancoDadoIcona');
    bancoDadoIcona.classList.remove("fa-solid", "fa-dice-six", "fa-dice-five",  "fa-dice-four", "fa-dice-three", "fa-dice-two", "fa-dice-one" )

    if(banco == 6){
    bancoDadoIcona.classList.add("fa-solid", "fa-dice-six")
    }else if(banco ==5){
    bancoDadoIcona.classList.add("fa-solid", "fa-dice-five")
    }else if(banco ==4){
    bancoDadoIcona.classList.add("fa-solid", "fa-dice-four")
    }else if(banco ==3){
    bancoDadoIcona.classList.add("fa-solid", "fa-dice-three")
    }else if(banco ==2){
    bancoDadoIcona.classList.add("fa-solid", "fa-dice-two")
    }else{
    bancoDadoIcona.classList.add("fa-solid", "fa-dice-one")
    }




    if(player> banco){
        document.getElementById('vincitore').innerHTML = 'HAI VINTO!';
    }else if(player == banco){
        document.getElementById('vincitore').innerHTML = 'HAI FATTO PUSH!';
    }else{
        document.getElementById('vincitore').innerHTML = 'HAI PERSO :(';
    }
}



