// wrap everything in an IIFE

(function () {
    const USER = 'Your name';
    let formElement = document.querySelector('.cheep-form');

    console.log('.js file linked');

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let cheeptextElement = evt.target.elements['cheep-text'];
        let cheepgifElement = evt.target.elements['cheep-gif'];

        
    });

    // function to determine if field is not empty
    function isTextNotEmpty (value) {
        let valid = false;
        
        if (value.length > 0) {
          valid = true;
        }
    
        return valid;
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