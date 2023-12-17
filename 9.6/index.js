// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}
A.prototype = B.prototype = {};
let a = new A();
alert( a instanceof B ); // true 

/*Да, действительно, выглядит странно.
Но instanceof не учитывает саму функцию при проверке, а только prototype, который проверяется на совпадения в прототипной цепочке.
И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.
Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор. */