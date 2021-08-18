let fechaActual = new Date();
console.log(fechaActual.toUTCString());//fecha en String
console.log(fechaActual.getFullYear());//devuelve año
console.log(fechaActual.getMonth());//devuelve mes, enero = 0
console.log(fechaActual.getDay());//devuelve posición del día en la semana domingo = 0
console.log(fechaActual.getDate());//devuelve el día del mes

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Hoy es " + dia + " de " + meses[mes] + " de " + anio );


let fechaPasada = new Date(1989, 11, 31);
let anios = fechaPasada.getFullYear();
let mess = fechaPasada.getMonth();
let dias = fechaPasada.getDate();

console.log("Hoy es " + dias + " de " + meses[mess] + " de " + anios );
