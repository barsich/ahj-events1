/* eslint-disable no-plusplus */
import Counters from './Counters';

export default class CatFlip {
  constructor() {
    this.counters = new Counters();
    this.fieldSize = 4;
    this.field = document.querySelector('.field');
    this.cells = null;
    this.previousIndex = null;
    this.interval = null;
  }

  createField() {
    for (let i = 0; i < this.fieldSize; i++) {
      const col = document.createElement('div');
      col.classList.add('col');
      this.field.appendChild(col);
      for (let j = 0; j < this.fieldSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        col.appendChild(cell);
      }
    }
    this.cells = Array.from(document.querySelectorAll('.cell'));
  }

  pets(event) {
    if (!event.target.classList.contains('cat')) {
      return;
    }
    this.counters.increasePets();
    event.target.removeEventListener('click', this.pets);
    if (this.counters.petCounter === 15) {
      this.win();
    }
    document.querySelector('.cat').remove();
    clearInterval(this.interval);
    this.flip();
  }

  flip() {
    if (document.querySelector('.cat')) {
      document.querySelector('.cat').remove();
      this.counters.increaseIgnores();
      clearInterval(this.interval);
      if (this.counters.ignoreCounter === 5) {
        this.fail();
      }
    }
    let randomIndex = Math.floor(Math.random() * this.cells.length);
    while (randomIndex === this.previousIndex) {
      randomIndex = Math.floor(Math.random() * this.cells.length);
    }
    const randomCell = this.cells[randomIndex];
    this.previousIndex = randomIndex;
    const cat = document.createElement('div');
    cat.classList.add('cat');
    randomCell.appendChild(cat);
    cat.addEventListener('click', this.pets.bind(this));
    this.interval = setInterval(this.flip.bind(this), 1000);
  }

  win() {
    alert('Вы погладили всех котиков!');
    this.counters.petDiv.innerText = 0;
    this.counters.petCounter = 0;
    this.counters.ignoreDiv.innerText = 0;
    this.counters.ignoreCounter = 0;
  }

  fail() {
    alert('Котики не поглажены!');
    this.counters.petDiv.innerText = 0;
    this.counters.petCounter = 0;
    this.counters.ignoreDiv.innerText = 0;
    this.counters.ignoreCounter = 0;
  }
}
