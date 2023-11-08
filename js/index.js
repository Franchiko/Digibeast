function iniciarJuego() {
	let botonMascotaJugador = document.getElementById("boton-mascota");
	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
	let inputHypodoge = document.getElementById("Hypodoge");
	let inputKapypepo = document.getElementById("Kapypepo");
	let inputRatyheia = document.getElementById("Ratyheia");

	if (inputHypodoge.checked) {
		alert("Seleccionaste a Hypodoge");
	} else if (inputKapypepo.checked) {
		alert("Seleccionaste a Kapypepo");
	} else if (inputRatyheia.checked) {
		alert("Seleccionaste a Ratyheia");
	} else {
		alert("Selecciona una mascota");
	}

	alert("Eligieron un Digibeast ya ! \n\nA JUGAR!!");
}

// Este codigo hace que se cargue el archivo JS al momento de cargar la pagina
window.addEventListener("load", iniciarJuego);
