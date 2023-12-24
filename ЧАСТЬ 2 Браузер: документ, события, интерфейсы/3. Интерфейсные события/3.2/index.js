let tooltip;

document.onmouseover = function(event) {
  // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
  // так что событие mouseover произойдёт сразу на дочернем элементе.

  let anchorElem = event.target.closest('[data-tooltip]');

  if (!anchorElem) return;

  // показываем подсказку и запоминаем её
  tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
}

document.onmouseout = function() {
  // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
  // (оно было где-то внутри и всплыло)
  // но в этом случае сразу же последует событие mouseover,
  // то есть подсказка исчезнет и потом снова покажется
  //
  // к счастью, этого не будет видно,
  // так как оба события происходят почти одновременно
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }

}

function showTooltip(anchorElem, html) {
  let tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  let coords = anchorElem.getBoundingClientRect();

  // позиционируем подсказку над центром элемента
  let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + anchorElem.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  return tooltipElem;
}