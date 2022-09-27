// this is our javascript file.
console.log('functions example');

function getUsername() {
    //let username = prompt('Enter name:');
    //return username;

    return prompt('Enter name:');
}

const getDescription = () => {  //can also use const getDescription = function () {
    //let description = prompt('Enter description:');
    //return description;

    return prompt('Enter description:');
};

function updateElement(selector, value) {
    document.querySelector(selector).innerText = value;
}

function updateUsername() {
    //let username = getUsername();
    //let usernameElement = document.querySelector('#username');
    //usernameElement.innerText = username;

    //document.querySelector('#username').innerText = getUsername();

    updateElement('#username', getUsername());
}

function updateDescription() {
    //let description = getDescription();
    //let descriptionElement = document.querySelector('p.description');
    //descriptionElement.innerText = description;

    //document.querySelector('p.description').innerText = getDescription();

    updateElement('p.description', getDescription());
}

updateUsername();
updateDescription();