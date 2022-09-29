// step 1: READ THE PDF (step 2 and 3 is READ THE PDF)

// ensure your js is linked.
console.log(".js file linked");

// select the javascript list.
// to clarify not a single item but the entire list.
const listgroup = document.querySelector("div.list-group");

// add a mouse over link to the javascript list to highlight an item.
listgroup.addEventListener('mouseover', (evt) => {
    //console.log(evt.target);
    evt.target.classList.add("active");
});

// add an event listener on mouse out that remove the active class
listgroup.addEventListener('mouseout', (evt) => {
    evt.target.classList.remove("active");
});

// add an event listener that will open links in new tab.
listgroup.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(evt.target.getAttribute('href'));
    window.open(evt.target.getAttribute('href'));
});