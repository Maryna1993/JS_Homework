var form = document.getElementsByTagName('form')[0],
    button = document.getElementsByTagName('button')[0],
    inputX = document.getElementById('x'),
    inputY = document.getElementById('y');

button.setAttribute('disabled', 'true');

form.addEventListener('keyup', function (evt) {
    (inputX.value.length !== 0 && inputY.value.length !== 0) ? button.removeAttribute('disabled') : button.setAttribute('disabled', 'true');
});

function clearing() {
    inputX.value = '';
    inputY.value = '';
    button.setAttribute('disabled', 'true');
}

function validateForm() {
    var x = +inputX.value,
        y = +inputY.value;

    if (x < 1 || x > 10 || x % 1 !== 0) {
        alert('Введите корректное значение в поле X - целое число от 1 до 10');
        clearing();
    } else if (y < 1 || y > 10 || y % 1 !== 0) {
        alert('Введите корректное значение в поле Y - целое число от 1 до 10');
        clearing();
    } else {
        getChessBoard(y, x,);
    }

}

button.addEventListener('click', createChessBoard);

function createChessBoard(evt) {
    evt.preventDefault();

    var chessBoard = form.getElementsByTagName('table')[0];

    (chessBoard) ? chessBoard.remove() || validateForm() : validateForm();
}


function getChessBoard(row, col) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');

    table.setAttribute('border', '1');
    table.classList.add('table');

    form.appendChild(table);
    table.appendChild(tbody);

    var tr = document.createElement('tr'),
        td = document.createElement('td');

    td.classList.add('td');

    for (var i = 0; i < row; i++) {
        tbody.appendChild(tr.cloneNode(true));

        for (var j = 0; j < col; j++) {

            var trCol = tbody.getElementsByTagName('tr')[i];

            trCol.appendChild(td.cloneNode(true));

            var tdCol = trCol.getElementsByTagName('td')[j];

            (i % 2 === j % 2) ? tdCol.classList.add('black') : tdCol.classList.add('white');
        }
    }

    clearing();
}

form.addEventListener('click', function (evt) {
    var target = evt.target;

    if (target.tagName === 'TD') {
        var tbody = form.getElementsByTagName('tbody')[0],
            arr = tbody.querySelectorAll('td.td');

        arr.forEach(function (td) {
            td.classList.toggle('black');
            td.classList.toggle('white');
        });
    }
});

