console.log("Hola Martin soy el espiritu como estas chupa pija");

function esPar(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(esPar(5));

function anterior(numero){
    return --numero;
}
console.log(anterior(1));

function triple(numero){
    return (numero * 3);
}
console.log(triple(2));

function anteriorDelTriple(numero){
    let resultado = triple(numero);
    resultado = anterior(resultado);
    return (resultado);
}

console.log(anteriorDelTriple(4));