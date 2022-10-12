// wrap everything in an IIFE
(function () {
    const USER = 'Kierin Wanless';
    let formElement = document.querySelector('#cheep-form');
    let listElement = document.querySelector('.cheep-list');

    // focus on first element on page load
    formElement.elements['cheep-text'].focus();

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let cheeptextElement = evt.target.elements['cheep-text'];
        let cheepgifElement = evt.target.elements['cheep-gif'];

        let cheeptextValue = cheeptextElement.value;
        let cheepgifValue = cheepgifElement.value;

         // form validation
        let isFormValid = true;

        if (!isTextNotEmpty(cheeptextValue)) {
          isFormValid = false;

          cheeptextElement.classList.add("is-invalid");
        } else {
          cheeptextElement.classList.remove("is-invalid");
        }

        if (!isGifSelected(cheepgifValue)) {
            isFormValid = false;
  
            cheepgifElement.classList.add("is-invalid");
          } else {
            cheepgifElement.classList.remove("is-invalid");
          }

        if (isFormValid) {
            // Add item to list
            AddCheep(cheeptextValue, cheepgifValue);

            // Clear form
            formElement.reset();

            // Focus on first element again
            formElement.elements['cheep-text'].focus();
        }
    });

    // function to determine if field is not empty
    function isTextNotEmpty (value) {
        let valid = false;
        
        if (value.length > 0 && value.length < 50) {
          valid = true;
        }
    
        return valid;
    }

    // function to determine if a gif is selected
    function isGifSelected (value) {
        let valid = false;

        if (value !== "") {
            valid = true;
        }

        return valid;
    }

    // function to add a cheep
    function AddCheep(text, gif) {
        let oldContent = listElement.innerHTML;

        listElement.innerHTML = `<li class="text-center list-group-item list-group-item-action" aria-current="true">
        <p>Author: ${USER}</p>
        <div class="row h-100">
            <div class="col-sm">
                <img src="img/${gif}" class="rounded float-start" alt="CHEEP GIF HERE">    
            </div>
            <div class="col-sm h-100">
                <h5 class="mb-1">${text}</5>
            </div>
        </div>
    </li>` + oldContent;
    }
})();

// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
    <li class="text-center list-group-item list-group-item-action" aria-current="true">
        <p>Author: USERNAME HERE</p>
        <div class="row h-100">
            <div class="col-sm">
                <img src="CHEEP GIF HERE" class="rounded float-start" alt="CHEEP GIF HERE">    
            </div>
            <div class="col-sm h-100">
                <h5 class="mb-1">CHEEP TEXT HERE</5>
            </div>
        </div>
    </li>
*/