/* Найдите неотрицательные целые
Есть строка с целыми числами.
Создайте регулярное выражение, которое ищет только неотрицательные числа. Ноль разрешён.
Пример использования:

let regexp = /ваше регулярное выражение/g;
let str = "0 12 -5 123 -18";
alert( str.match(regexp) ); // 0, 12, 123 */

let regexp = /(?<![-\d])\d+/g;
let str = "0 12 -5 123 -18";

alert( str.match(regexp) ); // 0, 12, 123






// Вставьте после фрагмента

let str = '...<body style="...">...';
str = str.replace(/<body.*?>/s, '$&<h1>Hello</h1>');

console.log(str);
// ...<body style="..."><h1>Hello</h1>...
