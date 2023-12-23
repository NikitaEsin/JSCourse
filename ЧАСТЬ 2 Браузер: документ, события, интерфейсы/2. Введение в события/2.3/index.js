/* 
Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
В результате должно работать вот так:
P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего. */

container.onclick = function(event) {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
};




/*
Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
Требования:
Использовать только один обработчик событий (применить делегирование)
Клик вне текста заголовка (на пустом месте) ничего делать не должен. */

/*
Решение состоит из двух шагов:
Оборачиваем текст каждого заголовка дерева в элемент <span>. Затем мы можем добавить стили CSS на :hover и обрабатывать клики только на тексте, т.к. ширина элемента <span> в точности совпадает с шириной текста.
Устанавливаем обработчик на корневой узел дерева tree и ловим клики на элементах <span>, содержащих заголовки. */
// поместить все текстовые узлы в элемент <span>
// он занимает только то место, которое необходимо для текста
for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

//  ловим клики на всём дереве
tree.onclick = function(event) {

  if (event.target.tagName != 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return; // нет детей

  childrenContainer.hidden = !childrenContainer.hidden;
}





// Поведение "подсказка"

const tooltip = document.getElementById("tooltip");
document.addEventListener("mouseover", (event) => {
  if (event.target.dataset.tooltip) {
    tooltip.innerHTML = event.target.dataset.tooltip;
    tooltip.style.left = event.clientX + "px";
    tooltip.style.top = event.clientY + "px";
    tooltip.hidden = false;
  }
});
document.addEventListener("mouseout", (event) => {
  if (event.target.dataset.tooltip) {
    tooltip.hidden = true;
  }
});