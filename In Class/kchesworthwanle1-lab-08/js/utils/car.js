import {createCarElement} from '../dom/car.js';

class Car {
  constructor(name) {
    this.name = name;
    this.element = createCarElement(this.name);
  }

  addToRace(raceElement) {
    this.speed = Math.random()*2;
    this.distance = 0;
    raceElement.append(this.element);
  }

  drive() {
    let s = setInterval(()=> {
      this.distance += this.speed;
      this.element.style.marginLeft = this.distance + 'px';
      if (this.distance > 500) {
      clearInterval(s);
      }
      }, 10);
  }

}

export { Car }