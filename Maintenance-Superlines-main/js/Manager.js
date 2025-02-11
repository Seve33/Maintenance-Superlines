document.getElementById('MaintanedBusBtn').addEventListener('click', () => {
    document.getElementById('MaintanedBus').classList.add('active');
    document.getElementById('MaintanedBus').classList.remove('hidden');
    document.getElementById('schedulebusbtn').classList.add('hidden');
});

document.getElementById('Schudelbus').addEventListener('click', () => {
    document.getElementById('schedulebusbtn').classList.add('active');
    document.getElementById('schedulebusbtn').classList.remove('hidden');
    document.getElementById('MaintanedBus').classList.add('hidden');
});

const makeTableEditable = (tableId) => {
    const table = document.getElementById(tableId);
    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'TD') {
            const cell = event.target;
            const oldValue = cell.innerText;

            // Allow editing the cell
            const input = document.createElement('input');
            input.type = 'text';
            input.value = oldValue;
            cell.innerHTML = '';
            cell.appendChild(input);
            input.focus();

            // Save changes on blur
            input.addEventListener('blur', () => {
                const newValue = input.value;
                cell.innerHTML = newValue; // Replace input with the new value
            });

            // Save changes on Enter key press
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const newValue = input.value;
                    cell.innerHTML = newValue;
                }
            });
        }
    });
};

// Apply the editable behavior to both tables
makeTableEditable('MaintanedBusTable');
makeTableEditable('schedulebusbtnTable');
