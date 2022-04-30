// 22/03/2022

// alert("Créeme profe, por fa: ");

class Alumno{
    //let id, nombre, notaMedia;

    constructor(id, nombre, notaMedia){
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    /*
    get consultarNota(){
        return this.notaMedia;
    }
    
    get consultarId(){
        return this.id;
    }
    */
    consultarNota(){
        return this.notaMedia;
    }

    cambiarNotaMedia(nota){
        this.notaMedia = nota;
    }
}



class Colegio{
    //let nombre, nAlumnos, totalAlumnos = [];

    constructor(nombre){
        this.nombre = nombre;
        this.nAlumnos = 0;
        this.totalAlumnos = [];
    }

    crearAlumnos(n){
        for (let i=0; i<n; i++) {
            
            let id = parseInt(i)+parseInt(this.nAlumnos);
            let nombre = prompt("Introduzce el nombre del alumno", "Juan");
            let notaMedia = this.ponerNotaMedia(nombre);

            let alumno = new Alumno(id, nombre, notaMedia);
            this.totalAlumnos.push(alumno); 
        }
        this.nAlumnos += parseInt(n);
    }

    ponerNotaMedia(nombre){
        let notaMedia;
            do {
                notaMedia = prompt("Introduzce la nota de " +nombre, 10);

                if(isNaN(notaMedia) || notaMedia<0 || notaMedia>10){
                    alert("Por favor introduzca un valor entre [0-10]");
                }
                else{
                    notaMedia = parseFloat(notaMedia);
                }
            } while (isNaN(notaMedia) || notaMedia<0 || notaMedia>10);

            return notaMedia;
    }

    existenAlumnos(){
        let flag = false;

        if(this.totalAlumnos.length>0){
            flag = true;
        }
        return flag;
    }

    existeAlumno(idAlumno){
        let flag = false;
        for (let i=0; i<this.totalAlumnos.length; i++) {
            if(idAlumno == this.totalAlumnos[i].id){
                flag = true;
            }
        }
        return flag;
    }

    consultarNotaMedia(idAlumno){
        for (let i=0; i<this.totalAlumnos.length; i++) {
            if(idAlumno == this.totalAlumnos[i].id){
                console.log("encontrado");
                return this.totalAlumnos[i].notaMedia;
            }
        }
        return "No se ha encontrado el alumno";
    }

    cambiarNotaMedia(nuevaNota, id){
        for (let i=0; i<this.totalAlumnos.length; i++) {
            if(id == this.totalAlumnos[i].id){
                console.log("encontrado");
                return this.totalAlumnos[i].cambiarNotaMedia(nuevaNota);   
            }
        }
        return "No se ha encontrado el alumno";
    }

    printAlumnosHTML(){
        for (let i = 0; i < this.totalAlumnos.length; i++) {
            document.write(this.totalAlumnos[i].id);
            document.write(this.totalAlumnos[i].nombre);
            document.write(this.totalAlumnos[i].notaMedia);
            document.write("</br>");
        }
    }

    printAlumnos(){
        let string = "";
        for (let i = 0; i < this.totalAlumnos.length; i++) {
            string += "\tid: " + this.totalAlumnos[i].id +" - "
                     +"Nombre: " + this.totalAlumnos[i].nombre +" - "
                     +"Nota Media: " + this.totalAlumnos[i].notaMedia +"\n";
        }
        return string;
    }

