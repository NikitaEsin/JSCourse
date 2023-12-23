// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// Здесь не важно, как мы скрываем текст.
// Также можно использовать style.display:
document.getElementById('hider').onclick = function() {
  document.getElementById('text').hidden = true;
}




// Создайте кнопку, которая будет скрывать себя по нажатию.

// <input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать">




/* 
В переменной button находится кнопка. Изначально на ней нет обработчиков.
Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
*/
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2); 

// Ответ: 1 и 2.

function handler() {
  alert(1);
}

button.addEventListener("click", handler);
button.removeEventListener("click", handler);

/* Первый обработчик сработает, потому что он не был удалён методом removeEventListener. 
Чтобы удалить обработчик, необходимо передать именно ту функцию, которая была назначена в качестве обработчика. 
Несмотря на то, что код идентичен, в removeEventListener передаётся новая, другая функция. */






// Передвиньте мяч по полю

field.onclick = function(event) {
  // координаты поля относительно окна браузера
  let fieldCoords = this.getBoundingClientRect();

  // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
  // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
  };

  // запрещаем пересекать верхнюю границу поля
  if (ballCoords.top < 0) ballCoords.top = 0;

  // запрещаем пересекать левую границу поля
  if (ballCoords.left < 0) ballCoords.left = 0;


  // запрещаем пересекать правую границу поля
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // запрещаем пересекать нижнюю границу поля
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}






// Карусель

/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};