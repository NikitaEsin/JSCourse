document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const sliderHandle = document.getElementById('sliderHandle');

  let isDragging = false;

  sliderHandle.addEventListener('mousedown', () => {
    isDragging = true;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const newPosition = e.clientX - slider.getBoundingClientRect().left;
      const maxPosition = slider.clientWidth - sliderHandle.clientWidth;

      if (newPosition >= 0 && newPosition <= maxPosition) {
        sliderHandle.style.left = newPosition + 'px';
      } else if (newPosition < 0) {
        sliderHandle.style.left = '0px';
      } else {
        sliderHandle.style.left = maxPosition + 'px';
      }
    }
  });
});