    printColegio(){
        let string = "Colegio: " +this.nombre + " - Alumnos: " +this.nAlumnos;
        return string;
    }


} 

function menu(){
             
    let opcion;

    opcion = parseInt(prompt("*** Bienvenido al menu de la Comunidad de Madrid*** \n"
                            +"\t 0. Salir del menu \n"
                            +"\t 1. Crear un colegio \n"
                            +"\t 2. Ver colegios \n"
                            +"\t 3. Añadir alumnos \n"
                            +"\t 4. Mostrar alumnos \n"
                            +"\t 5. Consultar la nota de un alumno \n"
                            +"\t 6. Cambiar la nota de un alumno \n"
                            ));

    return opcion;
}

function mostrarColes(aColegios){
    let stringColes = "Colegios: \n";
    for (let i=0; i<aColegios.length; i++) {
        stringColes += "\t" +i +". " +aColegios[i].nombre +" - Alumnos: " +aColegios[i].nAlumnos +"\n";
    }
    return stringColes;
}

function existenColes(aColegios){
    if(aColegios.length>0){
        return true;
    }
    else{
        alert("Aun no existe ningun colegio");
        return false;
    }  
}

function selectCole(aColegios){
    let select;

    do {
        select = prompt("Seleccione un colegio: \n" +mostrarColes(aColegios), 0);
        /*
        alert(select +"\n - typeof: " +(typeof select) 
                     +"\n - isNan: " +isNaN(select) 
                     +"\n - Number.isInteger(parseFloat(select)): " +Number.isInteger(parseFloat(select)));
        // isNan(variable) -> devuelve false si la variable es un numero
        */
        if(isNaN(select) || !Number.isInteger(parseFloat(select)) || select<0 || select>(aColegios.length-1)){
            alert("Introduzca una opcion valida dentro del rango [0-" +(aColegios.length-1) +"]");
        }
        else{
            select = parseInt(select);
        }
        
    } while (isNaN(select) || !Number.isInteger(parseFloat(select)) || select<0 || select>(aColegios.length-1)); 
    
    alert("Ha seleccionado el colegio " +aColegios[select].printColegio());

    return select;
}




function main(){
    let opcion;
    let aColegios = [];
    let select, id, nota;

    do {
        opcion = menu();

        switch(opcion) { 
            case 0: 
                alert("Gracias, vuelva pronto :)");
                break; 
            case 1:
                let nCole = prompt("Nombre del colegio: ", "IES Clara del Rey");
                let cole = new Colegio(nCole);
                
                aColegios.push(cole);
                alert("El colegio " +cole.nombre +" se ha añadido con exito");
                break; 
            case 2:
                if(existenColes(aColegios)){
                    alert(mostrarColes(aColegios));
                }
                break; 
            case 3: 
                if(existenColes(aColegios)){     
                    select = selectCole(aColegios);
                    let nAlumnos;

                    do {
                        nAlumnos = prompt("Numero de alumnos a crear: ", 1);
                        
                        if(isNaN(nAlumnos) || !Number.isInteger(parseFloat(nAlumnos)) || nAlumnos<0){
                            alert("Introduzca una opcion valida > 0 ");
                        }
                        else{
                            nAlumnos = parseInt(nAlumnos);
                        }
                        
                    } while (isNaN(nAlumnos) || !Number.isInteger(parseFloat(nAlumnos)) || nAlumnos<0);

                    aColegios[select].crearAlumnos(nAlumnos);
                }                
                break; 
            case 4: 
                if(existenColes(aColegios)){
                    select = selectCole(aColegios);
                    alert("Los alumnos del colegio " +aColegios[select].nombre 
                         +" son:" +"\n" +aColegios[select].printAlumnos());
                }                
                break; 
            case 5: 
                if(existenColes(aColegios)){
                    select = selectCole(aColegios);
                    if(aColegios[select].existenAlumnos()){
                        id = prompt("Introduzca el id del alumno: ", 0);
                        alert("id: " +id +" - " +"Nota media: " +aColegios[select].consultarNotaMedia(id));
                    }
                    else{
                        alert("No existen alumnos en " +aColegios[select].nombre);
                    }
                }
                break;
            case 6:
                if(existenColes(aColegios)){
                    select = selectCole(aColegios);
                    if(aColegios[select].existenAlumnos()){
                        id = prompt("Introduzca el id del alumno: ", 0);
                        alert("id: " +id +" - " +"Nota media: " +aColegios[select].consultarNotaMedia(id));
                        
                        if(aColegios[select].existeAlumno(id)){
                            nota = aColegios[select].ponerNotaMedia(aColegios[select].totalAlumnos[id].nombre);
                            aColegios[select].cambiarNotaMedia(nota, id);
                        }
                        
                    }
                    else{
                        alert("No existen alumnos en " +aColegios[select].nombre);
                    }
                }                
                break;
            default: 
                alert("Introduzca una opcion valida!");
        }
    } while (opcion!=0);
    

    /*
    document.write("Nota media: " +cole.consultarNotaMedia(0) +"</br>");
    */

}


main();