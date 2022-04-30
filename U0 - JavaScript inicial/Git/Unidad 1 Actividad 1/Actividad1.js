/*
El ejercicio consiste en modificar el codigo actual para que en vez de proporcianar un texto fijado y unos patrones a buscar,
sea el usuario el que introduzca el texto y los patrones a buscar por medio del navegador.
*/


// Usamos Javascript estricto
"use strict";


// Funcion que recibe un texto y un patron y dice cuantas veces esta el patron
// No distingue mayusculas y minusculas y una letra puede formar parte de mas de un patron encontrado

function buscarPatron(texto, patron) {
    // Importante declarar la i por el ambito de variables (que no la coja del general)
    let i;
    // Contador de cuantos hemos encontrados
    let encontrados = 0;

    // Pasamos todo a mayusculas para no distinguir mayusculas de minusculas
    
    let textoMAY = texto.toUpperCase();
    let patronMAY = patron.toUpperCase();


    for (i = 0; i < textoMAY.length; i++) {
        // Sacamos la cadena desde i a i + el tamanyo del patron
        let cad = textoMAY.substring(i, i + patronMAY.length);

        if (cad === patronMAY) {
            // Encontrada coincidencia
            encontrados++;
        }

    }

    // Devolvemos la solucion
    return encontrados;
}


function main() {
    
    let texto = "000111101000ABCHO";
    let patronesABuscar = ["00", "101", "ABC", "HO"];
    let i;

    // Total de coincidencias de todos los patrones
    let total = 0;
    // Recorremos el vector patronesABuscar

    let intentos = parseInt(prompt("Numero de busquedas: "));

    for (i = 0; i < intentos; i++) {

        alert("Intento " +(i+1) +"/" +intentos);
        texto=prompt("Introduce un texto ", "000111101000ABCHO");
        patronesABuscar[i] = prompt("Introduce un patrón " +i +":", "00");

        // Buscamos el patron
        let res = buscarPatron(texto, patronesABuscar[i]);
        alert("El patron " + patronesABuscar[i] + " esta " + res + " veces");
        // Acumulamos el total
        total += res;
    }

    alert("El total de patrones encontrados es " + total);
}

// Llamamos a la función principal, main
main();

