// Какое здесь будет совпадение?
"123 456".match(/\d+? \d+?/g)  // ? 

// Ответ: 123 4 



/* Найти все HTML-комментарии в тексте:

let regexp = /ваше регулярное выражение/g;
let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->' */

let regexp = /<!--[\s\S]*?-->/g;
let str = `... <!-- My -- comment
 test --> ..  <!----> ..`;

console.log(str.match(regexp));




// Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.

let regexp = /<[^<>]+>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'