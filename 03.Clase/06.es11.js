let vari=11;

let valor1=vari?? "Vino nula";
let valor2=vari || "Vino nula";

//console.log ("Valor 1 es igual a " + valor1);
//console.log ("valor 2 es igual a:" +valor2);

class Personsa {
    #mayoredad=18;

    constructor (name,age){
        this.name=name;
        this.age=age
    }
    obtenerNombre(){
        console.log("Metodo privado");
    }
    usoMetodoPrivado(){
        this.usoMetodoPrivado();
    }
}

const persona = new Persona ("Luis",25);

console.log(persona.usoMetodoPrivado());

console.clear();

