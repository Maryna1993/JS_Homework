function Animal(name) {
  this._foodAmount = 50;

  var self = this;

  function formatFoodAmount() {
    return self._foodAmount + ' гр.';
  }

  self.dailyNorm = function (amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 30 || amount > 100) {
      return 'Недопустимое количество корма.';
    }

    self._foodAmount = amount;
  };

  this.name = name;

  this.feed = function () {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };

}

function Cat(name) {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;
  this.feed = function () {
    animalFeed();
    return this;
    this.feedCat();
  }

  this.feedCat = function () {
    console.log(' Кот доволен ^_^');
    return this;
  };

  this.stroke = function () {
    console.log('Гладим кота');
    return this;
  };

}

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm(75));
barsik.feed();

var pushok = new Animal('Пушок');

console.log(pushok.dailyNorm(80));
pushok.feed();

barsik.feed().stroke().stroke();

barsik.stroke().stroke().feed();
