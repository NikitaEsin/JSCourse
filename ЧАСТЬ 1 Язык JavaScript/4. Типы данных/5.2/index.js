/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
P.S. Есть «подводный камень» при работе с типами. */

let firstNumber = prompt('Введите первое число:', 0);
let secondNumber = prompt('Введите второе число:', 0);
let sum = +firstNumber + +secondNumber;

alert('Сумма введенных чисел: ' + sum);



/*
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);


/* Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
} */

//Потому что i никогда не станет равным 10.
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}