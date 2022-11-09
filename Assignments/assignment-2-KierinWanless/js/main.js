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

(async function () {
    let rowsElement = document.querySelector('#ted-talk-rows');
    let formElement = document.querySelector('#ted-talk-filter');
    let textElement = formElement.elements['search-query'];
    let numberElement = formElement.elements['min-views'];
    let columnsElement = document.querySelector('#ted-talk-columns');
    let allTedTalks = await getTedTalks();
    let modifiedTalks = allTedTalks;

    renderTedTalks(allTedTalks);

    columnsElement.addEventListener('click', (evt) => {
        thetalks = modifiedTalks;
        // get element to sort by
        let target = evt.target.innerText;
        // use the element to sort the array before rendering
        modifiedTalks.sort((a, b) => {
            // check if variable is string or not
            if (typeof a[target] === 'string') {
                const nameA = a[target].toUpperCase(); // ignore upper and lowercase
                const nameB = b[target].toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
            
                // names must be equal
                return 0;
            } else {
                return a[target] - b[target];
            }
          });

        renderTedTalks(thetalks);
    });

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let textValue = textElement.value.trim();
        let numberValue = numberElement.value;

        thetalks = allTedTalks;

        if (textValue !== '') {
            thetalks = textFilter(textValue, thetalks);
        }
        
        if (numberValue !== '') {
            thetalks = viewsFilter(numberValue, thetalks);
        }

        modifiedTalks = thetalks;
        renderTedTalks(thetalks);
    });

    function textFilter(text, tedtalks) {
        text = text.toLowerCase();
        return tedtalks.filter(tedtalk => {
            return tedtalk.title.toLowerCase().includes(text);
        });
    }

    function viewsFilter(views, tedtalks) {
        return tedtalks.filter(tedtalk => {
            if (tedtalk.views >= views) {
                return tedtalk;
            }
        });
    }

    async function getTedTalks() {
        let response = await fetch('data/ted_talks.json');
        let tedtalks = await response.json();
        return tedtalks;
    }

    function renderTedTalks(tedTalks) {
        rowsElement.innerHTML = '';
        
        tedTalks.forEach((tedTalk) => {
            let tr = document.createElement('tr');

            let title = document.createElement('td');
            title.appendChild(document.createTextNode(`${tedTalk.title}`));

            let author = document.createElement('td');
            author.appendChild(document.createTextNode(`${tedTalk.author}`));

            let date = document.createElement('td');
            date.appendChild(document.createTextNode(`${tedTalk.date}`));

            let link = document.createElement('a');
            link.setAttribute('href', `${tedTalk.link}`);
            link.appendChild(document.createTextNode('view talk'));

            let views = document.createElement('td');
            views.appendChild(document.createTextNode(`${tedTalk.views}`));

            let likes = document.createElement('td');
            likes.appendChild(document.createTextNode(`${tedTalk.likes}`));
            
            tr.appendChild(title);
            tr.appendChild(author);
            tr.appendChild(date);
            tr.appendChild(link);
            tr.appendChild(views);
            tr.appendChild(likes);

            rowsElement.appendChild(tr);
        });
    }
})();