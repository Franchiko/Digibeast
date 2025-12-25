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
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");
//Section 4. Canvas
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

// Arrays para guardar Digibeast
let digibeasts = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeDigibeast;
let inputHypodoge;
let inputKapypeppo;
let inputRatyheia;
let mascotaJugador;
let ataquesDigibeast;
let ataquesDigibeastEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador= 0;
let victoriasEnemigo= 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
//Section 4 (Canvas)
let lienzo = mapa.getContext("2d");

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
		this.x = 20;
		this.y = 20;
		this.ancho = 80;
		this.alto = 80;
		this.mapaFoto = new Image();
		this.mapaFoto.src = foto;
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

//------------------SECTION 3-------------------//
//////// -------- Funciones de cada etapa del juego-----------////

function iniciarJuego() {
	// Código que desaparece la seccion donde eliges jugador//////
	sectionSeleccionarAtaque.style.display = "none";
	sectionVerMapa.style.display = "none";
	digibeasts.forEach((digibeast) => {
		opcionDeDigibeast = `
		<input type="radio" name="mascota" id=${digibeast.nombre}>
            <label class="tarjeta-digibeast" for=${digibeast.nombre}>
                <p>${digibeast.nombre}</p>
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
	//displayBotonReinicio.style.display = "none";//
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
	//sectionSeleccionarAtaque.style.display = "flex";
	///Termina el bloque/////
	///////////////////////////////////////
	//Section 4. Mapa (Canvas)
	/////Codigo donde se muestra la seccion del Mapa////
	
	sectionVerMapa.style.display = "flex";
	
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
}

function extraerAtaques(mascotaJugador) {
	let ataques
	for (let i = 0; i < digibeasts.length; i++) {
		if (mascotaJugador === digibeasts[i].nombre) {
			ataques = digibeasts[i].ataques;
		}
	}
	mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) { //Funcion para mostrar los ataques en el HTML y asignarles un ID (contiene la variable BOtones)
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
			// Use currentTarget and trim to avoid whitespace/newline mismatches
			const simbolo = e.currentTarget.textContent.trim();
			if (simbolo === '🔥') {
				ataqueJugador.push('FUEGO');
			} else if (simbolo === '💧') {
				ataqueJugador.push('AGUA');
			} else {
				ataqueJugador.push('TIERRA');
			}
			console.log(simbolo);
			console.log(ataqueJugador);
			boton.style.backgroundColor = "#c7ccc752";
			boton.style.border = "none";
			boton.disabled = true;
			ataqueAleatorioEnemigo();
		});
	});
}

function seleccionarMascotaEnemigo() {
	let mascotaAleatorio = aleatorio(0, digibeasts.length - 1);
	spanMascotaEnemigo.innerHTML = digibeasts[mascotaAleatorio].nombre;
	ataquesDigibeastEnemigo = digibeasts[mascotaAleatorio].ataques;
	secuenciaAtaque();
}

//Funcion para cargar el tipo de ataque de enemigo
function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio(0, ataquesDigibeastEnemigo.length - 1);

	if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
		ataqueEnemigo.push('FUEGO');
	} else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
		ataqueEnemigo.push('AGUA');
	} else {
		ataqueEnemigo.push('TIERRA');
	}
	console.log(ataqueEnemigo);
	iniciarPelea();
}

function iniciarPelea() { //FUncion que espera a que el jugador elija 5 ataques para iniciar el combate
	if (ataqueJugador.length === 5) {
		combate();
	}
}

function indexAmbosOponentes(jugador, enemigo) {
	indexAtaqueJugador = ataqueJugador[jugador];
	indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

//Esta funcion crea las opciones si empata gana o pierde el jugador despues de elegir el Digibeast
function combate() {
	for (let index = 0; index < ataqueJugador.length; index++) {
		if (ataqueEnemigo[index] === ataqueJugador[index]) {
			indexAmbosOponentes(index, index);
			crearMensaje("EMPATE");
		} else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
			indexAmbosOponentes(index, index);
			crearMensaje("GANASTE");
			victoriasJugador++
			spanVidasJugador.innerHTML = victoriasJugador;
		} else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
			indexAmbosOponentes(index, index);
			crearMensaje("GANASTE");
			victoriasJugador++
			spanVidasJugador.innerHTML = victoriasJugador;
		} else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
			indexAmbosOponentes(index, index);
			crearMensaje("GANASTE");
			victoriasJugador++
			spanVidasJugador.innerHTML = victoriasJugador;
		} else {
			indexAmbosOponentes(index, index);
			crearMensaje("PERDISTE");
			victoriasEnemigo++
			spanVidasEnemigo.innerHTML = victoriasEnemigo;
		}
	}
	revisarVidas();
}
//Revisar las vidas para saber si termino o no el juego
function revisarVidas() {
	if (victoriasJugador === victoriasEnemigo) {
		crearMensajeFinal("Esto es un EMPATE!!");
	} else if (victoriasJugador > victoriasEnemigo) {
		crearMensajeFinal("FELICITACIONES!! GANASTE...");
	} else {
		crearMensajeFinal("SORRY!! PERDISTE...");
	}
}
//esta funcion crea el mensaje si se gana empate o pierde, toma como parametro la variable Resultado que es la que almacena el valor de la funcion COMBATE"
function crearMensaje(resultado) {
	let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
	sectionMensajes.innerHTML = resultado;
	nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
	nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
	// let parrafo = document.createElement("p");
	// parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador} , la mascota del enemigo atacó con ${ataqueEnemigo} - \n ${resultado}`;
	ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
	ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
	
	sectionMensajes.innerHTML = resultadoFinal;

	
	displayBotonReinicio.style.display = "block";
}

function reiniciarJuego() {
	location.reload();
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarPersonaje() {
	lienzo.clearRect(0, 0, lienzo.width, lienzo.height);
	lienzo.drawImage(kapypeppo.mapaFoto, kapypeppo.x, kapypeppo.y, kapypeppo.ancho, kapypeppo.alto);
}

function moverDigibeast() {
	kapypeppo.x = kapypeppo.x + 10;
	pintarPersonaje();
}

// Este codigo hace que se cargue el archivo JS al momento de cargar la pagina
window.addEventListener("load", iniciarJuego);

