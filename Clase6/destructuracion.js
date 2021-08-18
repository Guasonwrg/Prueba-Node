let cursos = ["Programación", "MKT", "UX", "Data Science"];
//destructuración arrays
let [programacion, mkt] = cursos;

console.log(cursos);
console.log(programacion);
console.log(mkt);


let persona = {
    nombre : "Carli",
    edad : 26,
    domicilio : "calle falsa 123"
}

//destructuracion de objetos literales
let {nombre, edad} = persona;//el nombre de la variable debe coincidir con el del objeto literal
console.log(persona);
console.log(nombre);
console.log(edad);
