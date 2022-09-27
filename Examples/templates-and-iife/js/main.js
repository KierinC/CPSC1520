// IIFE to hide code from the global scope
(function() {
    console.log('js connected');

    // exmple of default parameter
    function getUserText(label = 'Please enter text:') {
        return prompt(label);
    }

    function updateMain(markup) {
        document.querySelector('main').innerHTML = markup;
    }

    // demo of calling function using default param
    // let x = getUserText();
    let heading = getUserText('Enter a heading:');
    let subHeading = getUserText('Enter a sub heading');
    let content = getUserText('Enter content:');

    // old janky gross way
    // let template = '<article><h2>' + heading + '</h2>'
    //         + '<p class="sub-heading">' + subHeading + '</p>'
    //         + '<p>' + content + '</p></article>';

    // use a template
    let template = `
        <article>
            <h2>${heading}</h2>
            <p class="sub-heading">${subHeading}</p>
            <p>${content}</p>
        </article>
    `;

    updateMain(template);
})();