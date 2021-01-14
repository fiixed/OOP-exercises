import Card from './Card.js';

class Hand {
    constructor() {
        this.hand = [];
    }

    addCard(Card){
      this.hand.push(Card);
    }
    getPoints() {
      if (this.hand.length == 0) {
          console.log(0);
      } else {
          let totalPoints = this.hand.reduce((prev, current) => prev.point + current.point);
          console.log(totalPoints);
      }
    }
}
var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints();