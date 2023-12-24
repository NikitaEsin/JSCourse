/* Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.
P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.
P.P.S. Предотвратите стандартное для браузера выделение текста при кликах. */

ul.onclick = function(event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
}

// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function() {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for(let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}
