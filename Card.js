class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
      console.log(`images/${this.point}_of_${this.suit}s.png`);
    }
  }

 export default Card;