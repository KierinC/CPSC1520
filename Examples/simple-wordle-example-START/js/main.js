(function () {

   let word = 'shirt'; // the game word to guess
   let wordleForm = document.querySelector('#wordle-form');
   let wordleSuccessEl = document.querySelector('.wordle-success');
   let guesses = [];

   // TOOD: add a form submit listener and validate input

   wordleForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      let guessElement = evt.target.elements['guess'];
      let guessValue = guessElement.value.trim();
      let validForm = true;
      
      if (isTextFiveCharacters(guessValue)) {
         guessElement.classList.remove("is-invalid");
      } else {
         guessElement.classList.add("is-invalid");
         validForm = false;
      }

      if (validForm) {
         addGuess(guessValue);

         showGuessOnPage();
         revealIfCorrect(word);
      }
   });

   function isCharacterInCorrectPlace(character, idx) {
      return word.toLowerCase()[idx] === character.toLowerCase();
   }

   function isCharacterInWord(character) {
      return word.toLowerCase().includes(character.toLowerCase());
   }

   function showGuessOnPage() {
      if (guesses.length > 0) {
         let guessIndex = guesses.length - 1;
         let selector = `.guess-${guessIndex} .guess-character`;
         let characterDivs = document.querySelectorAll(selector);
         
         characterDivs.forEach((el, idx) => {
            el.innerText = guesses[guessIndex][idx];

            if (isCharacterInCorrectPlace(guesses[guessIndex][idx], idx)) {
               el.classList.add('correct-letter-placement');
            } else if (isCharacterInWord(guesses[guessIndex][idx])) {
               el.classList.add('incorrect-letter-placement');
            }
         });
      }
   }

   function revealIfCorrect(word) {
      if (guesses.includes(word)) { // FIXME: what about case-sensitivity
         wordleSuccessEl.classList.remove('hidden');
      }
   }

   function addGuess(newGuess) {
      guesses.push(newGuess.toLowerCase()); // maybe toLowerCase?
      console.log('Guesses:', guesses)
   }

   function isTextFiveCharacters(value) {
      return value.length === 5;
   }

   /*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters
3. Create a function called "addguess" which pushes the guess on the guesses array
   Note: this is going to to take our new guess as a parameter
4. only call the add guess function if the form is valid
5. Create a showGuessOnPage function which will show the guess on the page
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element
    d. create a isCharacterInCorrectPlace function to check if the character is in the right index of the word
       - if it is add the 'correct-letter-placement' class to the element
       - return the function early if it is so that we can check the next character
    e.  create a isCharacterInWord function to check if the character is in the function
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above
6. Show the message in the element with the class wordle-success if it's successful
   Note: you can use includes on an array!
   We're going to create a function that will check this each guess!

*/

})();