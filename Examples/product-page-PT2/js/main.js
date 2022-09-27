(function () {

    function addToCart(numItems) {
        let cartCount = document.querySelector('.js-cart-count');
        let totalItems = 
            parseInt(cartCount.innerText.replace('(', '').replace(')', ''));
        totalItems += numItems;
        cartCount.innerText = `(${totalItems})`;
    }

    document.querySelector('.js-quantity-form').addEventListener('submit', (evt) => {
        evt.preventDefault(); // don't submit the form
        // get the input value
        let quantity = parseInt(evt.target.elements.quantity.value);
        addToCart(quantity);
    });

    document.querySelector('.product__thumbnails').addEventListener('click', (evt) => {
            evt.preventDefault();
            updateProductImage(evt.target.src);
    });

    function updateProductImage(newSrc) {
        document.querySelector('.product__image').src = newSrc;
    }

    let thumbnails = document.querySelectorAll('.product__thumbnail');
    let currentImage = 0; // first image is shown on load

    document.addEventListener('keydown', (evt) => {
        switch(evt.key) {
            case 'ArrowLeft':
                currentImage -= 1;
                updateProductImage(thumbnails[currentImage].src);
                break;
            case 'ArrowRight':
                currentImage += 1;
                updateProductImage(thumbnails[currentImage].src);
                break;
        }
    });
    
})();