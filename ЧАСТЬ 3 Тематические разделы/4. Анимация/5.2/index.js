let ended = false;

flyjet.onclick = function() {
  flyjet.addEventListener('transitionend', function() {
    if (!ended) {
      ended = true;
      alert('Анимация закончилась!');
    }
  });
  flyjet.classList.add('growing');
}




/*
Напишите функцию showCircle(cx, cy, radius), которая будет рисовать постепенно растущий круг.
cx,cy – координаты центра круга относительно окна браузера, radius – радиус круга. 
В исходном коде уже указаны правильные CSS-стили круга, 
таким образам задача заключается в том, чтобы сделать правильную анимацию.*/

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  }, 0);
}






function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Привет, мир!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }, 0);
}