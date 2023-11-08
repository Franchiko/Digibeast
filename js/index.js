function iniciarJuego() {
	let botonMascotaJugador = document.getElementById("boton-mascota");
	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
	let inputHypodoge = document.getElementById("Hypodoge");
	let inputKapypeppo = document.getElementById("Kapypeppo");
	let inputRatyheia = document.getElementById("Ratyheia");

	if (inputHypodoge.checked) {
		alert("Seleccionaste a Hypodoge");
	} else if (inputKapypeppo.checked) {
		alert("Seleccionaste a Kapypeppo");
	} else if (inputRatyheia.checked) {
		alert("Seleccionaste a Ratyheia");
	} else {
		alert("Selecciona una mascota");
	}
	alert("Ya elegiste un Digibeast \n\nA JUGAR!!");
}

// Este codigo hace que se cargue el archivo JS al momento de cargar la pagina
window.addEventListener("load", iniciarJuego);
