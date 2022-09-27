(function () {
    let body = document.querySelector("body");
    let main = document.querySelector("main");
    let box = document.querySelector(".green-box");

    // Show use a "drawing marker"
    body.addEventListener("mousemove", (evt) => {
        body.style.cursor = 'none';
        box.style.left = `${evt.x - 7}px`;
        box.style.top = `${evt.y - 7}px`;
    });

    body.addEventListener('mousedown', () => {
        main.addEventListener('mousemove', draw);
    });

    body.addEventListener('mouseup', () => {
        main.removeEventListener('mousemove', draw);
        box = document.querySelector(".green-box");
    });

    function draw(coords) {
        let newbox = `<div
                        class="blue-box"
                        style="left: ${coords.x}px;
                        top: ${coords.y}px">
                        </div>`;
        main.innerHTML += newbox;
    }
})();