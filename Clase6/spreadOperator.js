let peliculasAccion = ["End game", " Iron Man 3", "Capitan America"];
let mejorPeliculas = ["Star Wars", "The Lord of the Rings"];

let peliculas = [...peliculasAccion, ...mejorPeliculas];

console.log(peliculas);

let generoMejoresPelis = {
    nombreGenero : "mejores peliculas",
    popularidad : 10
}

let starWars = {
    nombre : "Star Wars",
    saga : 9,
    ...generoMejoresPelis
}
let señorAnillos = {
    nombre : "The Lord of the Rings",
    saga : 3,
    ...generoMejoresPelis
}
console.log(starWars);
console.log(señorAnillos);

function peliculasVistas(...nombrePeliculas){
    for(let i = 0; i < nombrePeliculas.length; i++){
        console.log("El cliente ya vio ", + nombrePeliculas[i]);
    }
}

peliculasVistas("Star Wars", "The Lord of the Rings", "Avengers");