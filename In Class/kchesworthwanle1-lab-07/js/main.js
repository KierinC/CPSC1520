/*
You're asked to filter out emails that aren't formatted correctly

1. initialize npm with npm init
2. install parcel and set it up
3. npm install validator.js which is a library which allows
   you to validate emails
4. install bootstrap and remove it from index.html
5. create an index.js file
  - import your bootstrap
  - import your main.js
6. import contacts here, into this file
7. import validator from validator
   [import validator from 'validator';]
8. filter our emails that are not valid in the render contacts
   function
*/
import { CONTACTS } from './contacts';
import validator from 'validator';

renderContacts(CONTACTS);

function renderContacts(allContacts) {
	let allContactsList = document.querySelector(".all-contacts");
	allContactsList.innerHTML = '';
	allContacts.map((contact) => {
    if (validator.isEmail(contact.email)) {
      allContactsList.innerHTML += `<div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${contact.name}</h5>
        </div>
      <small>${contact.email}</small>
    </div>`;
    }
	});
}
