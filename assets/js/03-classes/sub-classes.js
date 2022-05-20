class Persona{
    //propiedades y metodos estaticos 

    static _conteo = 0;

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre, codigo, frase ){
        this.nombre = nombre, 
        this.codigo = codigo, 
        this.frase = frase
    }

    static get conteo(){
        return Persona._conteo + ' intancias';
    } 

    static mensaje(){
        console.log(this.nombre);
        console.log('hola a todos soy un metodo statico');
    } 

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

class heroe extends Persona{
    clan = 'lobo solitario';
    

    constructor(nombre, codigo, frase) {
        // primero va la palabra super 
        super();
        this.clan = 'Avengers'
    }

    quiensoy(){
        super.quiensoy();
        console.log('soy '+this.nombre+' y mi identidad es '+ this.codigo)
    }
}

const spiderman = new heroe('Peter Parcker', 'Spider', 'Soy tu amigable vecino Spiderman');
spiderman.quiensoy();
console.log(spiderman);