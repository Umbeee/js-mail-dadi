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


    if(soldatino == true){
        //document.writeln("l'email coincide con una in archivio");
        console.log("l'email coincide con una in archivio");
        alert("l'email coincide con una in archivio");
    }else{
        console.log("l'email non coincide");
        alert("l'email NON coincide con una in archivio");
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

    document.getElementById('playerDado').innerHTML = 'Il giocatore ha fatto: ' + player;
    document.getElementById('bancoDado').innerHTML = 'Il banco ha fatto: ' + banco;

    if(player> banco){
        document.getElementById('vincitore').innerHTML = 'Il giocatore vince';
    }else if(player == banco){
        document.getElementById('vincitore').innerHTML = 'Il giocatore pareggia';
    }else{
        document.getElementById('vincitore').innerHTML = 'Il banco vince';
    }
}



