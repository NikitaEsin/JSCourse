function calculateResult() {
  // Получаем значения из полей ввода
  let initial = parseFloat(document.getElementById('initial').value);
  let interest = parseFloat(document.getElementById('interest').value) / 100;
  let years = parseInt(document.getElementById('years').value);

  // Рассчитываем результат
  let result = Math.round(initial * (1 + interest) ** years);

  // Обновляем отображение результата
  document.getElementById('result').innerText = result.toLocaleString('ru-RU') + ' рублей';
}