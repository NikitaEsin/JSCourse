// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("вася") == "Вася";



// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
  let lStr = str.toLowerCase();
  return lStr.includes("viagra") || lStr.includes("xxx");
}



/* 
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. */

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"



/* 
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.*/
function extractCurrencyValue(str) {
  return +str.slice(1);
}