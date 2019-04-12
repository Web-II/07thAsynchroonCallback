const gok1 = () =>
	new Promise((resolve, reject) => {
		const gok = Number.parseInt(prompt("Geef een getal tussen 1 en 3"));
		// const randomWaarde = Math.floor(Math.random() * 3) + 1;
		const randomWaarde = 2;
		gok === randomWaarde ? resolve("Haardroger") : reject("Geen haardroger");
	});

const gok2 = () =>
	new Promise((resolve, reject) => {
		const gok = Number.parseInt(prompt("Geef een getal tussen 1 en 5"));
		// const randomWaarde = Math.floor(Math.random() * 5) + 1;
		const randomWaarde = 2;
		gok === randomWaarde ? resolve("Koelkast") : reject("Geen koelkast");
	});

const gok3 = () =>
	new Promise((resolve, reject) => {
		const gok = Number.parseInt(prompt("Geef een getal tussen 1 en 8"));
		// const randomWaarde = Math.floor(Math.random() * 8) + 1;
		const randomWaarde = 2;
		gok === randomWaarde ? resolve("Vliegreis") : reject("Geen vliegreis");
	});

function init() {
	document.getElementById("gokMaar").onclick = () => {
		Promise.all([gok1(), gok2(), gok3()]).then(values => {
			console.log(values);
		}).catch(values => {
			console.log(values)
		});
	}
}

window.onload = init;