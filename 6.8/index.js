/* Вывод каждую секунду
 function printNumbers(from, to) {
   let current = from;
   let timerId = setInterval(function() {
     alert(current);
     if (current == to) {
       clearInterval(timerId);
     }
     current++;
   }, 1000);
 } */

function printNumbers(from, to) {
  let current = from;
  setTimeout(function run() {
    alert(current);
    if (current < to) {
      setTimeout(run, 1000);
    }
    current++;
  }, 1000);
}




// Что покажет setTimeout?
let i = 0;

setTimeout(() => alert(i), 100); // Run after the loop

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}