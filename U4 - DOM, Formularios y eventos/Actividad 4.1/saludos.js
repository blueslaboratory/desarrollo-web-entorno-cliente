//19/04/2022


var intervalID;

function comenzarSaludos() {
    intervalID = setInterval(hello, 3000);
    document.body.style.background = 'green';
}

//si pasas los parametros directamente a la funcion estas pasando
//un function call y no un function reference y la funcion se ejecuta
//inmediatemente:
//setInterval(alert("Hola Caracola"), 5000);

function hello() {
    alert("Hola");
}

function pararSaludos() {
    clearInterval(intervalID);
    document.body.style.background = 'red';
}


// Cambiar el color de manera aleatoria:
function cambiarColorAleatorio() {
    let rgb = "rgb(" + aleatorio() + "," + aleatorio() + "," + aleatorio() + ")";
    document.body.style.background = rgb;
}

function aleatorio() {
    return Math.floor(Math.random() * 256);
}


// FORMA 1
window.addEventListener('dblclick', function () {
    cambiarColorAleatorio();
});

// FORMA 2
/*
const pantallaNavegador = document.getElementById('html');
pantallaNavegador.addEventListener('dblclick', function() {
    cambiarColorAleatorio();
}); 
*/

// FORMA 3
/*
document.querySelectorAll('*')
    .forEach(element => element.addEventListener('dblclick', e => {
        cambiarColorAleatorio();
    }))
*/


// Posicion del mouse en la pantalla
// FORMA 1
onmousemove = function(e){
    document.getElementById("box").innerHTML = (
        "x: " +e.clientX +"  "
       +"y: " +e.clientY)
}


// FORMA 2 -> descomentar etiqueta html
/*
document.onmousemove = showCoords;
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("box").innerHTML = coords;
}

function deleteCoords() {
    document.getElementById("box").innerHTML = "";
}
*/

function main() {

}


main();