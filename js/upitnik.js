function validacija() {

    var provera = true;
    var ime = document.getElementById("name_surname").value;
    if (ime == "") {
        provera = false;
    }
    var mejl = document.getElementById("email").value;
    if (mejl == "") {
        provera = false;
    }

    var grupa1 = document.formaa.memorija;
    
    var help1 = false;
    var i;
    for (i = 0; i < grupa1.length; i++) {
        if (grupa1[i].checked) {
            help1 = true;
            return;
        }
    }

    var grupa2 = document.formaa.reakcija;
    var help2 = false;
    var j;
    for (j = 0; j < grupa2.length; j++) {
        if (grupa2[j].checked) {
            help2 = true;
            return;
        }
    }


    var grupa3 = document.formaa.brzina;
    var help3 = false;
    var t;
    for (t = 0; t < grupa3.length; t++) {
        if (grupa3[t].checked) {
            help3 = true;
            return;
        }
    }
    

    if (((provera == false) || (help1 == false)) || ((help2 == false) || (help3 == false))) {
        alert("GRESKA");
    }


}