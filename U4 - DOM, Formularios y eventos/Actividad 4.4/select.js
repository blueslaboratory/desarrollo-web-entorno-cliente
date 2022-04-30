// 27/04/2022

document.getElementById("s1").onchange = function () {
    document.getElementById('s2').disabled = false; //enabling s2 select
    document.getElementById('s2').innerHTML = "Select no seleccionado"; //clear s2 to avoid conflicts between options values
    var opt0 = document.createElement('option');
    var opt1 = document.createElement('option');
    var opt2 = document.createElement('option');
    var opt3 = document.createElement('option');
    
    if (this.value == 'madrid') {
        opt0.textContent = "Madrid Capital";
        opt1.textContent = "Torrelodones";
        opt2.textContent = "Vallecas";
        document.getElementById('s2').appendChild(opt0);
        document.getElementById('s2').appendChild(opt1);
        document.getElementById('s2').appendChild(opt2);

    } else if (this.value == 'cataluña') {
        opt0.textContent = "Barcelona";
        opt1.textContent = "Tarragona";
        opt2.textContent = "Gerona";
        opt3.textContent = "Lérida";
        document.getElementById('s2').appendChild(opt0);
        document.getElementById('s2').appendChild(opt1);
        document.getElementById('s2').appendChild(opt2);
        document.getElementById('s2').appendChild(opt3);
        
        // Esto no funciona:
        /*
        opt0.textContent = "Barcelona";
        document.getElementById('s2').appendChild(opt0);
        opt0.textContent = "Tarragona";
        document.getElementById('s2').appendChild(opt0);
        opt0.textContent = "Gerona";
        document.getElementById('s2').appendChild(opt0);
        opt0.textContent = "Lérida";
        document.getElementById('s2').appendChild(opt0);
        */
        
    } else if (this.value == 'murcia') {
        opt0.textContent = "Murcia";
        opt1.textContent = "Cabo de Palos";
        opt2.textContent = "Cartagena";
        opt2.defaultSelected = true;
        document.getElementById('s2').appendChild(opt0);
        document.getElementById('s2').appendChild(opt1);
        document.getElementById('s2').appendChild(opt2);
    }
};