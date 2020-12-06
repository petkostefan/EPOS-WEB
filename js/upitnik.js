function validacija() {
    var radio = document.getElementsByName("memorija");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Must check some option!");
    return formValid;
    
    var x = document.forms["forma"]["fname"].value;
    if()
        if (provera = true) {
            alert("Vaša forma je sačuvana!");
        }
        else {
            alert("Niste popunili sve! Pokušajte ponovo.")
        }
}


