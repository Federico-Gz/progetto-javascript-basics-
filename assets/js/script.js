let counter = document.getElementById('counter');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const conferma = document.getElementById('conferma');
const reset = document.getElementById('reset');
const descrizione = document.querySelector('.descrizione');
const goOn = document.getElementById('goOn');
const spaceContainer = document.querySelector('.spazio');
const navs = "\u{1F680}";
let isGameStarted = false;
let navsCounter;
let navsGenerated = 0;

let fraseFinale = document.getElementById('fraseFinale');
let risultato = document.querySelector('.risultato');

// inizializzazione counter 
sub.textContent = "-";
add.textContent = "+";
counter.innerHTML = "0";
conferma.textContent = "OK";
sub.disabled = true;
add.disabled = true;
conferma.disabled = true;

// assegnazione stili pulsanti
sub.classList.add('box');
add.classList.add('box');
conferma.classList.add('box');



goOn.onclick = function () {
  descrizione.style.display = 'none';
  startGame();
};

conferma.onclick = function () {
  if (counter.innerHTML == navsCounter) {
    showResult(true);
  } else {
    showResult(false);  
  }
};

reset.onclick = function () {
  counter.innerHTML = '0';
  risultato.style.display = 'none';
  navsGenerated = 0;
  conferma.disabled = true;
  startGame();
};

add.onclick = function () {
  counter.innerHTML++;
}


sub.onclick = function () {
  if(counter.innerHTML != 0)
    counter.innerHTML--;
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  navsCounter = getRandomNumber(3, 10);
  isGameStarted = true;
  sub.disabled = false;
  add.disabled = false;
  generaNavs();
}



function generaNavs() { 
  if (isGameStarted && navsGenerated < navsCounter) {
      let ship = document.createElement('div');
      ship.classList.add('navs');
      ship.textContent = navs;
      spaceContainer.appendChild(ship);
      navsGenerated++;

      //imposta la velocità casuale
      const speed = `${Math.random() * 2 + 1}s`;
      ship.style.animationDuration = speed;

      //posizione partenza navicella
      if(Math.random() < 0.5){
        ship.style.left = '50px';
      } else if (window.innerWidth < 600){
        ship.style.left = '250px';
      } else {
        ship.style.left = '450px';
      }

      ship.classList.add('moveNavs');

      //rimuove navicella alla fine dell'animazione
      ship.addEventListener('animationend', function () {
          spaceContainer.removeChild(ship);

          if (navsGenerated < navsCounter) {
              generaNavs();
          } else {
              conferma.disabled = false;
          }
      });
  }
}

  

function showResult(congratulations) {
  isGameStarted = false;
  let message = congratulations ? 'Congratulazioni!' : 'Hai mancato qualcosa, riprova.';
  fraseFinale.textContent = message;
  risultato.style.display = 'block';
}



