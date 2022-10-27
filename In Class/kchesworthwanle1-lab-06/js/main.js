/*
HTML for the project.

<div class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">FULLNAME HERE</h5>
  </div>
 <small>EMAIL HERE</small>
</div>
*/
(function () {
  let allContacts = document.querySelector('.all-contacts');

  getContacts(renderContacts);

  function renderContacts(contactsData) {
    allContacts.innerHTML = '';

    contactsData.forEach((contact) => {
      allContacts.innerHTML += `<div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${contact.name}</h5>
      </div>
      <small>${contact.email}</small>
      </div>`;
    });
  }
  
  function getContacts(callback) {
    fetch('data/contacts.json')
    .then((res) => res.json())
    .then((contacts) => callback(contacts));
  }
})();