//chiedere numero kilometri
let numeroKilometri = parseFloat(prompt("Quanti kilometri devi fare?"));
console.log(numeroKilometri);
//chiedere età
let età = parseInt(prompt("Quanti anni hai?"));
console.log(età);

// if( isNaN(numeroKilometri)) {
//     alert("devi inserire un numero!");
// }

// if( isNaN(età)) {
//     alert("devi inserire un numero!");
// }

if( isNaN(numeroKilometri) || isNaN(età) ) {
     alert("Devi inserire un numero!")
} else{
    //calcolare costo viaggio (km * 0,21€)
let costo = numeroKilometri * 0.21;
console.log(costo);

if( età < 18 ) {                          //applicare sconto 20% se l'età è > 18
    sconto = (costo * 20) / 100;
    console.log(sconto);
    costo = costo - sconto;
    console.log(costo);
} else if( età > 65 ) {                    //applicare sconto 40% se l'età è > 65
    sconto = (costo * 40) / 100;
    console.log(sconto);
    costo = costo - sconto;
    console.log(costo);
}

//aggiungere prezzo all'html
document.getElementById("ticket").innerHTML += (costo) + "€";
}


