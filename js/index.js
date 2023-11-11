function iniciarJuego() {
	let botonMascotaJugador = document.getElementById("boton-mascota");
	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
	let inputHypodoge = document.getElementById("Hypodoge");
	let inputKapypeppo = document.getElementById("Kapypeppo");
	let inputRatyheia = document.getElementById("Ratyheia");
	let spanMascotaJugador = document.getElementById("mascota-jugador");

	if (inputHypodoge.checked) {
		spanMascotaJugador.innerHTML = "Hypodoge";
	} else if (inputKapypeppo.checked) {
		spanMascotaJugador.innerHTML = "Kapypeppo";
	} else if (inputRatyheia.checked) {
		spanMascotaJugador.innerHTML = "Ratyheia";
	} else {
		alert("Selecciona una mascota");
	}
	seleccionarMascotaEnemigo();

	alert("Ya elegiste un Digibeast \n\nA JUGAR!!");

	function seleccionarMascotaEnemigo() {
		let ataqueAleatorio = aleatorio(1, 3);
		let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
		if (ataqueAleatorio == 1) {
			spanMascotaEnemigo.innerHTML = "Hypodoge";
		} else if (ataqueAleatorio == 2) {
			spanMascotaEnemigo.innerHTML = "Kapypeppo";
		} else {
			spanMascotaEnemigo.innerHTML = "Ratyheia";
		}
	}

	function aleatorio(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

// Este codigo hace que se cargue el archivo JS al momento de cargar la pagina
window.addEventListener("load", iniciarJuego);
