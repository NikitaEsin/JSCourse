/*
Обычно при чтении несуществующего свойства из объекта возвращается undefined.
Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
Это может помочь обнаружить программные ошибки пораньше.
Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности. */

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Свойство не существует: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: Свойство не существует





/*
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.
Вот так:

let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего

Другими словами, array[-N] – это то же, что и array[array.length - N].
Создайте прокси, который реализовывал бы такое поведение.
Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {

});

alert( array[-1] ); // 3
alert( array[-2] ); // 2
// вся остальная функциональность массивов должна остаться без изменений */

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      // даже если обращение к элементу идёт как arr[1]
      // prop является строкой, нужно преобразовать её к числу
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});


alert(array[-1]); // 3
alert(array[-2]); // 2




/*
Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.
Вот как это должно работать:

function makeObservable(target) {
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John

Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.
При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом. */

// При вызове .observe(handler) нам нужно где-то сохранить обработчик, чтобы вызвать его позже. Можно хранить обработчики прямо в объекте, создав в нём для этого свой символьный ключ.
// Нам нужен прокси с ловушкой set, чтобы вызывать обработчики при изменении свойств.

let handlers = Symbol('handlers');

function makeObservable(target) {
  // 1. Создадим хранилище обработчиков
  target[handlers] = [];

  // положим туда функции-обработчики для вызовов в будущем
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  // 2. Создадим прокси для реакции на изменения
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
      if (success) { // если не произошло ошибки при записи свойства
        // вызовем обработчики
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";
