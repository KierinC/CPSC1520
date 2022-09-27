// IIFE
(function () {
  //---- adding an event listener ----

  const counter = document.querySelector('.counter');

  // addEventListener requires two params: the type of triggering event
  // and a function to call when the trigger occurs
  document.querySelector('.btn').addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1;
  });

  //---- overriding default behaviour ----

  // some events already have a default behaviour defined (e.g. clicking a link)
  // to override the default, a call must be made to the event object's
  // preventDefault() function. The event object is always passed as the first
  // argument to an event handler function
  document.querySelector('.link').addEventListener('click', (evt) => {
    // never open this link
    evt.preventDefault();
  });

  document.querySelector('.form').addEventListener('submit', (evt) => {
    // never submit this form
    evt.preventDefault();
  });

  //---- delegate event handling to child objects ----

  // events "bubble up", which means that an event is triggered at an origin
  // object and then is seen by every parent object to the root. This means
  // we can add an event listener to a parent object and then handle events
  // that are triggered by its children. In this example, we can add a listener
  // to the .colours parent object, and handle clicks on the various colour divs
  // that are its children
  document.querySelector('.colours').addEventListener('click', (evt) => {
    // use the event object's target property to access the originating element
    // NOTE: currentTarget is used to access the elemnt that handled the event,
    // here that would be div.colours

    // only set the background *if* a colour div was clicked
    if (evt.target.parentElement.className == 'colours') {
      document.body.style = `background: ${evt.target.className}`;
    }
    
  });
})();
