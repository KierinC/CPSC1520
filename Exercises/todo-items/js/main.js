/*
	Add a 'change' event listener for the select.items drop-down that will create a list of labeled checkboxes based on the value of the option selected.  Start by simply adding an event listener that logs a message and then search for how to access the selected option's value (this should be very simple so don't get sucked into complex solutions). Perhaps start with the Eloquent JavaScript text and go from there...

	Also, in the img folder there is an image demonstrating the result of choosing a select option from the drop-down.
*/

(function () {
	let itemsElement = document.querySelector('.items');
	let listElement = document.querySelector('.todo-list');

	itemsElement.addEventListener('change', (evt) => {
		let selectValue = itemsElement.value;

		console.log(selectValue);

		listElement.innerHTML = '';

		for (let i = 1; i <= selectValue; i++) {
			listElement.innerHTML += `<li><input type="checkbox" id="item${i}" name="item${i}" value="item${i}">
			<label for="item${i}">Todoitem ${i}</label></li>`;
		}
	});
})();