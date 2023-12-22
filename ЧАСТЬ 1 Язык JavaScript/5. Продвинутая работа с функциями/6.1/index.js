// Вычислить сумму чисел до данного
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// function sumTo(n) {
//     if (n === 1) return 1;
//     return n + sumTo(n - 1)
// }

function sumTo(n) {
  return (n * (n + 1)) / 2;
}




// Вычислить факториал
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}




// Числа Фибоначчи
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757




// Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function printList(list) {
//   alert(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }

function printList(list) {
  while (list) {
    alert(list.value);
    list = list.next;
  }
}




// Вывод односвязного списка в обратном порядке
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}

function printReverseList(list) {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}