document.getElementById("btn").disabled = true; 

function cekanjeCrvene(){
    document.getElementById('tekst').innerHTML = "Sacekajte crvenu pozadinu";
    odbrojavanje();
}

function odbrojavanje(){
    setInterval(function(){
        document.getElementById('igra').style.backgroundColor = '#b61924';
        stoperica();
    }, (Math.random()*10000));

    brojanje();
}

var brojac = 0;

function brojanje(){
    document.getElementById("btn").disabled = false; 
    setInterval(brojac++, 100);    
}

document.getElementById('igra').addEventListener("click", cekanjeCrvene);

var miliSekunde = 0;

function povecajMiliSekunde(){
    miliSekunde = miliSekunde + 1;
}
function stoperica(){
    
    setInterval(povecajMiliSekunde, 1);

    
}

function stop(){
    alert('Vas rezultat: ' + miliSekunde);
    document.getElementById("btn").disabled = true; 
}
