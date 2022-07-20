var table = document.getElementsByTagName('tbody')[0],
    button = table.getElementsByTagName('button')[0];


button.onclick = function (evt) {
    var trOne = table.getElementsByTagName('tr')[0],
        row = document.createElement('tr'),
        tdOne = document.createElement('td'),
        tdTwo = document.createElement('td'),
        tdThree = document.createElement('td');

    row.appendChild(tdOne);
    row.appendChild(tdTwo);
    row.appendChild(tdThree);

    table.insertBefore(row, trOne);
}

table.addEventListener('click', function (evt) {
    var target = evt.target,
        input = document.createElement('input');

    if (target.tagName === 'TD') {
        input.value = target.innerHTML;
        target.innerHTML = '';
        target.appendChild(input);

        input.focus();

        input.addEventListener('blur', function (evt) {
            target.innerHTML = this.value;
        });

        input.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                input.blur();
            }
        });
    }
});






