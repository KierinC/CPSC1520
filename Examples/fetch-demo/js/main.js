fetch('data/text.txt')
    .then((res) => res.text())
    .then((text) => {
        document.querySelector('.text-output').innerText = text;
    });