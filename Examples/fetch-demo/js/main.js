
fetch('data/text.txt')
    .then((res) => res.text())
    .then((text) => {
        document.querySelector('.text-output').innerText = text;
    });

fetch('data/people.json')
    .then((res) => res.json())
    .then((people) => {
        let jsonDiv = document.querySelector('.json-output');
        people.forEach(person => {
            jsonDiv.innerHTML += `<p>Name: ${person.firstName} ${person.lastName}<p>`
            jsonDiv.innerHTML += `<p>Age: ${person.age}<p>`
        });
    });


/*
// use incorrect file name to see error in console
fetch('data/text.tx')
    .then((res) => {
        if (res.ok) {
            res.text();
        } else {
            throw Error(`${res.status}`);
        }
    })
    .then((text) => {
        document.querySelector('.text-output').innerText = text;
    });
*/