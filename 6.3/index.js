// Учитывает ли функция последние изменения?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // Pete




// Какие переменные доступны?
function makeWorker() {
  let namee = "Pete";

  return function () {
    alert(namee);
  };
}

let namee = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // Pete




// Независимы ли счётчики?
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1




// Объект счётчика
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counterr = new Counter();

alert(counterr.up()); // 1
alert(counterr.up()); // 2
alert(counterr.down()); // 1




// Функция внутри if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // ошибка!




// Сумма с помощью замыканий
function sum(a) {
  return function (b) {
    return a + b;
  };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4




// Видна ли переменная?
let x = 1;

function func() {
  console.log(x); // error

  let x = 2;
}

func();




// Фильтрация с помощью функции
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2




// Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}




// Армия функций
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      alert(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();