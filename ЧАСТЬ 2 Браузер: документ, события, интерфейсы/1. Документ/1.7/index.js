/*
У нас есть пустой DOM-элемент elem и строка text.
Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text */

/* Ответ: 1 и 3.
Результатом обеих команд будет добавление text «как текст» в elem.
Пример: 

<div id="elem1"></div>
<div id="elem2"></div>
<div id="elem3"></div>
<script>
  let text = '<b>текст</b>';

  elem1.append(document.createTextNode(text));
  elem2.innerHTML = text;
  elem3.textContent = text;
</script> */





/*
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>

<script>
  function clear(elem) { ваш код }

  clear(elem); // очищает список
</script> */

function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}





/*
В примере ниже вызов table.remove() удаляет таблицу из документа.
Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
Почему так происходит?

<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script> */

/* HTML в задаче некорректен. В этом всё дело.
Браузер исправил ошибку автоматически. 
Но внутри <table> не может быть текста: в соответствии со спецификацией допускаются только табличные теги. 
Поэтому браузер показывает "aaa" до <table>.
Теперь очевидно, что когда мы удаляем таблицу, текст остаётся.
На этот вопрос можно легко ответить, изучив DOM, используя инструменты браузера. 
Вы увидите "aaa" до элемента <table>.
Вообще, в стандарте HTML описано, как браузеру обрабатывать некорректный HTML, так что такое действие браузера является правильным. */






/*
Напишите интерфейс для создания списка.
Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.
Если пользователь вводит HTML-теги, они должны обрабатываться как текст. */

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt("Введите текст для элемента списка", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}





// Создайте дерево из объекта

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

createTree(container, data);






/*Есть дерево, организованное в виде вложенных списков ul/li.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте. */

let lis = document.getElementsByTagName('li');

for (let li of lis) {
  // получить количество всех <li> ниже этого <li>
  let descendantsCount = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  // добавить непосредственно к текстовому узлу (добавить к тексту)
  li.firstChild.data += ' [' + descendantsCount + ']';
}






/*
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');






/*
Вот таблица:

<table>
<thead>
  <tr>
    <th>Name</th><th>Surname</th><th>Age</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John</td><td>Smith</td><td>10</td>
  </tr>
  <tr>
    <td>Pete</td><td>Brown</td><td>15</td>
  </tr>
  <tr>
    <td>Ann</td><td>Lee</td><td>5</td>
  </tr>
  <tr>
    <td>...</td><td>...</td><td>...</td>
  </tr>
</tbody>
</table>

В ней может быть больше строк.
Напишите код для сортировки по столбцу "name". */

let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);