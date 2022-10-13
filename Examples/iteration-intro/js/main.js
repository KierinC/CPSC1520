// no IIFE, jsut testing

// while
let whileOutput = document.querySelector('.while');

let whileCount = 1;

while (whileCount <= 10) {
    whileOutput.innerHTML += `${whileCount} `;
    whileCount += 1;
}

// do-while
let dowhileOutput = document.querySelector('.do-while');

let dowhileCount = 1;

do {
    dowhileOutput.innerHTML += `${dowhileCount} `;
    dowhileCount += 1;

} while (dowhileCount <= 10);

// for loop
let forOutput = document.querySelector('.for');

for (let forCount = 1; forCount <= 10; forCount += 1) {
    forOutput.innerHTML += `${forCount} `;
}

// working with an array

let letters = ['a','b','c','d','e','f'];

// for loop with array
let arrayForOutput = document.querySelector('.array-for');

for (let i = 0; i < letters.length; i += 1) {
    arrayForOutput.innerHTML += `${letters[i]} `;
}

// foreach loop with array
let arrayFoEachrOutput = document.querySelector('.array-foreach');

letters.forEach ( (letter) => {
    arrayFoEachrOutput.innerHTML += `${letter} `;
} );

// testing
let test = [];

let testOutput = document.querySelector('.test');

for (let i = 0; i < 17; i += 1) {
    test[i] = i**1/8;
    testOutput.innerHTML += `${test[i]} `;
}