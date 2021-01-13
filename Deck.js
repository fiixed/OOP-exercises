import Card from './Card.js'

class Deck {
    constructor() {
        this.deck = [];
        let points = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        let suits = ["spades", "diamonds", "clubs", "hearts"];

        for (let i = 0; i < points.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                let card = new Card(points[i], `${suits[j]}`);
                this.deck.push(card);
            } 
        }
    }

    draw() {
        if (this.deck.length == 0) {
            return;
        }
        var randomCard = this.deck[Math.floor(Math.random() * this.deck.length)];
        const index = this.deck.indexOf(randomCard);
        if (index > -1) {
            this.deck.splice(index, 1);
        }

        console.log(randomCard);
    }

    shuffle() {
        if (this.deck.length == 0) {
            return;
        }
        this.deck.sort(() => Math.random() - 0.5);
    }

    numCardsLeft() {
        if (this.deck.length == 0) {
            return;
        }
        console.log(this.deck.length);
    }
}

var myDeck = new Deck()
console.log(myDeck);
myDeck.shuffle();
console.log(myDeck);
myDeck.draw();
myDeck.draw();
myDeck.draw();
myDeck.numCardsLeft();

