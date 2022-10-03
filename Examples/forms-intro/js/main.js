(function () {
    document.querySelector('form').addEventListener('submit', (evt) => {
        evt.preventDefault();

        console.log('Submitted...');

        let output = document.querySelector('.output');

        let txtInputValue = evt.target.elements['txt-input'].value;
        let passInputValue = evt.target.elements['pass-input'].value;
        let radioInputValue = evt.target.elements['radio-input'].value;
        let checkboxInput = evt.target.elements['checkbox-input'];
        let selectInputValue = evt.target.elements['select-input'];
        let textareaInputValue = evt.target.elements['textarea-input'];
        
        output.innerHTML = `<p>Text: ${txtInputValue}</p>`;
        output.innerHTML += `<p>Password: ${passInputValue}</p>`;
        output.innerHTML += `<p>Option: ${radioInputValue}</p>`;
        
        if (checkboxInput[0].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInput[0].value}</p>`;
        }
        if (checkboxInput[1].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInput[1].value}</p>`;
        }
        if (checkboxInput[2].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInput[2].value}</p>`;
        }

        output.innerHTML += `<p>Select: ${selectInputValue.value}</p>`;
        output.innerHTML += `<p>Text: ${textareaInputValue.value}</p>`;
    });
})();