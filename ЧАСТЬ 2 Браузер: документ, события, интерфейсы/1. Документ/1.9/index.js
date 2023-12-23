/* Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. 
А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
Напишите соответствующее выражение для произвольного элемента elem.
P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0. */

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;





/* Напишите код, который возвращает ширину стандартной полосы прокрутки.
Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки 
(так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.
P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого. */

function getScrollbarWidth() {
  // Создаем элемент с прокруткой
  let scrollDiv = document.createElement("div");
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  document.body.appendChild(scrollDiv);

  // Вычисляем ширину полосы прокрутки
  let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Удаляем временный элемент
  document.body.removeChild(scrollDiv);

  return scrollbarWidth + "px";
}

// Пример использования
let scrollbarWidth = getScrollbarWidth();
console.log("Ширина полосы прокрутки: " + scrollbarWidth);






// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
/*
Возвращаемые значения:
getComputedStyle(elem).width: Возвращает ширину элемента как строку с указанием единиц измерения (например, "100px").
elem.clientWidth: Возвращает ширину элемента в виде числа (integer), 
представляющего фактическую ширину элемента без учета отступов, границ и полосы прокрутки.

Учет внутреннего пространства:
getComputedStyle(elem).width: Включает в себя внутреннее пространство элемента, 
так что если у элемента есть внутренний отступ (padding), это отражается в возвращаемом значении.
elem.clientWidth: Игнорирует внутренний отступ (padding) элемента, 
возвращая только ширину содержимого.

Внешние стили:
getComputedStyle(elem).width: Учитывает все стили, 
включая внешние, определенные в CSS-правилах.
elem.clientWidth: Учитывает только внутренние размеры, игнорируя внешние стили.

Различие в вычислениях:
getComputedStyle(elem).width: Может включать вычисленные значения, 
унаследованные от родительских элементов.
elem.clientWidth: Вычисляет ширину на основе реальных размеров элемента в текущем контексте. */