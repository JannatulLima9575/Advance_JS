        function logEvent() {
            const nameElement = document.getElementById('name');
            const inputElement = document.getElementById('name_input');
            const event = inputElement.value;
            
            const displayDiv = document.getElementById('display_name');

            // create a new paragraph element to display the event
            const p = document.createElement('p');
            p.innerText = event;

            // append 
            displayDiv.appendChild(p);
            inputElement.value = '';
        }