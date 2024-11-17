'use strict';
// Console.logs:
console.log('¡Hola, TypeScript!');
// Anotación de tipos de datos:
let objeto = "árbol";
let años = 25;
let indefinido = undefined;
let nulo = null;
let cualquierValor = null;
const enteros = [10, 20, 30, 40];
const apodos = ['Pepe', 'Lulu'];
const opciones = [true, true, false];
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales[DiasLaborales["Lunes"] = 0] = "Lunes";
    DiasLaborales[DiasLaborales["Martes"] = 1] = "Martes";
    DiasLaborales[DiasLaborales["Miercoles"] = 2] = "Miercoles";
})(DiasLaborales || (DiasLaborales = {}));
// Anotación de funciones con retorno:
function multiplicar(x, y) {
    return x * y;
}
// Función sin retorno con distintos tipos de dato:
let equipoA = 15;
let equipoB = 12;
let jugadorEstrella = 2;
let juegaEstrella = true;
function simularPartido(equipo1, equipo2, estrellaJuega) {
    let comentario = '';
    if (estrellaJuega) {
        equipo1 += jugadorEstrella;
        comentario = ' porque juega el mejor jugador';
    }
    if (equipo1 > equipo2) {
        console.log(`Gana Equipo A${comentario}`);
    }
    else if (equipo1 === equipo2) {
        console.log('¡Es un empate!');
    }
    else {
        console.log('Gana Equipo B');
    }
}
simularPartido(equipoA, equipoB, juegaEstrella);
let dev1 = {
    nombre: 'Lucas',
    experiencia: 5
};
let dev2 = {
    nombre: 'Ana',
    experiencia: 3,
    usaCafé: true
};
function procesarPerfil(dev) {
    console.log(`Procesando perfil de ${dev.nombre}`);
}
procesarPerfil(dev1);
procesarPerfil(dev2);
// Clases
class Serie {
    constructor(titulo, protagonista, estreno) {
        this.titulo = titulo;
        this.protagonista = protagonista;
        this.estreno = estreno;
    }
    mostrarInfo() {
        console.log(`La serie "${this.titulo}" se estrenó en ${this.estreno} y tiene como protagonista a ${this.protagonista}`);
    }
}
let serie1 = new Serie('The Office', 'Steve Carell', 2005);
serie1.mostrarInfo();
// Encapsulamiento y genéricos
class Rifa {
    constructor(evento) {
        this.evento = evento;
    }
    asignarCodigo(codigo) {
        this.codigo = codigo;
    }
    obtenerCodigo() {
        return this.codigo;
    }
    obtenerEvento() {
        return this.evento;
    }
    realizarSorteo() {
        return `Para el evento "${this.evento}", el código ganador es ${this.codigo}`;
    }
}
let rifaEvento = new Rifa('Concierto de Rock');
rifaEvento.asignarCodigo(42);
console.log(rifaEvento.realizarSorteo());
