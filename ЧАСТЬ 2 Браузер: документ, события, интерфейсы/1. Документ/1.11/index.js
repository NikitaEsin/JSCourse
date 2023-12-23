/*Создайте функцию positionAt(anchor, position, elem), 
которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
Аргумент position – строка с одним из 3 значений:
"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), 
которая уже есть в исходном коде задачи. 
Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor. */
/**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */
function positionAt(anchor, position, elem) {

let anchorCoords = anchor.getBoundingClientRect();

switch (position) {
  case "top":
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    break;

  case "right":
    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
    break;

  case "bottom":
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
    break;
}

}
/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
*/
function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// проверка
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");






/* Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
Это предотвратит расхождение элементов при прокрутке страницы.
Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">. */
/*
<style>
    body {
      height: 2000px;
      margin: 0; // Исключаем отступы у body 
    }

    #field {
      width: 400px;
      height: 300px;
      border: 2px solid #000;
      position: relative;
    }

    #ball {
      width: 20px; // Размер мяча, может быть любым 
      height: 20px;
      background-color: red;
      border-radius: 50%;
      position: absolute; // Изменено с fixed на absolute 
    }
  </style>
</head>
<body>

<div id="field">
  <div id="ball"></div>
</div>

<script>
  // JavaScript код из предыдущего ответа
  var ball = document.getElementById('ball');
  var field = document.getElementById('field');

  var fieldCenterX = field.offsetWidth / 2;
  var fieldCenterY = field.offsetHeight / 2;

  var ballLeft = fieldCenterX - ball.offsetWidth / 2;
  var ballTop = fieldCenterY - ball.offsetHeight / 2;

  ball.style.left = ballLeft + 'px';
  ball.style.top = ballTop + 'px';
</script>

</body> */






function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}


let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");