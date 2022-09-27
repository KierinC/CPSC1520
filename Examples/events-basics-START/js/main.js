(function () {
    let counter = document.querySelector('.counter');
    
    document.querySelector('.btn-increment').addEventListener('click', function handleClick() {
        counter.innerText = parseInt(counter.innerText) + 1;
    });

    document.querySelector('.link').addEventListener('click', (evt) => {
        evt.preventDefault();
    });

    document.querySelector('.form').addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    document.querySelector('.colours').addEventListener('click', (evt) => {
        document.body.style = `background: ${evt.target.className}`;
    });
})();