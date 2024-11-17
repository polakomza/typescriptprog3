'use strict';

// Console.logs:
console.log('¡Hola, TypeScript!');

// Anotación de tipos de datos:
let objeto: string = "árbol";
let años: number = 25;
let indefinido: undefined = undefined;
let nulo: null = null;
let cualquierValor: any = null;
const enteros: number[] = [10, 20, 30, 40];
const apodos: string[] = ['Pepe', 'Lulu'];
const opciones: boolean[] = [true, true, false];
enum DiasLaborales {
    Lunes,
    Martes,
    Miercoles
}

// Anotación de funciones con retorno:
function multiplicar(x: number, y: number): number {
    return x * y;
}

// Función sin retorno con distintos tipos de dato:
let equipoA: number = 15;
let equipoB: number = 12;
let jugadorEstrella: number = 2;
let juegaEstrella: boolean = true;

function simularPartido(equipo1: number, equipo2: number, estrellaJuega: boolean): void {
    let comentario: string = '';
    if (estrellaJuega) {
        equipo1 += jugadorEstrella;
        comentario = ' porque juega el mejor jugador';
    }
    if (equipo1 > equipo2) {
        console.log(`Gana Equipo A${comentario}`);
    } else if (equipo1 === equipo2) {
        console.log('¡Es un empate!');
    } else {
        console.log('Gana Equipo B');
    }
}
simularPartido(equipoA, equipoB, juegaEstrella);

// Interfaces y objetos
interface Desarrollador {
    nombre: string;
    experiencia: number;
    usaCafé?: boolean;
}

let dev1: Desarrollador = {
    nombre: 'Lucas',
    experiencia: 5
};

let dev2: Desarrollador = {
    nombre: 'Ana',
    experiencia: 3,
    usaCafé: true
};

function procesarPerfil(dev: Desarrollador): void {
    console.log(`Procesando perfil de ${dev.nombre}`);
}

procesarPerfil(dev1);
procesarPerfil(dev2);

// Clases
class Serie {
    constructor(
        private titulo: string,
        private protagonista: string,
        private estreno: number
    ) {}

    mostrarInfo(): void {
        console.log(
            `La serie "${this.titulo}" se estrenó en ${this.estreno} y tiene como protagonista a ${this.protagonista}`
        );
    }
}

let serie1 = new Serie('The Office', 'Steve Carell', 2005);
serie1.mostrarInfo();

// Encapsulamiento y genéricos
class Rifa<T> {
    private codigo!: T;

    constructor(private evento: string) {}

    asignarCodigo(codigo: T): void {
        this.codigo = codigo;
    }

    obtenerCodigo(): T {
        return this.codigo;
    }

    obtenerEvento(): string {
        return this.evento;
    }

    realizarSorteo(): string {
        return `Para el evento "${this.evento}", el código ganador es ${this.codigo}`;
    }
}

let rifaEvento = new Rifa<number>('Concierto de Rock');
rifaEvento.asignarCodigo(42);
console.log(rifaEvento.realizarSorteo());
