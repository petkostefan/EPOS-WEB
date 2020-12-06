document.getElementById('start').addEventListener("click", odbrojavanje);
//document.getElementById('start').addEventListener("click", brojanje);
var sekunde = 10;

function odbrojavanje(){
    setInterval( function(){
        sekunde--;
            
        if(sekunde >= 0){
            document.getElementById('brSek').innerHTML = sekunde;
            
        }
            
        if(sekunde === 0){
            document.getElementById('brSek').innerHTML = "Vreme je isteklo";
            alert("Vas rezultat je " + (funkcijaBrojanja()-1));
            
         }
     }, 1000);
}

var funkcijaBrojanja = (function () {

    var brojac = 0;
    return function () {return brojac += 1;}
})();

function brojanje(){
    document.getElementById('broj').innerHTML = funkcijaBrojanja();
}
