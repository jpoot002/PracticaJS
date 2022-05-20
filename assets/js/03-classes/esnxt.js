class Rectangulo {
    area = 0;
    base = 0;
    altura = 0;
    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.area = base * altura;
    }
}

const Rectangulo = new Rectangulo(10 ,15);
Rectangulo.area = 100;

console.log(Rectangulo);
