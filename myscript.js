//chiedere numero kilometri
const numeroKilometri = parseInt(prompt("Quanti kilometri devi fare?"));
console.log(numeroKilometri);
//chiedere età
const età = parseInt(prompt("Quanti anni hai?"));
console.log(età);

if( isNaN(numeroKilometri)) {
    alert("devi inserire un numero!")
}

if( isNaN(età)) {
    alert("devi inserire un numero!")
}

// if( (isNaN(numeroKilometri)) || (isNaN(numeroKilometri)) ) {
//     alert("Devi inserire un numero!")
// }

//calcolare costo viaggio (km * 0,21€)

//applicare sconto 20% se l'età è > 18
//applicare sconto 40% se l'età è > 65
//aggiungere prezzo all'html