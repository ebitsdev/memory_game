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
let deckOfCards = document.querySelectorAll('.card');

// Function to keep openCardArray count
function keepOpenCardArrayopenCardArrayCount(cardArray, card) {
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

function manipulateCards() {
    var openCardArray = [];
    let deck = document.querySelector('.deck');

    // deck.addEventListener('click', function(cE){
    deckOfCards.forEach(function (singleCard) {
        singleCard.addEventListener('click', function (ev) {
            if (!singleCard.classList.contains('show') && !singleCard.classList.contains('open') && !singleCard.classList.contains('match')) {
                keepOpenCardArrayopenCardArrayCount(openCardArray, singleCard);
                displayOpenCard(singleCard);
                if (openCardArray.length === 2) {
                    setTimeout(function () {
                        openCardArray.forEach(function (singleCard) {
                            singleCard.classList.remove('open', 'show');
                        });
                        //Empty openCardArray after the timeout
                        openCardArray = [];
                    }, 1000);
                } //else
                // {
            }
            // }
            // Add the clicked cards to the openCardArray array
            // console.log(openCardArray);
        });

    });
}
manipulateCards();