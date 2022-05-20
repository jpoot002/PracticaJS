class Persona{
    //propiedades y metodos estaticos 

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' intancias';
    } 

    static mensaje(){
        console.log(this.nombre);
        console.log('hola a todos soy un metodo statico');
    } 

    nombre = ''
    codigo = ''
    frase = ''
    comida= '';

    // contructor
    constructor( nombre, codigo, frase ){
        this.nombre = nombre, 
        this.codigo = codigo, 
        this.frase = frase
    }
    //set y get

    //metodos 
    quiensoy(){
        console.log('soy '+this.nombre+' y mi identidad es '+ this.codigo)
    }

    frase(){
        console.log(this.frase);
    }

    set setComidaFavorita( _comida ){
        this.comida = _comida
    }

    get getcomidaFavorita(){
        return 'La comida favorita de ' + this.nombre +' es '+ this.comida;
    }

}

const spiderman = new Persona('Peter Parcker', 'Spider', 'Soy tu amigable vecino Spiderman');
const irnman = new Persona('Tony Stark', 'Iroman', 'Yo soy Ironman');


console.log(spiderman);
console.log(irnman);

spiderman.setComidaFavorita='El pie de cereza de la tia May';
console.log(spiderman.getcomidaFavorita);
spiderman.quiensoy();

Persona.mensaje();

 