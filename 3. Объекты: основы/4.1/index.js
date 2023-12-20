/*
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}


/* 
У нас есть объект, в котором хранятся зарплаты нашей команды.
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let employee in salaries) {
  sum += salaries[employee];
}
alert(sum);