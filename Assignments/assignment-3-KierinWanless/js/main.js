// link this file in your html!
import 'bootstrap/dist/css/bootstrap.min.css';
import {getWord} from './api/dictionary';
import {createWordItem} from './dom/word-item';

let dictSearch = document.querySelector('#dictionary-search');
let wordInput = document.querySelector('.form-control');
let srchWords = document.querySelector('.recently-search-words');
let faveWords = document.querySelector('.favourite-words');

dictSearch.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let word = wordInput.value;

  getWord(word).then(data => {
    // console.log(data.phonetics[0].audio);
    createWordItem(data);
  });
});

srchWords.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('btn')) {
    let fave = evt.target.parentNode;
    fave.removeChild(evt.target);
    faveWords.appendChild(fave);
  }
});
