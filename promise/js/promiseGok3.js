class GokApp {
	constructor() {
		this._prijzen = ['haardroger', 'koelkast', 'vliegreis'];
		this._maxwaarde = 2;
		this._randomWaarde = 0;
	}
	get prijzen() {
		return this._prijzen;
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
	gok(step) {
		if (step <= 3) {
			new Promise((resolve, reject) => {
					this.maxWaarde += step;
					document.getElementById("watTeWinnen").innerText = `Gok juist en win een ${this.prijzen[step-1]}....`;
					document.getElementById("label").innerText = `Geef een getal tussen 1 en ${this.maxWaarde}`;
					document.getElementById('gokMaar').onclick = () => {
						const gokWaarde = parseInt(document.getElementById("gok").value);
						gokWaarde === this.randomWaarde ? resolve(step) : reject(step)
					}
				})
				.then((step) => {
					this.showMessage(`Juist gegokt! Je hebt een ${this.prijzen[step-1]} gewonnen!`);
					this.gok(++step);
				}).catch((step) => {
					this.showMessage(`Fout gegokt! Je hebt geen ${this.prijzen[step-1]} gewonnen! Volgende keer beter!`);
					this.stopGok();
				})

		} else this.stopGok();
	}
	showMessage(message) {
		const li = document.createElement("li");
		li.appendChild(document.createTextNode(message))
		document.getElementById("prijs").appendChild(li);
	}
	stopGok(){
		document.getElementById('gokMaar').disabled = true;
			document.getElementById("gok").disabled = true;
	}
}

window.onload = () => {
	const app = new GokApp();
	app.gok(1);
};