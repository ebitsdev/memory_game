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
function createDeck() {
    const cards = document.createElement('div');

    for (let i = 1; i <= 16; i++) {
        const mycard = document.createElement('div');
        const myitem = document.createElement('i');
        cards
            .classList
            .add('card-deck');
        mycard
            .classList
            .add('card');
        myitem
            .classList
            .add('fa');
        // mycard.textContent = 'Testing only ';
        cards.appendChild(mycard);
        mycard.appendChild(myitem);
        let b = document.querySelector('body');
        b.appendChild(cards);
    }
    assignClass();
    getElems();
    displayCard();
    return cards;
}
createDeck();

/** Dynamically assign classes to the cards */
function assignClass() {
    const myClasses = [
        'fa-diamond',
        'fa-paper-plane-o',
        'fa-anchor',
        'fa-bolt',
        'fa-cube',
        'fa-leaf',
        'fa-bicycle',
        'fa-bomb'
    ];
    $('.card i').each(function (i) {
        if (i < 8) {
            $(this).addClass(myClasses[i]);
        } else {
            $(this).addClass(myClasses[i - 8]);
        }
    })
};

function displayCard(){
    const myCard = document.querySelector('div');
    myCard.style.backgroundColor = "red";
}

function getElems() {
    const allElem = document.querySelector('div');
    allElem.addEventListener('click', function () {
        console.dir('You just clicked me!');
    });
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call
 *  from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality
 *  in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call
 *  from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function
 * that you call from this one)
 */
/**
 *  Memory Game Logic: The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
 *  Congratulations Popup: When a user wins the game, a modal appears to congratulate the player and ask if they want to
 *  play again. It should also tell the user how much time it took to win the game, and what the star rating was.
    Restart Button: A restart button allows the player to reset the game board, the timer, and the star rating.
    Star Rating: The game displays a star rating (from 1 to at least 3) that reflects the player's performance.
    At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a
    lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).
    The number of moves needed to change the rating is up to you, but it should happen at some point.
    Timer: When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
    Move Counter: Game displays the current number of moves a user has made.
    Interface Design:
    CRITERIA
    MEETS SPECIFICATIONS
    Styling: Application uses CSS to style components for the game.
    Usability: All application components are usable across modern desktop, tablet, and phone browsers.
 */