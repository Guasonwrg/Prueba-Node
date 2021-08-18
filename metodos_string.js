let frase = "Breaking Bad Rules!";

console.log(frase.slice(9,12));
console.log(frase.slice(13));
console.log(frase.slice(-10));


/*let texto = "digitalhouse.com.ar";
function dominio(txt){
    if(txt == texto){
       texto =  "http://www." + texto;
       return texto;
    }
}
dominio("digitalhouse.com.ar");
console.log(texto);*/



function reemplazoFastFast(texto, palabraA, palabraB){
    return texto.replace(palabraA,palabraB);
}
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantHoras){
      return  (this.energia = this.energia - (cantHoras * 5)) + (this.experiencia = this.experiencia + (cantHoras * 2));
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

let saludar =  nombre => 'Hola, ' + nombre + '!';
saludar("Ezequiel");