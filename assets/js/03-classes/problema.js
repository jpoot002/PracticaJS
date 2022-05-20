

function Persona(nombre, edad){ 
    console.log('Se ejecuta esta linea');

    this.nombre = nombre;
    this.edad = edad;
}

const maria = new Persona('maria', 18);
const melissa = new Persona('melissa', 35);
console.log(maria);
console.log(melissa);