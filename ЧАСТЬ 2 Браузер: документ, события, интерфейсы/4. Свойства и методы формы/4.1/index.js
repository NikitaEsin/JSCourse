/*
Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>

Используя JavaScript:
Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным. */

// Получаем элемент <select>
let genresSelect = document.getElementById("genres");

// Выводим значение и текст выбранного пункта
console.log("Значение выбранного пункта: " + genresSelect.value);
console.log("Текст выбранного пункта: " + genresSelect.options[genresSelect.selectedIndex].text);

// Добавляем новый пункт
let classicOption = document.createElement("option");
classicOption.value = "classic";
classicOption.text = "Классика";

// Добавляем пункт в конец списка
genresSelect.add(classicOption);

// Делаем новый пункт выбранным
classicOption.selected = true;