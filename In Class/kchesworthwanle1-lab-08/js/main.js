// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// import class here
import {Car} from '../js/utils/car.js';

const race = document.querySelector('.car-race');

const racers = [
  'rick',
  'dan',
  'steve',
];


racers.forEach((racerName)=> {
  // call class here.
  let car = new Car(racerName);
  car.addToRace(race);
  car.drive();
});
