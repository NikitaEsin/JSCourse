//При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
/* 
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
} */
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}