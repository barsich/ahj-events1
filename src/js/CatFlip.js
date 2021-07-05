import Counters from './Counters';

export default class CatFlip {
  constructor() {
    this.cells = Array.from(document.querySelectorAll('.cell'));
    this.counters = new Counters();
    this.interval = null;
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
    const randomCell = this.cells[Math.floor(Math.random() * this.cells.length)];
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
    alert('Котики непоглажены!');
    this.counters.petDiv.innerText = 0;
    this.counters.petCounter = 0;
    this.counters.ignoreDiv.innerText = 0;
    this.counters.ignoreCounter = 0;
  }
}
