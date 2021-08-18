const  fs  =  require ( 'fs' ) ;

let resultado = fs.readFileSync("./tareas.json", "utf-8")
console.log(JSON.stringify(resultado));
console.log(JSON.parse(resultado));


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(estudiantes){
         return  estudiantes.aprobado===true;
    console.log('Felicitaciones, has aprobado el curso');
    });
    
    let desaprobados = estudiantes.filter(function(estudiantes){
        return estudiantes.aprobado===false;
    console.log("No has aprobado, debemos coordinar un recuperarorio");
    });