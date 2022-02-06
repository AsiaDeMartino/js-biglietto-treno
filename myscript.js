//chiedere numero kilometri
const numeroKilometri = parseInt(prompt("Quanti kilometri devi fare?"));
console.log(numeroKilometri);
//chiedere età
const età = parseInt(prompt("Quanti anni hai?"));
console.log(età);

if( isNaN(numeroKilometri)) {
    alert("devi inserire un numero!");
}

if( isNaN(età)) {
    alert("devi inserire un numero!");
}

// if( (isNaN(numeroKilometri)) || (isNaN(numeroKilometri)) ) {
//     alert("Devi inserire un numero!")
// }

//calcolare costo viaggio (km * 0,21€)
let costo = numeroKilometri * 0.21;
console.log(costo);

//applicare sconto 20% se l'età è > 18
if( età <= 18 ) {
    sconto = (costo * 20) / 100;
    console.log(sconto);
    costo = costo - sconto;
    console.log(costo);
}

//applicare sconto 40% se l'età è > 65
else if( età <= 65 ) {
    sconto = (costo * 40) / 100;
    console.log(sconto);
    costo = costo - sconto;
    console.log(costo);
}

//aggiungere prezzo all'html
document.getElementById("ticket").innerHTML += costo + "€";
