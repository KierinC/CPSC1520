// fetch from the dictionary api here!
export function getWord(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((wordInfo) => {
        return wordInfo;
      });
}
