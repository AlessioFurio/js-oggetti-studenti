
// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
// creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.


$(document).ready(function(){

// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età.
var studente = {
    'nome': 'Alessio',
    'cognome': 'Furio',
    'eta': 27
}
console.log(studente);

// Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
for (var key in studente) {
    console.log(key + ': ' + studente[key]);
}


// creare un array di oggetti "studente".
var classe = [
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 10
    },
    {
        'nome': 'Luigi',
        'cognome': 'Bianchi',
        'eta': 11
    },
    {
        'nome': 'Franco',
        'cognome': 'Neri',
        'eta': 9
    }
];

// Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
for (var i = 0; i < classe.length; i++) {

    for (var key in classe[i]) {
    }
    console.log(classe[i]['nome'] + ' ' + classe[i]['cognome']);

}


var nuovoStudente = {};
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
nuovoStudente['nome'] = prompt('nome');
nuovoStudente['cognome'] = prompt('cognome');
nuovoStudente['eta'] = prompt('eta');

// Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
console.log(nuovoStudente);
classe.push(nuovoStudente);
console.log(classe);


});
