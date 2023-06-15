let nombre;
const listaPrueba = ["abc", "def", "ghijk"];

// Guardar en localStorage
// Codificar el dato que necesito guardar como un JSON
localStorage.setItem("listaPrueba", JSON.stringify(listaPrueba));

// Leer de localStorage
// Decodificar el dato que viene como JSON a objeto
const listaLeidaDeLocal = JSON.parse(localStorage.getItem("listaPrueba"));

console.log(listaLeidaDeLocal);

console.log(localStorage.length); // Cantidad de datos en localStorage
console.log(localStorage.key(0)); // Nombre de la clave del índice
localStorage.removeItem("clave"); // Borrar un item por clave
localStorage.clear(); // Borrar todos los datos en localStorage
