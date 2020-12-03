/*   istruzioni: 
["Creare un oggetto che descriva uno studente con le seguenti proprieta: nome, cognome e eta. 
Stampare a schermo attraverso il for in tutte le proprieta.", "Creare un array di oggetti di studenti. 
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", 
"Dare la possibilita all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: 
nome, cognome e eta." ], */



//CREO L'OGGETTO CON LE PROPRIETa DELLO STUDENTE 

var studente = {
    nome : "",
    cognome : "",
    eta : "",
}


// CON IL CICLO FOR-IN STAMPO TUTTE LE PROPRIETa CON UN ARRAY 

 for (var key in studente) {
    var studenteNome = studente[key].nome;
    var studenteCognome = studente[key].cognome;
    var studenteEta = studente[key].eta;
   
} 



// CREO ARREY DI OGGETTI DI STUDENTI
var studente = [
    {
    nome : "Mariapia",
    cognome : "Gianguzzi",
    eta : 30,
    },

    {
    nome : "Romina",
    cognome : "Trazzi",
    eta : 32,
    },

    {
    nome : "Raffaele",
    cognome : "Baldassarre",
    eta : 32,
    },

    {
    nome : "Andrea",
    cognome : "Di Cataldi",
    eta : 35,
    }, 

    {
    nome : "Federico",
    cognome : "Scarpati",
    eta : 32,
    }
]
  

//CON IL PROMPT CHIEDO ALL'UTENTE DI INSERIRE NOME COGNOME ETA
  var nomeStudente = prompt("Come ti chiami?"); 
  var cognomeStudente = prompt("Qual è il tuo cognome?");
  var studenteEta = prompt("Qual è la tua eta?");

  studente.push({
      nome: nomeStudente,
      cognome: cognomeStudente,
      eta: studenteEta,
  })
  console.log(studente); 



  
  for (var key in studente) {
    document.getElementById("classe").innerHTML += key + ":" + studente[key] + "<br>";
 }
 

  




  