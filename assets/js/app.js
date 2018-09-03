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
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

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
(function(){
const allCards = [
    'fa-diamond', 'fa-diamond',
    'fa-paper-plane-o', 'fa-paper-plane-o',
    'fa-anchor', 'fa-anchor',
    'fa-bolt', 'fa-bolt',
    'fa-cube', 'fa-cube',
    'fa-bicycle', 'fa-bicycle',
    'fa-bomb', 'fa-bomb',
    'fa-leaf', 'fa-leaf'
];
let moves = 0;
// Start game function
function startGame() {
    const deck = document.querySelector('.deck');
    const cardElements = shuffle(allCards.map(function (singleCard) {
        return createCard(singleCard);
    }));
    deck.innerHTML = cardElements.join('');
}

// Call start game function
startGame();

function restartGame(){
    const deckOfCards = document.querySelectorAll('.card');
    const moveText = document.querySelector('.moves');
    document.querySelector('.restart').addEventListener('click', reset, false);

    function reset(ev){
        if (ev.target.classList.contains('fa-repeat')){
            deckOfCards.forEach(function(card){
                card.classList.remove('match');
                moveText.innerText = 'test';
            });
        }
    }
}

// Create card model
function createCard(singleCard) {

    return '<li class="card" data-card="'+singleCard+'"><i class="fa ' + singleCard + '"></i></li>';

}

function winningMessage(){
    const matchedCards = [];
    const allMatchedCards = document.querySelectorAll('.match');
    allMatchedCards.forEach(function(matchedCard){
        matchedCards.push(matchedCard);
    });
    if (matchedCards.length === 16){
    alert("Congratulations, you won!");
    }
}

// Function to keep openCardArray count
function keepOpenCardsCount(cardArray, card) {
    cardArray.push(card);
    return cardArray;
}
// Display opencard symbol
function displayOpenCard(openCard) {
    //const's add some class to the clicked card
    openCard.classList.add('open', 'show');
}

// Function to lock matched cards
function lockMatchedCards(firstCard, secondCard) {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
}

function getClickedCards() {
const moveCounter = document.querySelector('.moves');

// const clickedCards = [];
function cardHandler(ev){

    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        const openCard = ev.target;
        if (openCard === card) {

            // clickedCards.push(openCard);
            keepOpenCardsCount(clickedCards, openCard);
            if (!card.classList.contains('show') && !card.classList.contains('open') && !card.classList.contains('match')) {
                //Keep record of clicked cards
                displayOpenCard(card);

                //Flip open cards when there are more than two

                if (clickedCards.length === 2) {
                    if (clickedCards[0].dataset.card === clickedCards[1].dataset.card){
                    // Lock matched cards
                       lockMatchedCards(clickedCards[0], clickedCards[1]);
                    }
                    setTimeout(function () {
                        clickedCards.forEach(function (card) {
                            card.classList.remove('open', 'show');
                        });
                        //Empty clickedCardsArray after the timeout
                        clickedCards = [];
                    }, 1000);
                }

                // Increment moves
                moves += 1;
                //Display move counts
                moveCounter.innerText = moves;
                winningMessage();
            }
        }
    });

    // Stop event propagation
    ev.stopPropagation();
}
// Event listener for the deck of cards
    const myDeck = document.querySelector('.deck');
    let clickedCards = [];
    // Create single listener on parent ul
    myDeck.addEventListener('click', cardHandler, false);
}
// Get the cards that were clicked
getClickedCards();
restartGame();
})();