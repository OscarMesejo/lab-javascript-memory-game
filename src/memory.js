class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    if (this.cards === undefined){
      return undefined
    } else {
      for (let i = 0; i < this.cards.length; i++){
        let temporaryCard = this.cards[i];
        let randomIndex = Math.floor(Math.random() * this.cards.length)
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryCard;
      }
      return this.cards
    }
   
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked +=1
      this.pairsGuessed +=1
      return true
    } else {
      this.pairsClicked +=1
      return false
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2){
      return true
    } else {
      return false
    }
    
  }
}
