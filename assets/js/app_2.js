/*
 * Create a list that holds all of your deck
 */

/*
 * Display the deck on the page
 *   - shuffle the list of deck using the provided "shuffle" method below
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
    const container = document.createElement('div');
    const deck = document.createElement('div');

    for (let i = 1; i <= 16; i++) {
        const mycard = document.createElement('div');
        const myitem = document.createElement('i');
        container.classList.add('container');
        deck.classList.add('deck');
        mycard.classList.add('card');
        myitem.classList.add('fa');
        // mycard.textContent = 'Testing only ';
        container.appendChild(deck);
        deck.appendChild(mycard);
        mycard.appendChild(myitem);
        let b = document.querySelector('body');
        b.appendChild(container);
    }
    assignClass();
    displayCard();
    return deck;
}
createDeck();

/** Dynamically assign classes to the deck */

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
    });
}

function removeCard() {
    const el = document.querySelector('i');
    el.remove();
}

function displayCard() {
    const items = document.querySelectorAll('.card');
    const card = document.querySelector('i');
    let openCards = [];
    const openDeck = document.createElement('div');
    items.forEach(function (item) {
        item.onclick = function () {
            if (item.className !== "open"){
                item.classList.add('open');
                openCards.push(item);
                if (openCards.length !== null && this.className !== item.className){
                    item.remove();
                    console.log(item);
                }
              }
             else {
                console.log("No open card");
            }
            item.style.color = 'white';
            item.style.fontSize = '33px';
            const bd = document.querySelector('body');
            // openDeck.style.backgroundColor = "#b0c0b0";
            bd.appendChild(openDeck);
        }
        // https://3dtransforms.desandro.com/card-flip get some info from here

    });
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" deck (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two deck match
 *    if the deck do match, lock the deck in the open position (put this functionality in another function that you call
 *  from this one)
 *    if the deck do not match, remove the deck from the list and hide the card's symbol (put this functionality
 *  in another function that you call from this one)
 *    increment the move counter and display it on the page (put this functionality in another function that you call
 *  from this one)
 *    if all deck have matched, display a message with the final score (put this functionality in another function
 * that you call from this one)
 */
/**
 *  Memory Game Logic: The game randomly shuffles the deck. A user wins once all deck have successfully been matched.
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