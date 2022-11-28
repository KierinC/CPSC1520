/*
HTML Structure

<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto definition">
        <div class="fw-bold">WORD HERE</div>
        <p>PARAGRAPH HERE</p>
    </div>
    <button class="m-2 btn btn-primary
    favourite-word">Add To Favourites</button>
</li>


Note: I'm sure you've read the PDF but there will be no marks given
for using innerHTML.
*/
export function createWordItem(wordData) {
  // use document.createElement and document.createTextNode
  // classList.add appendChild(inner)
  let searchedWords = document.querySelector('.recently-search-words');

  let li = document.createElement('li');
  let div = document.createElement('div');
  let div2 = document.createElement('div');
  let p = document.createElement('p');
  let button = document.createElement('button');

  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
  div.classList.add('ms-2', 'me-auto', 'definition');
  div2.classList.add('fw-bold');
  button.classList.add('m-2', 'btn', 'btn-primary');

  let word = document.createTextNode(`${wordData.word}`);
  let definition = document.createTextNode(`${wordData.meanings[0].definitions[0].definition}`);
  let faves = document.createTextNode('Add To Favourites');

  div2.appendChild(word);
  p.appendChild(definition);
  div.appendChild(div2);
  div.appendChild(p);
  button.appendChild(faves);
  li.appendChild(div);
  li.appendChild(button)

  searchedWords.appendChild(li);
}
