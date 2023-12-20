//Создайте объект calculator (калькулятор) с тремя методами:
//read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.
/*
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let calculator = {
  read: function() {
    this.a = parseFloat(prompt("Введите первое значение:", ''));
    this.b = parseFloat(prompt("Введите второе значение:", ''));
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
