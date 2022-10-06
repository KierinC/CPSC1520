(function (){
    let newUsersList = document.querySelector(".new-users-list");
    let formElement = document.querySelector(".new-user-form");

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.

    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();

        let usernameElement = evt.target.elements["username"];
        let cityElement = evt.target.elements["city"];
        let provinceElement = evt.target.elements["province"];

        let usernameValue = usernameElement.value;
        let cityValue = cityElement.value;
        let provinceValue = provinceElement.value;

        let isFormValid = true;

        if (isValueNotEmpty(usernameValue) && !hasWhiteSpace(usernameValue)) {
            usernameElement.classList.remove("is-invalid");
        } else {
            usernameElement.classList.add("is-invalid");
            isFormValid = false;
        }

        if (isValueNotEmpty(cityValue)) {
            cityElement.classList.remove("is-invalid");
        } else {
            cityElement.classList.add("is-invalid");
            isFormValid = false;
        }

        if (isValueNotEmpty(provinceValue)) {
            provinceElement.classList.remove("is-invalid");
        } else {
            provinceElement.classList.add("is-invalid");
            isFormValid = false;
        }
        
        if (isFormValid) {
            //console.log(usernameValue, cityValue, provinceValue);
            addUser(usernameValue, cityValue, provinceValue);
        }
    });

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    const isValueNotEmpty = (value) => {
        if (value !== "") {
            return true
        }
        return false
    }

    // the hasWhiteSpace function
    // returns true if it has whitespace
    // returns false if it does not has whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    const addUser = (username, city, province) => {
        let newUser = `<li class="list-group-item d-flex justify-content-between    align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${username}</div>
            ${city}, ${province}
        </div>
        </li>`
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();