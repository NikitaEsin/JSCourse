// Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, 
// она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).

function populate() {
  while(true) {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
    document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
  }
}

window.addEventListener('scroll', populate);

populate(); // инициализация документа






/*
Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.
Она должна работать следующим образом:
Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. Если страница прокручивается назад, стрелка исчезает.
Когда нажимается стрелка, страница прокручивается вверх. */
/*
<div id="matrix">
<script>
  for (let i = 0; i < 2000; i++) document.writeln(i)
</script>
</div>

<div id="arrowTop" hidden></div>

<script>

arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
</script> */