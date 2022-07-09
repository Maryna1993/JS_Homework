//Задание 1
var arr = [-1, 0, 2, 34, -2];

var filterNumbersArr = arr.filter(function (numbers) {
    return numbers > 0;
});

console.log(filterNumbersArr);


//Задание 2
var arr = [-1, 0, 2, 34, -2];

var findNumbersArr = arr.find(function (numbers) {
    return numbers > 0;
});

console.log(findNumbersArr);


//Задание 3
function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome('шалаШ'));

console.log(isPalindrome('привет'));

console.log(isPalindrome('Боб'));


//Задание 4
    function areAnagrams(wordOne, wordTwo) {
        return wordOne.toLowerCase().split('').sort().join('') === wordTwo.toLowerCase().split('').sort().join('');
    }

    console.log( areAnagrams('кот', 'Отк'));

    console.log( areAnagrams('кот', 'атк'));

    console.log(areAnagrams('кот', 'отко'));


//Задание 5
function divideArr(arr, lengthArr) {
    var array = [];

    if (lengthArr !== 0) {

        for (var i = 0; i < arr.length; i += lengthArr) {
            array.push(arr.slice(i, i + lengthArr));
        }

    } else {
        return arr;
    }

    return array;
}

console.log(divideArr([1, 2, 3, 4], 2));

console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(divideArr([1, 2, 3, 4], 0));


//Задание 6*
function isPowerOfTwo(number) {

    while (true) {
        if (number > 0) {
            if (number === 1 || number % 2 === 0) break;
            return false;
        }

        return false;
    }

    return true;
}

console.log(isPowerOfTwo(3));

console.log(isPowerOfTwo(1));

console.log(isPowerOfTwo(16));

