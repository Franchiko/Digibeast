//------------------SECTION 1-------------------//

// //////// Variables de COntrol////////
const sectionSeleccionarAtaque = document.getElementById("seleccionar_ataque");
const displayBotonReinicio = document.getElementById("reset");
const botonMascotaJugador = document.getElementById("boton-mascota");

const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById("seleccionar_mascota");

const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-Del-Jugador");
const ataqueDelEnemigo = document.getElementById("ataque-Del-Enemigo");

const nuevoAtaqueDelJugador = document.createElement("p");
const nuevoAtaqueDelEnemigo = document.createElement("p");

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

// Arrays para guardar Digibeast
let digibeasts = [];

let ataqueJugador = [];

let ataqueEnemigo;
let opcionDeDigibeast;
let inputHypodoge;
let inputKapypeppo;
let inputRatyheia;
let mascotaJugador;
let ataquesDigibeast;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let vidasJugador = 3;
let vidasEnemigo = 3;
//
////////////////////////////////
////////////////////////////////

//------------------SECTION 2-------------------//
// Inclusion de Clases y objetos
class Digibeast {
	constructor(nombre, foto, vida) {
		this.nombre = nombre;
		this.foto = foto;
		this.vida = vida;
		this.ataques = [];
	}
}

// Carga de Variables que contienen las propiedades de cada Digibeast
let hypodoge = new Digibeast("Hypodoge", "./img/Hypodoge.png", 5);
let kapypeppo = new Digibeast("Kapypeppo", "./img/Kapypeppo.png", 5);
let ratyheia = new Digibeast("Ratyheia", "./img/Ratyheia.png", 5);

//---Carga de  Ataques de c/Digibeast--//
hypodoge.ataques.push(
	{ nombre: "💧", id: "boton-agua" },
	{ nombre: "💧", id: "boton-agua" },
	{ nombre: "💧", id: "boton-agua" },
	{ nombre: "🔥", id: "boton-fuego" },
	{ nombre: "🪨", id: "boton-tierra" }
);

kapypeppo.ataques.push(
	{ nombre: "🪨", id: "boton-tierra" },
	{ nombre: "🪨", id: "boton-tierra" },
	{ nombre: "🪨", id: "boton-tierra" },
	{ nombre: "💧", id: "boton-agua" },
	{ nombre: "🔥", id: "boton-fuego" }
);

ratyheia.ataques.push(
	{ nombre: "🔥", id: "boton-fuego" },
	{ nombre: "🔥", id: "boton-fuego" },
	{ nombre: "🔥", id: "boton-fuego" },
	{ nombre: "💧", id: "boton-agua" },
	{ nombre: "🪨", id: "boton-tierra" }
);

//////----Método para cargar propiedades de cada DIgibeast en el juego-----////
digibeasts.push(hypodoge, kapypeppo, ratyheia);
//
////////////////////////////////
////////////////////////////////

//------------------SECTION 3-------------------//
//////// -------- Funciones de cada etapa del juego-----------////

function iniciarJuego() {
	// Código que desaparece la seccion donde eliges jugador//////
	sectionSeleccionarAtaque.style.display = "none";

	digibeasts.forEach((digibeast) => {
		opcionDeDigibeast = `
		<input type="radio" name="mascota" id=${digibeast.nombre}>
            <label class="tarjeta-digibeast" for=${digibeast.nombre}>
                <p class="paragraph">${digibeast.nombre}</p>
                <img src=${digibeast.foto} alt=${digibeast.nombre}>
            </label>
		`
		contenedorTarjetas.innerHTML += opcionDeDigibeast;

		inputHypodoge = document.getElementById("Hypodoge");
		inputKapypeppo = document.getElementById("Kapypeppo");
		inputRatyheia = document.getElementById("Ratyheia");
	});
	// Aqui termina ese bloque/////////
	//Seccion de Código para ocultar boton de reinicio//
	displayBotonReinicio.style.display = "none";
	//Termina seccion de Código para ocultar boton de reinicio//
	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
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
		spanMascotaJugador.innerHTML = inputHypodoge.id;
		mascotaJugador = inputHypodoge.id;
	} else if (inputKapypeppo.checked) {
		spanMascotaJugador.innerHTML = inputKapypeppo.id;
		mascotaJugador = inputKapypeppo.id;
	} else if (inputRatyheia.checked) {
		spanMascotaJugador.innerHTML = inputRatyheia.id;
		mascotaJugador = inputRatyheia.id;
	} else {
		alert("Selecciona una mascota");
	}
	extraerAtaques(mascotaJugador);
	seleccionarMascotaEnemigo();
	alert("Ya elegiste un Digibeast \n\nA JUGAR!!");
}

function extraerAtaques(mascotaJugador) {
	let ataques;
	for (let i = 0; i < digibeasts.length; i++) {
		if (mascotaJugador === digibeasts[i].nombre) {
			ataques = digibeasts[i].ataques;
		}
	}
	mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
	ataques.forEach((ataque) => {
		ataquesDigibeast = `
		<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>
		`;
		contenedorAtaques.innerHTML += ataquesDigibeast;
	});
	botonFuego = document.getElementById("boton-fuego");
	botonAgua = document.getElementById("boton-agua");
	botonTierra = document.getElementById("boton-tierra");

	botones = document.querySelectorAll(".BAtaque");
}

function secuenciaAtaque() {
	botones.forEach((boton) => {
		boton.addEventListener("click", (e) => {
			if (e.target.textContent === "🔥") {
				ataqueJugador.push("FUEGO");
				console.log(ataqueJugador);
				boton.style.backgroundColor = "#001000";
				boton.style.border = "none";
			} else if (e.target.textContent === "💧") {
				ataqueJugador.push("AGUA");
				console.log(ataqueJugador);
				boton.style.backgroundColor = "#001000";
				boton.style.border = "none";
			} else {
				ataqueJugador.push("TIERRA");
				console.log(ataqueJugador);
				boton.style.backgroundColor = "#001000";
				boton.style.border = "none";
			}
		});
	});
}

function seleccionarMascotaEnemigo() {
	let mascotaAleatorio = aleatorio(0, digibeasts.length - 1);
	// if (mascotaAleatorio == 1) {
	// 	spanMascotaEnemigo.innerHTML = "Hypodoge";
	// } else if (mascotaAleatorio == 2) {
	// 	spanMascotaEnemigo.innerHTML = "Kapypeppo";
	// } else {
	// 	spanMascotaEnemigo.innerHTML = "Ratyheia";
	// }
	spanMascotaEnemigo.innerHTML = digibeasts[mascotaAleatorio].nombre;
	secuenciaAtaque();
}

//Funcion para cargar el tipo de ataque de enemigo
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
