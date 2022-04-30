function crearTabla() {

    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Columnas filas y counter
    var col = 100;
    var filas = 100;
    var counter = 1;

    // Crea las celdas
    for (i = 1; i <= filas; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (j = 1; j <= col; j++) {
            // Crea un elemento <td> y un nodo de texto, hace que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            celda.setAttribute("id",counter);
            if(esPrimo(counter)){
                celda.className = "primo";
            }
            else{
                celda.className = "no_primo";
            }
            var textoCelda = document.createTextNode(counter);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            counter++;
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");

    /*    
    var col = 100;
    var filas = 100;
    var counter = 1;
    var tabla = "<table id=\"tabla_primos\" border=\"1\">";

    for (i = 1; i <= filas; i++) {
        tabla += "<tr>";
        for (j = 1; j <= col; j++) {
            if(esPrimo(counter)){
                tabla += "<td id='"+counter+"' class='primo'>" +counter +"</td>";
            }
            else{
                tabla += "<td id='"+counter+"' class='no_primo'>" +counter +"</td>";
            }
            counter++;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";

    document.getElementById("resultado").innerHTML = tabla;
    */
}

function esPrimo(num) {
    let es_primo = true;
    for(let divisor=2; divisor<=(num/2); divisor++){
        if(num%divisor==0){
            es_primo=false;
        }
    }

    return es_primo;
}

function pintaColorea(){
    var celdas_primas = document.querySelectorAll(".primo");
    celdas_primas.forEach(celda_prima => {
        celda_prima.style.backgroundColor = "yellow";
    })
}

function parrafoPrimos(){
    var primos = document.querySelectorAll(".primo");
    var p = document.createElement("p");
    p.setAttribute("id", "primos");
    p.classList.add("ocultable");

    primos.forEach(primo => {
        var tp = document.createTextNode(primo.textContent +", ");
        p.appendChild(tp);
        document.body.appendChild(p);
    })
}

function parrafoNoPrimos(){
    var primos = document.querySelectorAll(".no_primo");
    var p = document.createElement("p");
    p.setAttribute("id", "noprimos")
    p.classList.add("ocultable");

    primos.forEach(primo => {
        var tp = document.createTextNode(primo.textContent +", ");
        p.appendChild(tp);
        document.body.appendChild(p);
    })
}

//ocultar() no se usa
function ocultar() {
    const parrafo = document.getElementsByClassName("ocultable");
    console.log("ocúltate");

    for(let i=0; i<parrafo.length; i++){
        parrafo[i].addEventListener('click', function () {
            parrafo[i].style.visibility = "hidden";
        });
    }
    /*
    Nota: con el display block es como si desapareciese del DOM

    parrafo[0].addEventListener('click', function () {
        if (parrafo[0].style.display === "none") {
            parrafo[0].style.display = "block";
        } else {
            parrafo[0].style.display = "none";
        }
    });
    
    parrafo[1].addEventListener('click', function () {
        if (parrafo[1].style.display === "none") {
            parrafo[1].style.display = "block";
        } else {
            parrafo[1].style.display = "none";
        }
    });
    */
}

/*
Con este pasan cosas raras y no sé por qué :S

function borrarParrafo(className, n){

    const parrafo = document.getElementsByClassName(className);
    console.log("borráte");
    
    parrafo[n].addEventListener('click', function () {

        setTimeout(function(){
            parrafo[n].style.visibility = "hidden";
        }, 1000);

    });

    parrafo[n].addEventListener('dblclick', function () {
        parrafo[n].parentNode.removeChild(parrafo[n]);
    });
}
*/        

function borrarParrafos(){
    const parrafo = document.getElementsByClassName("ocultable");
    const primos = parrafo[0];
    const noprimos = parrafo[1];
    
    //También funciona con ids:
    //const primos = document.getElementById("primos");
    //const noprimos = document.getElementById("noprimos");
    
    primos.addEventListener('click', function () {

        setTimeout(function(){
            primos.style.visibility = "hidden";
        }, 500);

    });
    primos.addEventListener('dblclick', function () {
        primos.parentNode.removeChild(primos);
    });

    noprimos.addEventListener('click', function () {

        setTimeout(function(){
            noprimos.style.visibility = "hidden";
        }, 500);

    });
    noprimos.addEventListener('dblclick', function () {
        noprimos.parentNode.removeChild(noprimos);
    });
}


function reaparecer(){
    const parrafo = document.getElementsByClassName("ocultable");
    console.log("reaparécete");
 
    for(let i=0; i<parrafo.length; i++){
        parrafo[i].style.visibility = "visible";    
    }
}