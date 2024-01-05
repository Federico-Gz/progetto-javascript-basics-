let counter = document.querySelector('.counter');
let sub = document.getElementById('sub');
let add = document.getElementById('add');
let conferma = document.getElementById('conferma');
let reset = document.getElementById('reset');

let winMessage = document.createElement('p');
let navsCounter = 5;
let fraseFinale = document.getElementById('fraseFinale');
let risultato = document.querySelector('.risultato');
risultato.style.display = 'none';





sub.onclick = function() {
    if(counter.innerHTML != 0)
        counter.innerHTML--;

}

add.onclick = function() {
    counter.innerHTML++;
}

conferma.onclick = function() {
    if(counter.innerHTML == navsCounter) {
        risultato.style.display = 'block';
        fraseFinale.textContent = ("Congratulazioni!");     
    }
    else {
        risultato.style.display = 'block';
        fraseFinale.textContent = ("Ti è sfuggito qualcosa, riprova.");
    }  
}

reset.onclick = function(){
    counter.innerHTML = ("0");
    risultato.style.display = 'none';
}