//Задание 1
var arr = ['Vasya'];

var getObj = arr.map(function (item) {
    var obj = {};

    obj.name = item;
    return obj;
});

console.log(getObj);


//Задание 2
var arr = ['00', '13', '24'];

var getTime = arr.reduce(function (prev, current) {
    return prev + ' : ' + current;
}, 'Текущее время ');

console.log(getTime);


//Задание 3
function getVowels(text) {

    var vowels = 'аеёиоуыэюя',
        value = text.toLowerCase().split('');

    var numberOfVowels = value.reduce(function (prev, current) {
        if (vowels.indexOf(current) !== -1) {
            prev++;
        }

        return prev;
    }, 0);

    return 'Количество гласных в слове: ' + numberOfVowels;
}

console.log(getVowels('МолОко'));

console.log(getVowels('рЕбенОк'));

console.log(getVowels('бр'));


//Задание 4
var text = 'Привет, студент! Студент... Как дела, студент?';

function countSentencesLetters(text) {
    var result = text.split(/!|\...|\?|\//);

    result.forEach(function (count) {
        if (count) {

            console.log(count.trim() + ': ' + 'Letters quantity is: ' + count.split(',').join('').split(' ').join('').length);
        }
    });

}

countSentencesLetters(text);






