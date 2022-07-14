var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];

button.onclick = function (evt) {
    firstPar.firstElementChild.classList.add('link');
    firstPar.lastElementChild.classList.add('link');
}

secondPar.addEventListener('click', function (event) {
    event.preventDefault()

    var target = event.target;

    if (target.tagName === 'A') {
        var href = target.getAttribute('href');

        alert(href);
    }
});






