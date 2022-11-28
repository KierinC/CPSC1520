// fetch from the dictionary api here!
export function getWord(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((wordInfo) => wordInfo[0]);
}
