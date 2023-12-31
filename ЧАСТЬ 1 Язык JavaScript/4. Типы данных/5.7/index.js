// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
  let set = new Set();

  arr.forEach((item) => {
    set.add(item);
  });

  return Array.from(set);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values));

/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Например:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

function aclean(arr) {
  let map = new Map();

  arr.forEach((item) => {
    let sorted = item.toLowerCase().split("").sort().join("");
    map.set(sorted, item);
  });

  return Array.from(map.values());
}

/*
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push. Но это не выходит:

let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал? */

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");