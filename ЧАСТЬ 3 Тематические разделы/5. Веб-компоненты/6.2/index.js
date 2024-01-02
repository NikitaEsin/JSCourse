/* У нас уже есть элемент <time-formatted>, показывающий красиво отформатированное время.
Создайте элемент <live-timer>, показывающий текущее время:
Внутри он должен использовать <time-formatted>, не дублировать его функциональность.
Должен тикать (обновляться) каждую секунду.
На каждом тике должно генерироваться пользовательское событие с именем tick, 
содержащее текущую дату в event.detail */

// Создаем кастомный элемент <live-timer>
  class LiveTimer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      // Создаем элемент <time-formatted>
      this.timeFormatted = document.createElement('time-formatted');
      this.shadowRoot.appendChild(this.timeFormatted);

      // Запускаем таймер для обновления времени каждую секунду
      this.timerInterval = setInterval(() => this.updateTime(), 1000);
    }

    // Обновление времени и генерация пользовательского события
    updateTime() {
      const currentDate = new Date();
      const formattedTime = currentDate.toLocaleTimeString();
      this.timeFormatted.setAttribute('value', formattedTime);

      // Генерация события tick с текущей датой в деталях события
      const tickEvent = new CustomEvent('tick', { detail: { currentDate } });
      this.dispatchEvent(tickEvent);
    }

    // Вызывается при удалении элемента
    disconnectedCallback() {
      // Очищаем таймер при удалении элемента
      clearInterval(this.timerInterval);
    }
  }

  // Регистрируем кастомный элемент в качестве <live-timer>
  customElements.define('live-timer', LiveTimer);