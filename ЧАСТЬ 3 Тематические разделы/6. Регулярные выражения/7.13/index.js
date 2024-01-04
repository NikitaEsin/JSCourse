/* Найдите языки программирования
Существует много языков программирования, например, Java, JavaScript, PHP, C, C++.
Напишите регулярное выражение, которое найдёт их все в строке Java JavaScript PHP C++ C:
let regexp = /ваше регулярное выражение/флаги;
alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C */

let regexp = /\b(?:Java|JavaScript|PHP|C\+\+|C)\b/g;
alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C





// Найдите пары BB-кодов

let regexp = /\[(b|url|quote)].*?\[\/\1]/gs;
let str = `
  [b]привет![/b]
  [quote]
    [url]http://ya.ru[/url]
  [/quote]
`;

console.log(str.match(regexp)); // [b]привет![/b],[quote][url]http://ya.ru[/url][/quote]





// Найдите строки в кавычках

let regexp = /"((?:\\.|[^"\\])*)"/g;
let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

console.log(str.match(regexp));
// ["test me", "Скажи \\"Привет\\"!", "\\\\ \\"" ]





// Найдите весь тег

let regexp = /<style\b[^>]*>[\s\S]*?<\/style>/g;
let str = '<style> <styler> <style test="...">';

console.log(str.match(regexp));
// ["<style>", "<style test=\"...\">"]
