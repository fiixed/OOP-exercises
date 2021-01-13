class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
      console.log(`images/${this.point}_of_${this.suit}s.png`);
    }
  }

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
            let totalPoints = this.hand.reduce((prev, current) => {
                return prev.point + current.point;
            });
            console.log(totalPoints);
        }
      }
  }
var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()