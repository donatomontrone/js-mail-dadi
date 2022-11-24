/**
 * 
 * 
 * 
// ! Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 */

//Creo un piccolo form nel file html;

//Chiedo all'utente di insiere la sua mail;

//Creo una lista di email con array:
    //Controllo che la mail inserita dall'utente sia nella lista tramite un ciclo;
    
// Stampo un messaggio al click dell'utente:
    //Se c'è con esito positivo;
    //Altrimenti con esito negativo;


const mailClass = ['alberto.baggio@gmail.com', 'alessio.deangelis@hotmail.com', 'alessio.napoletano@yahoo.com', 'andrea.fumagalli@libero.it', 'andrea.palumbo@live.com', 'angelo.tripodi@icloud.com', 'aniello.piscopo@gmail.com', 'antonino.irrera@aol.com', 'luca.arcudi@email.com', 'domenico.picariello@gmail.com', 'donato.montrone@outlook.com', 'florian.komnino@yahoo.com', 'francesco.locasto@libero.it', 'francesco.trudu@live.com', 'giada.gallitto@icloud.com', 'giorgio.dellutri@gmail.com', 'giulia.ballestrero@aol.com', 'lorenzo.ognibene@email.com', 'luca.castellucci@gmail.com', 'luca.marchesani@hotmail.com', 'manuel.bravaccini@yahoo.com', 'matteo.carbone@libero.it', 'monica.debona@outlook.com', 'renato.fringuello@icloud.com', 'riccardo.nestola@gmail.com', 'roberto.mantiglia@aol.com', 'samuele.ndreu@email.com', 'claudio.emmolo@gmail.com', 'sara.donzellini@hotmail.com', 'sebastiano.calella@yahoo.com', 'sebastiano.urban@libero.it', 'simone.presti@live.com', 'tommaso.bernardo@icloud.com', 'vincenzo.belardo@gmail.com', 'vincenzo.ruggiero@aol.com', 'riccardo.petricca@email.com', 'stefano.cappellini@gmail.com', 'luigi.micco@aol.com', 'elisabetta.daho@email.com']
const emailElement = document.getElementById('user-mail');
const userButton = document.querySelector('button');



userButton.addEventListener('click', function(){
    const userMail = (emailElement.value);
    const result = document.querySelector('p')
    let findMail = false;

    for (let i = 0; i < mailClass.length; i++) {
        
        if (userMail == (mailClass[i])){
            findMail= true;
        } 
    }
    if (findMail){
        result.innerHTML = `Sei iscritto alla migliore classe di Boolean, classe 81!!`
    } else {
        result.innerHTML = `Mi dispiace ma non sei iscritto a classe 81, ti perderai i magici recap pomeridiani di Luigi e Stefano!`
    }

})


