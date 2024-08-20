/* 2. Desarrolla una aplicación web para gestionar equipos de fútbol y los jugadores que
 forman parte de ellos. La aplicación debe permitir a los usuarios agregar detalles sobre
los equipos y los jugadores. Cada jugador debe estar asociado a un único equipo mediante
composición, indicando que cada jugador pertenece a un equipo específico. 

La interfaz
debe incluir campos para ingresar el nombre del jugador, el nombre del equipo, y un botón
para mostrar los detalles del jugador y el equipo al que pertenece. Utiliza dos archivos: 
futbol.html para la interfaz y futbol.js para la lógica, utilizando las clases Jugador
y Equipo */

class Equipo{
    constructor(nombre){ 
        this.nombre = nombre;
        this.jugadores = []; // Agregacion
    }
    
    agregarJugador(nombreJugador) {
        let jugador = new Jugador(nombreJugador, this); 
        this.jugadores.push(jugador); 
    }


    listarJugador() {
        for (let i = 0; i < this.jugadores.length; i++) {
           let jugador = this.jugadores[i];
               return jugador; 
       }
    }


    mostrarDetalles() {
        return `Equipo: ${this.nombre} Jugadores: ${this.listarJugador()}`;
    }
}


class Jugador {
    constructor(nombre, equipo) {
      this.nombre = nombre;
      this.equipo = equipo; // Composicion
    }
}


// Intancias
let equipo1 = [];

document.getElementById('crearEquipo').addEventListener('click', () => {
    const nombreEquipo = document.getElementById('nombre-equipo').value;
    if (nombreEquipo) {
        equipo1 = new Equipo(nombreEquipo);
        const listaEquipo = document.getElementById('lista-equipo');
        const li = document.createElement('li');
        li.textContent = nombreEquipo;
        listaEquipo.appendChild(li);
        document.getElementById('nombre-equipo').value = ''; 
    }
});

document.getElementById('detallesjugador').addEventListener('click', () => {
    const nombreJugador = document.getElementById('nombre-jugador').value.trim();
    if (nombreJugador) {
        equipo1.agregarJugador(nombreJugador);
        const listaJugador = document.getElementById('lista-jugador');
        const li = document.createElement('li');
        li.textContent = nombreJugador;
        listaJugador.appendChild(li);
        document.getElementById('nombre-jugador').value = ''; 
    }
});

document.getElementById('detalles').addEventListener('click', () => {
    const jugadorInfo = document.getElementById('jugador-info');
    jugadorInfo.textContent = equipo1.mostrarDetalles();
});