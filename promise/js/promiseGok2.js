class GokApp {
    constructor() {
        this._prijs = 'haardroger';
        this._maxwaarde = 3;
        this._randomWaarde = 0;
    }
    get prijs() {
        return this._prijs;
    }
    get maxWaarde() {
        return this._maxwaarde;
    }
    set maxWaarde(value) {
        this._maxwaarde = value;
    }
    get randomWaarde() {
        //return 2;
        return Math.floor(Math.random() * this.maxWaarde + 1)
    }
    gok() {
        new Promise((resolve, reject) => {
                document.getElementById("watTeWinnen").innerText = `Gok juist en win een ${this.prijs}....`;
                document.getElementById("label").innerText = `Geef een getal tussen 1 en ${this.maxWaarde}`;
                document.getElementById('gokMaar').onclick = () => {
                    const gokWaarde = parseInt(document.getElementById("gok").value);
                    const randomWaarde = this.randomWaarde;
                    gokWaarde === randomWaarde ? resolve() : reject(randomWaarde)
                }
            })
            .then(() => {
                this.showMessage(`Juist gegokt! Je hebt een ${this.prijs} gewonnen!`);
            })
            .catch((rejectValue) => {
                this.showMessage(`Fout gegokt! Het juiste cijfer was ${rejectValue}! Volgende keer beter!`);
            })
    }
    showMessage(message) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(message))
        document.getElementById("prijs").appendChild(li);
    }
}

window.onload = () => {
    const app = new GokApp();
    app.gok();
};