let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
	let botonMascotaJugador = document.getElementById("boton-mascota");
	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

	//Selector de tipos de ataque de Juagador
	let botonFuego = document.getElementById("boton-fuego");
	botonFuego.addEventListener("click", ataqueFuego);
	let botonAgua = document.getElementById("boton-agua");
	botonAgua.addEventListener("click", ataqueAgua);
	let botonTierra = document.getElementById("boton-tierra");
	botonTierra.addEventListener("click", ataqueTierra);
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
}

function seleccionarMascotaEnemigo() {
	let mascotaAleatorio = aleatorio(1, 3);
	let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
	if (mascotaAleatorio == 1) {
		spanMascotaEnemigo.innerHTML = "Hypodoge";
	} else if (mascotaAleatorio == 2) {
		spanMascotaEnemigo.innerHTML = "Kapypeppo";
	} else {
		spanMascotaEnemigo.innerHTML = "Ratyheia";
	}
}

//Funciones para cargar el tipo de ataque de jugador
function ataqueFuego() {
	ataqueJugador = "FUEGO";
	ataqueAleatorioEnemigo();
}

function ataqueAgua() {
	ataqueJugador = "AGUA";
	ataqueAleatorioEnemigo();
}

function ataqueTierra() {
	ataqueJugador = "TIERRA";
	ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);

	if (ataqueAleatorio == 1) {
		ataqueEnemigo = "FUEGO";
	} else if (ataqueAleatorio == 2) {
		ataqueEnemigo = "AGUA";
	} else {
		ataqueEnemigo = "TIERRA";
	}
	crearMensaje();
}

function crearMensaje() {
	let sectionMensajes = document.getElementById("messages");
	let parrafo = document.createElement("p");
	parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador} , la mascota del enemigo atacó con ${ataqueEnemigo}`;
	sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Este codigo hace que se cargue el archivo JS al momento de cargar la pagina
window.addEventListener("load", iniciarJuego);
