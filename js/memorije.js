const cards = document.querySelectorAll(".flip-card-inner");

let okrenuta = false;
let zakljucano = false;
let prva, druga;
let rezultat = 0;
let pokusaji = 0;
let rez = document.getElementById("rezultat");
let pok = document.getElementById("pokusaji");


// Random
for(var i = 0; i < cards.length; i++){
  var target = Math.floor(Math.random() * cards.length -1) + 1;
  var target2 = Math.floor(Math.random() * cards.length -1) +1;
  cards[target].before(cards[target2]);
}

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

  // Blurovanje
  prva.children[1].classList.add('pogodjen');
  druga.children[1].classList.add('pogodjen');
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

  // Kraj
  if(rezultat==9){
    setTimeout(() => {
      alert("Bravo!!! Pobedili ste u: "+pokusaji+" pokusaja!")
    }, 1000);
  }
}

cards.forEach(card => card.addEventListener('click', okreni));