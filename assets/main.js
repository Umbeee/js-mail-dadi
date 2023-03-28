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
        console.log("l'email coincide con una in archivio");
    }else{
        console.log("l'email non coincide");
    }
}


let banco = Math.floor(Math.random() * 10); 

console.log(banco);

