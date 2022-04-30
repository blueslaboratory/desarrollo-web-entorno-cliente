let btn = document.querySelector('button');
let input = document.querySelector('input');
let result = document.querySelector('#result');

btn.addEventListener('click', () => {
    let email = input.value;
    let isValid = validate(email);

    if (isValid) {
        result.style.background = 'green';
        result.innerText = 'Valido';
    }
    else {
        result.style.background = 'red';
        result.innerText = 'Invalid';
    }
})


function emailDomainCheck(email, domain) {
    var parts = email.split('@');
    if (parts.length === 2) {
        if (parts[1] === domain) {
            return true;
        }
    }
    return false;
}


function validateDomain(email) {
    let listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];
    flag = false;

    for (let i = 0; i < listaServidores.length; i++) {
        if (emailDomainCheck(email, listaServidores[i])) {
            flag = true;
        }
    }

    return flag;
}


function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}


function validate(email) {
    let flag = false;

    if (validateEmail(email) && validateDomain(email)) {
        //document.write(email + " is valid");
        flag = true;
    } else {
        //document.write(email + " is not valid");
    }

    return flag;
}
