//14/04/2022

function input(){

    let cadena;
    let datos = [];
    
    cadena = prompt("Introduzca una cadena del tipo nombre:apellidos:telefono:email:codigopostal:NUMERO", 
                    "alejandro:diez:677712345:alejandro@educamadrid.es:28000:1000");
    
    datos = cadena.split(":", 6);

    while(parseInt(datos[5])<=1){
        datos[5] = prompt("Introduzca un numero > 1");
    }

    return datos;
}


function desglose(datos){
    
    let aServidor = [];
    let servidor;

    aServidor = (datos[3].split("@"));
    servidor = aServidor[1].split(".");

    alert("*** DATOS INTRODUCIDOS *** \n" 
         +"\n ->Nombre: " +datos[0]
         +"\n ->Apellidos: " +datos[1]
         +"\n ->Teléfono: " +datos[2]
         +"\n ->Email: " +datos[3]
         +"\n ->Servidor: " +servidor[0]
         +"\n ->C.P.: " +datos[4]
         +"\n ->Número: " +datos[5]
        );
}


function primosPalindromos(num){
    let limite_superior = parseInt(num);
    let contador = 1;

    let es_primo;
    let sPrimos = "1:";
    let aPrimos = [1];

    for(let i=2; i<=limite_superior; i++){
        es_primo=true;
        for(let divisor=2; divisor<i && es_primo; divisor++){
            if(i%divisor==0){
                es_primo=false;
            }
        }

        if(es_primo==true && palindromo(i.toString())){
            //sPrimos += +i +":";
            aPrimos.push(i);
            contador++;
        }
    }
    
    sPrimos = aPrimos.join(':'); //conversion a un string

    alert("Desde 1-" +limite_superior +" hay " +contador +" primos palindromos: " 
         +"\n" +sPrimos);

    return aPrimos;

}


function palindromo(num){

    //separamos num en un array con split para utilizar reverse
    //y lo volvemos a unir en una cadena con join
    let numReverse = num.split('').reverse().join('');

    //alert(numReverse);

    return num === numReverse;
}


function palindromo2(str){
    //comprobamos posiciones hasta mitad de la cadena

    let len = str.length;
    for (let i=0; i<len/2; i++) {
        if (str[i] !== str[len-1-i]) {
            return false;
        }
    }
    return true;
}

function raiz(num){
    //Usando eval()
    let stringOperacion = "Math.round(Math.sqrt(num))";
    alert("La raiz cuadrada redondeada de " +num +" es: " +eval(stringOperacion));
}


function main(){

    let datos = input();

//  let nombre = datos[0];
//  let apellidos = datos[1];
//  let telefono =  datos[2];
//  let email =  datos[3];
//  let cp =  datos[4];
    let numero =  datos[5];

    desglose(datos);

    let aPrimos = primosPalindromos(numero);

    let lastPrimoPalindromo = aPrimos[aPrimos.length-1];
    
    //si pasas los parametros directamente a la funcion estas pasando
    //un function call y no un function reference y la funcion se ejecuta
    //inmediatemente:
    //setTimeout(raiz(lastPrimoPalindromo), 4000);

    setTimeout(raiz, 4000, lastPrimoPalindromo);
}

main();