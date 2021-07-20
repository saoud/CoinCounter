export class Coin {
  constructor(quarter, dime, nickle, penny) {
  this.quarter = parseInt (quarter);
  this.dime = parseInt (dime);
  this.nickle = parseInt (nickle);
  this.penny = parseInt (penny);
}

coinCounter(input) {
input *= 100
  if (input <= 0) {
    return this;
  } 
  else {
    if (input >= 25) {
      this.quarter = (Math.floor(input / 25))
      return this.coinCounter(input % 25 /100)
    } else if (input >= 10) {
      this.dime = Math.floor(input / 1)
      return this.coinCounter(input % 10 /100)
    } else if (input >= 5) {
      this.nickel = Math.floor(input / 5)
      return this.coinCounter(input % 5 /100)
    } else if (input >= 1) {
      this.penny = Math.floor(input / 1)
      return this.coinCounter(input % 1/100)
    }
  }
}
}


// const newCoin = new Coin (0,0,0,0)
// newCoin.coinCounter(4.99)
// const answer = this.coinCounter(101.76)
// console.log(answer)
// console.log(money)
// console.log((526 % 25) /100)
// console.log(4.99 % .25)