/*
Fetch Fundamentals
In this example we're going to use fetch locally to populate
    
Sample HTML
    <div class="mt-3 card" >
        <img class="card-img-top" src="CAT PICTURE HERE" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">CAT NAME HERE </h5>
        <p class="card-text">CAT TEXT HERE</p>
        </div>
    </div>
*/
(function () {
    let catDisplay = document.querySelector('.cat-display');

    fetch('data/cats-with-jobs.json')
    .then((res) => res.json())
    .then((cats) => {
        cats.forEach(cat => {
            catDisplay.innerHTML += `<div class="mt-3 card" >
            <img class="card-img-top" src="${cat.picture}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${cat.name}</h5>
            <p class="card-text">${cat.text}</p>
            </div>
        </div>`;
        });
    });
})();