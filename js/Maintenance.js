document.getElementById('reportedBusBtn').addEventListener('click', () => {
    document.getElementById('reportedBus').classList.add('active');
    document.getElementById('reportedBus').classList.remove('hidden');
    document.getElementById('busMaintained').classList.add('hidden');
});

document.getElementById('busMaintainedBtn').addEventListener('click', () => {
    document.getElementById('busMaintained').classList.add('active');
    document.getElementById('busMaintained').classList.remove('hidden');
    document.getElementById('reportedBus').classList.add('hidden');
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
makeTableEditable('reportedBusTable');
makeTableEditable('busMaintainedTable');
