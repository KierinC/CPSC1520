/*
Steps 1-3 READ THE PDF!!!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();

    filterGames(platform);
  });

  function filterGames(platform) {
    allGameListItems.forEach((el, i) => {
      let gamePlatform = allGameListItems[i].innerText.toLowerCase();

      if (gamePlatform.includes(platform)) {
        allGameListItems[i].classList.remove('hidden-item');
      } else {
        allGameListItems[i].classList.add('hidden-item');
      }
    });
  }

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;

    addToFavouriteGames(game);
  });

  function addToFavouriteGames(game) {
    myGames.push(game);
    console.log(myGames);
    renderFavouriteList();
  }

  function renderFavouriteList() {
    myGameList.innerHTML = '';

    myGames.forEach((el) => {
      myGameList.innerHTML += `<li class="list-group-item">${el}</li>`
    });
  }

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;

    removeFromGameList(favGame);
  });

  function removeFromGameList(game) {
    let index = myGames.indexOf(game);

    myGames.splice(index, 1);

    renderFavouriteList();
  }

})();
