const sectionSeleccionarAtaque = document.getElementById("seleccionar_ataque");
const displayBotonReinicio = document.getElementById("reset");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById("seleccionar_mascota");
const inputHypodoge = document.getElementById("Hypodoge");
const inputKapypeppo = document.getElementById("Kapypeppo");
const inputRatyheia = document.getElementById("Ratyheia");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-Del-Jugador");
const ataqueDelEnemigo = document.getElementById("ataque-Del-Enemigo");

const nuevoAtaqueDelJugador = document.createElement("p");
const nuevoAtaqueDelEnemigo = document.createElement("p");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
	// Código que desaparece la seccion donde eliges jugador//////
	sectionSeleccionarAtaque.style.display = "none";
	// Aqui termina ese bloque/////////
	//Seccion de Código para ocultar boton de reinicio//
	displayBotonReinicio.style.display = "none";
	//Termina seccion de Código para ocultar boton de reinicio//
	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
	//Selector de tipos de ataque de Juagador
	botonFuego.addEventListener("click", ataqueFuego);
	botonAgua.addEventListener("click", ataqueAgua);
	botonTierra.addEventListener("click", ataqueTierra);
	//Inclusion de boton de Reinicio
	botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
	// ++ Código donde se oculta la seccion de seleccionar mascota de Jugador//
	sectionSeleccionarMascota.style.display = "none";
	// ++ Termina Código donde se oculta la seccion de seleccionar mascota de Jugador//
	//----------//
	/////Código donde se muestra la seccion de Elegir jugador////
	sectionSeleccionarAtaque.style.display = "flex";
	/////Aqui termina el bloque/////
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
	combate();
}

//Esta funcion crea las opciones si empata gana o pierde el jugador despues de elegir el Digibeast
function combate() {
	if (ataqueEnemigo == ataqueJugador) {
		crearMensaje("EMPATE");
	} else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
		crearMensaje("GANASTE");
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
		crearMensaje("GANASTE");
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
		crearMensaje("GANASTE");
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else {
		crearMensaje("PERDISTE");
		vidasJugador--;
		spanVidasJugador.innerHTML = vidasJugador;
	}
	revisarVidas();
}
//Revisar las vidas para saber si termino o no el juego
function revisarVidas() {
	if (vidasEnemigo == 0) {
		crearMensajeFinal("FELICITACIONES!! GANASTE...");
	} else if (vidasJugador == 0) {
		crearMensajeFinal("SORRY!! PERDISTE...");
	}
}
//esta funcion crea el mensaje si se gana empate o pierde, toma como parametro la variable Resultado que es la que almacena el valor de la funcion COMBATE"
function crearMensaje(resultado) {
	sectionMensajes.innerHTML = resultado;
	nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
	nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
	// let parrafo = document.createElement("p");
	// parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador} , la mascota del enemigo atacó con ${ataqueEnemigo} - \n ${resultado}`;
	ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
	ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
	sectionMensajes.innerHTML = resultadoFinal;
	//Seccion de Código para ocultar boton de reinicio//
	displayBotonReinicio.style.display = "block";
	//Termina seccion de Código para ocultar boton de reinicio//

	//Deshabilitar boton de ataques
	botonFuego.disabled = true;
	botonAgua.disabled = true;
	botonTierra.disabled = true;
}

function reiniciarJuego() {
	location.reload();
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Este codigo hace que se cargue el archivo JS al momento de cargar la pagina
window.addEventListener("load", iniciarJuego);
