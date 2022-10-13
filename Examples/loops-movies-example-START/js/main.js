(function () {
    // intercept the form and/or required elements
    let movieFilterForm = document.querySelector('#movie-filter-form');

    // focus on the filter element
    movieFilterForm.elements['filter-query'].focus();

    // select all movie list items the descendant css selector
    // .top-movies-list li
    let allMovieItems = document.querySelectorAll('.top-movies-list li');

    movieFilterForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        // get the form value and call the function filterItems
        let filter = evt.target.elements['filter-query'].value;
        //console.log(filter);
        filterItems(filter);
    });

    /*
    We're going to create a function named "filterItems"
    that check each item contains our search query
    - if it's not, then we're going to add the "hidden-item" class
    - if does include it, we're going to remove the "hidden-item" class

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/   String/includes
    */

    function filterItems(filterValue) {
        let lowCaseFilterValue = filterValue.toLowerCase();
        
        for (let i = 0; i < allMovieItems.length; i++) {
            let lowCaseMovieTitle = allMovieItems[i].innerText.toLowerCase();

            if (lowCaseMovieTitle.includes(lowCaseFilterValue)) {
                allMovieItems[i].classList.remove('hidden-item');
            } else {
                allMovieItems[i].classList.add('hidden-item');
            }
        }
    }


})();