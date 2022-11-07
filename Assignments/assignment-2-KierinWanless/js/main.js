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
        // TODO: get element to sort by
        let target = evt.target.innerText;
        console.log(target);
        // use the element to sort the array before rendering
        modifiedTalks.sort((a, b) => {
            // console.log(typeof a[target]);
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