/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let allCards = [
    'fa-diamond', 'fa-diamond',
    'fa-paper-plane-o', 'fa-paper-plane-o',
    'fa-anchor', 'fa-anchor',
    'fa-bolt', 'fa-bolt',
    'fa-cube', 'fa-cube',
    'fa-bicycle', 'fa-bicycle',
    'fa-bomb', 'fa-bomb',
    'fa-leaf', 'fa-leaf'
];

//
function startGame() {
    let deck = document.querySelector('.deck');
    let cardElements = shuffle(allCards.map(function (singleCard) {
        return createCard(singleCard);
    }));
    deck.innerHTML = cardElements.join('');
}
startGame();
// Create card model
function createCard(singleCard) {

    return '<li class="card"><i class="fa ' + singleCard + '"></i></li>';

}
// select all cards
let deckOfCards = document.querySelectorAll('.card');

// Function to keep openCardArray count
function keepOpenCardsCount(cardArray, card) {
    cardArray.push(card);
    return cardArray;
}
// Display opencard symbol
function displayOpenCard(openCard) {
    //Let's add some class to the clicked card
    openCard.classList.add('open', 'show');
}

function lockMatchedCards() {

}

function eventHandler() {
    let parentElement = document.querySelector('.deck');
    parentElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('match')) {
            console.log(event.target);
        };
    }, false);
}

eventHandler();

// function manipulateCards() {
//     var openCardArray = [];
//     let deck = document.querySelector('.deck');
//     // deck.addEventListener('click', eHandler, false);

//     // deck.addEventListener('click', function(cE){
//     deckOfCards.forEach(function (singleCard) {
//         singleCard.addEventListener('click', function (ev) {
//             if (!singleCard.classList.contains('show') && !singleCard.classList.contains('open') && !singleCard.classList.contains('match')) {
//                 keepOpenCardArrayopenCardArrayCount(openCardArray, singleCard);
//                 displayOpenCard(singleCard);
//                 if (openCardArray.length === 2) {
//                     setTimeout(function () {
//                         openCardArray.forEach(function (singleCard) {
//                             singleCard.classList.remove('open', 'show');
//                         });
//                         //Empty openCardArray after the timeout
//                         openCardArray = [];
//                     }, 1000);
//                 } //else
//                 // {
//             }
//             // }
//             // Add the clicked cards to the openCardArray array
//             // console.log(openCardArray);
//         });

//     });
// }
// manipulateCards();
function getClickedCards() {
    // var clickedCards = [];
function cardHandler(ev){

    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        let openCard = ev.target;
        if (openCard === card) {
            // clickedCards.push(openCard);
            keepOpenCardsCount(clickedCards, openCard);
            if (!card.classList.contains('show') && !card.classList.contains('open') && !card.classList.contains('match')) {
                //Keep record of clicked cards
                displayOpenCard(card);
                //Flip open cards when there are more than two
                if (clickedCards.length === 2) {
                    setTimeout(function () {
                        clickedCards.forEach(function (card) {
                            card.classList.remove('open', 'show');
                        });
                        //Empty clickedCardsArray after the timeout
                        clickedCards = [];
                    }, 1000);
                }
            }
        }
    });
    console.log(clickedCards);
}
    let myDeck = document.querySelector('.deck');
    var clickedCards = [];
    // Create single listener on parent ul
    myDeck.addEventListener('click', cardHandler, false);
}

getClickedCards();