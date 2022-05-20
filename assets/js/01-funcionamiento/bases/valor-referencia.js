
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana  = { ...juan }; /// Para aser la copia de un objeto solo la estructura y separa los elementos operador express
ana.nombre = 'Ana';

console.log({ juan, ana });

//funcion de fecha para cambiar el nombre de la persona
//... se le conoce como  permite separa la estructura del onjeto de sus valores  parameters spread
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });