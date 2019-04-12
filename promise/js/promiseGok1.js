const promiseGok1 = new Promise((resolve, reject) => {   
    const gok = Number.parseInt(prompt("Geef een getal tussen 1 en 3"));
    const randomWaarde = Math.floor(Math.random() * 3) + 1;
    gok === randomWaarde ? resolve() : reject(randomWaarde);
})
.then(() => {
    console.log("Juist gegokt! U hebt een haardroger gewonnen!");
})
.catch((rejectWaarde) => {
    console.log(`Fout gegokt! De waarde op de dobbelsteen was ${rejectWaarde}`);
});