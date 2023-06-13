function leerLocal(nombreLista) {
  limpiarLista();

  const listaDeTareasLocal = JSON.parse(localStorage.getItem(listaElegida));

  listaDeTareasLocal.forEach((item) => listaDeTareas.push(item));
}

function guardarLocal(nombreLista) {
  localStorage.setItem(nombreLista, JSON.stringify(listaDeTareas));
}

if (!sessionStorage.getItem("listaElegida")) {
  while (listaElegida.trim() == "" || listaElegida.length > 10) {
    listaElegida = prompt(
      "Escriba el nombre de la lista en la que quiere trabajar (debe tener menos de 10 caracteres)"
    );
  }
  sessionStorage.setItem("listaElegida", listaElegida);
}

leerLocal(listaElegida);
imprimirTexto();
