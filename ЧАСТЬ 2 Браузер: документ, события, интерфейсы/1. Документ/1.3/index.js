/*
Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Напишите код, как получить…
элемент <div>?, <ul>?, второй <li> (с именем Пит)? */

// Есть несколько способов для получения элементов, например:
// DOM-узел элемента <div>:

document.body.firstElementChild
// или
document.body.children[0]
// или (первый узел пробел, поэтому выбираем второй)
document.body.childNodes[1]

// DOM-узел элемента <ul>:
document.body.lastElementChild
// или
document.body.children[1]

// Второй <li> (с именем Пит):
// получаем <ul>, и его последнего ребёнка
document.body.lastElementChild.lastElementChild





/*
Если elem – произвольный узел DOM-элемента…
Правда, что elem.lastChild.nextSibling всегда равен null?
Правда, что elem.children[0].previousSibling всегда равен null ? */

/*
Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.
Обратите внимание, что в обоих случаях, если детей нет, то будет ошибка. При этом elem.lastChild равен null, а значит – ошибка при попытке доступа к elem.lastChild.nextSibling. */




/*Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red'; */

const table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
}