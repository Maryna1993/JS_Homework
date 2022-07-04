//Задание 1:
function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log(' Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
};

var pushok = new Animal('Пушок');

console.log(pushok.dailyNorm(80));
pushok.feed();

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm(75));
barsik.feed();

barsik.feed().stroke().stroke();

barsik.stroke().stroke().feed();

//Задание 2
function deepClone(obj) {
    var newObj;

    // Вместо метода Array.isArray(obj) можно было выполнить вот такую проверку
    // (typeof obj === 'object' && obj && obj.length)
    if (Array.isArray(obj)) {
        newObj = [];
    } else {
        newObj = {};
    }

    for (var key in obj) {
        newObj[key] = (typeof obj[key] === 'object') && obj[key] ? deepClone(obj[key]) : obj[key];
    }

    return newObj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Задание 3
function deepEqual(a, b) {
    if (Object.keys(a).length === Object.keys(b).length) {

        for (var value in a) {
            if ((typeof a[value] === 'object') && a[value] !== null) {
                if (Array.isArray(a[value]) && Array.isArray(b[value]) || +
                    !(Array.isArray(a[value])) && !(Array.isArray(b[value]))) {
                    if (deepEqual(a[value], b[value])) continue;
                    {
                        return false;
                    }
                }
            }

            if (typeof a[value] === 'function' && typeof b[value] === 'function') {
                if (a[value].toString() !== b[value].toString()) {
                    return false;
                }
                break;
            }

            if (a[value] !== b[value]) {
                return false;
            }
        }

        return true;
    }

    return false;
}

console.log(deepEqual(initialObj, clonedObj));