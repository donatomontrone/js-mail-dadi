/**
 * 
 * 
 * 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 */

// Genero un numero casuale da 1 a 6 all'utente.

// Genero un numero casuale per il computer

// Verifico i due numeri
    // Se il numero del giocatore è più alto ==> Ha vinto il giocatore
    
    // Altrimenti se il numero del computer è più alto ==> Ha vinto il computer

//Stampo le istruzioni in id="result"

const userNumber = Math.floor( Math.random() * 6 ) + 1;
console.log('Questo è il numero dell\'utente ' + userNumber);

const computerNumber = Math.floor( Math.random() * 6 ) + 1;
console.log('Questo è il numero del computer ' + computerNumber);

const spanElement = document.createElement('span')
const result = document.getElementById('result');
let winner;
let textColor;

if (userNumber === computerNumber) {
    console.info('Peccato, questa partita è finita in pareggio!')
    winner = 'Peccato, questa partita è finita in pareggio!'
    textColor = 'text-primary'
} else if (userNumber > computerNumber){
    console.warn('Complimenti, HAI VINTO!')
    winner = 'Complimenti, HAI VINTO!'
    textColor = 'text-success'
} else {
    console.error('Mi dispace HAI PERSO!')
    winner = 'Mi dispace HAI PERSO!'
    textColor = 'text-danger'
}

result.innerHTML = `Ecco i risultati: questo è il tuo numero generato casualmente ( ${userNumber} ), questo è il mio numero generato casualmente (${computerNumber}). `
spanElement.innerHTML = winner;
spanElement.classList.add(textColor)
spanElement.classList.add('fw-bold')
result.append(spanElement);

