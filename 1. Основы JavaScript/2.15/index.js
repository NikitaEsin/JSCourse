/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор || */
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
} */

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}


// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
function pow(x, n) {
 if (n < 1) {
    alert("Степень должна быть натуральным числом (1 и выше)");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("Введите основание (x):", "");
let n = prompt("Введите степень (n):", "");

x = parseFloat(x);
n = parseInt(n);

if (isNaN(x) || isNaN(n)) {
  alert("Пожалуйста, введите корректные числа");
} else {
  let result = pow(x, n);
  alert(`${x} в степени ${n} равно ${result}`);
}