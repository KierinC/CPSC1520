import image from 'url:../../img/f1_car.png';

function createCarElement(name) {
  const car = document.createElement('div');

  const carImage = document.createElement('img');
  carImage.setAttribute('src', image);
  carImage.classList.add('car');
  const carName = document.createElement('div');
  carName.textContent = name;

  car.append(carImage);
  car.append(carName);

  return car;
};

export {createCarElement};
