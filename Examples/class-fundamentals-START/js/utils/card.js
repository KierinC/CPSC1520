import {createCardElement} from '../dom/card.js';

class Card {
  constructor({title, description}) {
    this.element = createCardElement({title, description});
    this.toLearnList = document.querySelector('.to-learn-stickies');
    this.understoodList = document.querySelector('.understood-stickies');
    this.addEventListeners();
    this.render();
  }

  render() {
    this.toLearnList.appendChild(this.element);
  }

  remove() {
    this.element.remove();
  }

  moveToTop() {
    this.toLearnList.insertBefore(
        this.element,
        this.toLearnList.firstElementChild,
    );
  }

  moveToUnderstood() {
    this.understoodList.appendChild(this.element);
    this.element.querySelector('.btn-primary').remove();
    this.element.querySelector('.btn-success').remove();
  }

  addEventListeners() {
    const removeButton = this.element.querySelector('.btn-danger');
    const topButton = this.element.querySelector('.btn-primary');
    const understoodButton = this.element.querySelector('.btn-success');

    removeButton.addEventListener('click', () => {
      this.remove();
    });

    topButton.addEventListener('click', () => {
      this.moveToTop();
    });

    understoodButton.addEventListener('click', () => {
      this.moveToUnderstood();
    });
  }
}

export {Card};
