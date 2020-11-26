
// function klik(){
//     document.getElementById("1").style = "transform: rotateY(180deg);"
//     brojac++;
//     if(brojac==2){
//         brojac = 0;
//         document.getElementById("1").style = ""
//     }  
// }

// var karte = document.getElementsByClassName("flip");

// // Inicijalizacija
// for (let i = 0; i < karte.length; i++) {
//     karte[i].addEventListener("click", flip(karte[i]))
// }

// function flip(karta){
//     var brojac = 0;
//     var karta1;
//     var karta2;
//     karta.style = "transform: rotateY(180deg);"
//     if(brojac<2){

//     }else{
//         for (let i = 0; i < karte.length; i++) {
//             karte[i].id
//         }
//     }
// }

const cards = document.querySelectorAll(".flip-card-inner");

let okrenuta = false;
let zakljucano = false;
let prva, druga;
let rezultat = 0;
let pokusaji = 0;
let rez = document.getElementById("rezultat");
let pok = document.getElementById("pokusaji");

function okreni() {
  if (zakljucano) return;
  if (this === prva) return;

  this.classList.add('okreni');

  if (!okrenuta) {
    okrenuta = true;
    prva = this;
    return;
  }

  druga = this;
  zakljucano = true;

  proveri();
}

function proveri() {
  pokusaji++;
  pok.innerHTML = "  Broj pokusaja: "+pokusaji;
  let isMatch = prva.id == druga.id;
  isMatch ? zakljucaj() : vratiNaPocetno();
}

function zakljucaj() {
  prva.removeEventListener('click', okreni);
  druga.removeEventListener('click', okreni);
  rezultat++;
  rez.innerHTML = "Rezultat je: "+rezultat 

  resetBoard();
}

function vratiNaPocetno() {
  setTimeout(() => {
    prva.classList.remove('okreni');
    druga.classList.remove('okreni');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [okrenuta, zakljucano] = [false, false];
  [prva, druga] = [null, null];
}

// + (function shuffle() {
// +   cards.forEach(card => {
// +     let ramdomPos = Math.floor(Math.random() * 12);
// +     card.style.order = ramdomPos;
// +   });
// + })();

cards.forEach(card => card.addEventListener('click', okreni));