/* eslint-disable no-plusplus */
export default class Counters {
  constructor() {
    this.petDiv = document.querySelector('.pets');
    this.ignoreDiv = document.querySelector('.ignors');
    this.petCounter = 0;
    this.ignoreCounter = 0;
  }

  increasePets() {
    this.petCounter++;
    this.petDiv.innerText = this.petCounter;
  }

  increaseIgnores() {
    this.ignoreCounter++;
    this.ignoreDiv.innerText = this.ignoreCounter;
  }
}
