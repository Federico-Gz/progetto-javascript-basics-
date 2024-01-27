let body = document.body;

// Creazione del contenitore principale
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
body.appendChild(mainContainer);

// Creazione del contenitore della descrizione
let descriptionContainer = document.createElement('div');
descriptionContainer.classList.add('descrizione');
mainContainer.appendChild(descriptionContainer);

// Titoli e testi della descrizione
let h1Title = document.createElement('h1');
h1Title.textContent = 'COUNTER GAME';
let h2Subtitle = document.createElement('h2');
h2Subtitle.textContent = 'Indovina il numero esatto di navicelle che vedi passare';
let pDescription = document.createElement('p');
pDescription.textContent = 'Quando sei pronto, premi CONTINUA e prova ad indovinare il numero esatto usando il counter';

h1Title.classList.add('margin');
h2Subtitle.classList.add('margin');
pDescription.classList.add('margin');

descriptionContainer.appendChild(h1Title);
descriptionContainer.appendChild(h2Subtitle);
descriptionContainer.appendChild(pDescription);

// Pulsante CONTINUA
let goOnButton = document.createElement('button');
goOnButton.textContent = 'CONTINUA';
goOnButton.id = 'goOn';
descriptionContainer.appendChild(goOnButton);

// Creazione del contenitore dello spazio
let spaceContainer = document.createElement('div');
spaceContainer.classList.add('spazio');
mainContainer.appendChild(spaceContainer);

// Immagine dello spazio
let spaceImage = document.createElement('img');
spaceImage.src = 'assets/img/sfondo-spazio.jpg';
spaceImage.alt = 'spazio';
spaceContainer.appendChild(spaceImage);

// Creazione del contenitore del counter
let counterContainer = document.createElement('div');
counterContainer.classList.add('counter-container');
mainContainer.appendChild(counterContainer);

// Creazione del counter
let counterElement = document.createElement('div');
counterElement.id = 'counter';
counterElement.classList.add('box-c');
counterElement.textContent = '0';
counterContainer.appendChild(counterElement);

// Pulsanti del counter
let buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('pulsanti');
let subButton = document.createElement('button');
subButton.id = 'sub';
subButton.classList.add('box');
subButton.textContent = '-';
let addButton = document.createElement('button');
addButton.id = 'add';
addButton.classList.add('box');
addButton.textContent = '+';
let confirmButton = document.createElement('button');
confirmButton.id = 'conferma';
confirmButton.classList.add('box');
confirmButton.textContent = 'OK';

buttonsContainer.appendChild(subButton);
buttonsContainer.appendChild(addButton);
buttonsContainer.appendChild(confirmButton);
counterContainer.appendChild(buttonsContainer);

// Creazione del contenitore del risultato
let resultContainer = document.createElement('div');
resultContainer.classList.add('risultato');
resultContainer.id = 'risultato';
mainContainer.appendChild(resultContainer);

// Testo del risultato
let resultText = document.createElement('p');
resultText.id = 'fraseFinale';
resultContainer.appendChild(resultText);

// Pulsante "Prova di nuovo"
let resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.textContent = 'Prova di nuovo';
resultContainer.appendChild(resetButton);


