

let a = 5;


if ( a >= 10 ) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}


// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

console.log({ dia });

// Esto es una asinacion de valore  =
//  == es igual
// === evaluar el valor y el tipado

if ( dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
    
    // if ( dia === 1 ) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}


// Sin usar If Else, o Switch, únicamente objetos
dia = 6; // 0:domingo, 1: lunes....

const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',
}

const diasLetras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];


// día de la semana
console.log( diasLetras2[dia] );


const diasLetras3 = {
    0:()=>'domingo - 0',
    1:()=>'lunes - 1',
    2:()=>'martes - 2',
    3:()=>'miércoles - 3',
    4:()=>'jueves - 4',
    5:()=>'viernes - 5',
    6:()=>'sábado - 6',
}


// día de la semana
console.log( diasLetras3[dia]() )