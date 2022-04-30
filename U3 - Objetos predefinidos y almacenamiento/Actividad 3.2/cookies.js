//14/04/2022
//Refactorizar con F2

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //1000 por los milisegundos
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    //Decode the cookie string, to handle cookies with special characters, e.g. '$'
    let decodedCookie = decodeURIComponent(document.cookie);    
    let ca = decodedCookie.split(';');

    for (let i=0; i<ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}


function deleteCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}


function amt() {
    var expDays = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + (expDays * 24 * 60 * 60 * 1000));

    var count = getCookie("count")
    if (!count) {
        setCookie("count", "1", exp);
        return 1;
    }
    else {
        var newcount = parseInt(count) + 1;
        deleteCookie("count");
        setCookie("count", newcount, exp);
        return count;
    }    
}


/* 
function displayVisits() {
    // How many visits so far?
    var numVisits = getCookie("numVisits");
    if (numVisits) 
        numVisits = parseInt(numVisits) + 1;
    else 
        numVisits = 1; // the value for the new cookie

    // Show the number of visits
    if (numVisits == 1) 
        document.write("This is your first visit.");
    else 
        document.write("You have visited this page " + numVisits + " times.");

    // Set the cookie to expire 365 days from now
    var today = new Date();
    today.setTime(today.getTime() + 365 * 24 * 60 * 60 * 1000);
    setCookie("numVisits", numVisits, today);
}
 */

function main(){
    //checkCookie();
    //displayVisits();
}

main();