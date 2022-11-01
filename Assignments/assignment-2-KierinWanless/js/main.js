/*
HTML for table rows.
rowsElement.innerHTML += `<tr>
            <td>${tedTalk.title}</td>
            <td>${tedTalk.author}</td>
            <td>${tedTalk.date}</td>
            <td><a href="${tedTalk.link}">view talk</a></td>
            <td>${tedTalk.views}</td>
            <td>${tedTalk.likes}</td>
        </tr>`;

*/

(function () {
    let rowsElement = document.querySelector('#ted-talk-rows');
    let formElement = document.querySelector('#ted-talk-filter');
    let textElement = formElement.elements['search-query'];
    let numberElement = formElement.elements['min-views'];
    let textValue = textElement.value;
    let numberValue = numberElement.value;
    let allTedTalks = [];

    getTedTalks(renderTedTalks);

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    function getTedTalks(callback) {
        fetch('data/ted_talks.json')
        .then((res) => res.json())
        .then((tedtalks) => {
            allTedTalks = tedtalks;
            callback(allTedTalks);
        });
    }

    function renderTedTalks(tedTalks) {
        rowsElement.innerHTML = '';
        
        tedTalks.forEach((tedTalk) => {
            rowsElement.innerHTML += `<tr>
            <td>${tedTalk.title}</td>
            <td>${tedTalk.author}</td>
            <td>${tedTalk.date}</td>
            <td><a href="${tedTalk.link}">view talk</a></td>
            <td>${tedTalk.views}</td>
            <td>${tedTalk.likes}</td>
            </tr>`;
        });
    }
})();