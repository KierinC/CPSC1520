// we're going to use bootstrap validation
// https://getbootstrap.com/docs/5.0/forms/validation/
/*
  essentially what we're going to do here.
  - check if each form element's value is valid.
  - essentially we're going to pass the values to validator functions
      - these functions are going to return true or false values
        true if valid, false 
  - if it's invalid we're going to add the class "is-invalid"
      - this is going to show the divs with the "invalid-feedback"
        which has the 
  - also we're going to return early from the event handler if it's not valid
      - this is so we don't create the budget items.
*/

(function (){

  // intercept the form and required elements
  let budgetFormElement = document.querySelector('#budget-form');
  let budgetList = document.querySelector('.current-budget');
  let budgetTotalElement = document.querySelector('#budget-total');

  // create a variable to hold the running budget total
  let runningBudgetTotal = 0;

  // focus to the first element on page load
  budgetFormElement.elements['budget-title'].focus();

  // add a submit listener
  budgetFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let titleElement = evt.target.elements['budget-title'];
    let amountElement = evt.target.elements['amount'];
    let descriptionElement = evt.target.elements['budget-description'];

    let titleValue = evt.target.elements['budget-title'].value;
    let amountValue = parseFloat(evt.target.elements['amount'].value);
    let descriptionValue = evt.target.elements['budget-description'].value;

    // form validation
    let isFormValid = true;

    if (!isTextNotEmpty(titleValue)) {
      isFormValid = false;

      titleElement.classList.add("is-invalid");
    } else {
      titleElement.classList.remove("is-invalid");
    }

    if (!isGreaterThanZero(amountValue)) {
      isFormValid = false;

      amountElement.classList.add('is-invalid');
    } else {
      amountElement.classList.remove("is-invalid");
    }

    if (!isTextNotEmpty(descriptionValue)) {
      isFormValid = false;

      descriptionElement.classList.add('is-invalid');
    } else {
      descriptionElement.classList.remove("is-invalid");
    }

    if (isFormValid) {
      // Add item to list
      AddBudgetItem(titleValue, amountValue, descriptionValue);
      
      // Clear form
      budgetFormElement.reset();
      
      // Focus on first element again
      budgetFormElement.elements['budget-title'].focus();
      
      // Update budget total
      UpdateTotal(amountValue);
    }
  });

// function to add a budget item
// e.g.
// <li class="list-group-item list-group-item-action" aria-current="true">
// TITLE AMOUNT - DESCRIPTION</li>
function AddBudgetItem(name, amount, description){
  budgetList.innerHTML += `<li class="list-group-item list-group-item-action"> ${name} ${FormatMoney(amount)} - ${description}</li>`;
}

// function to add a updateTotal function
function UpdateTotal(amount) {
  runningBudgetTotal += amount;
  budgetTotalElement.innerText = FormatMoney(runningBudgetTotal);
}

// function for general currency formatter
function FormatMoney(number) {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(number);
}

// function to determine if field is not empty
function isTextNotEmpty (value) {
  let valid = false;

  if (value.length > 0) {
    valid = true;
  }

  return valid;
}

// function to determine if a number is positive
function isGreaterThanZero (value) {
  let valid = false;

  if (value > 0) {
    valid = true;
  }

  return valid;
}

})();