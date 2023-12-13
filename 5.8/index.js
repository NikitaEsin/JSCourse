/*
Есть массив сообщений:
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.*/

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// Создаем объект для отслеживания прочитанных сообщений
let readStatus = new WeakMap();

// Функция для пометки сообщения как прочитанного
function markAsRead(message) {
  readStatus.set(message, true);
}

// Функция для проверки, было ли сообщение прочитано
function isRead(message) {
  return readStatus.get(message) || false;
}

// Пример использования
markAsRead(messages[0]); // Помечаем первое сообщение как прочитанное

console.log(isRead(messages[0])); // Вернет true
console.log(isRead(messages[1])); // Вернет false

// Предположим, что сообщение было удалено из массива messages
// Здесь слабая ссылка автоматически удалит соответствующую запись в readStatus
messages.splice(0, 1);

console.log(isRead(messages[0])); // Вернет undefined, так как сообщения больше нет в массиве




/* 
Есть массив сообщений такой же, как и в предыдущем задании.
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.*/

/* 
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// Создаем объект для отслеживания времени прочтения сообщений
let readTime = new WeakMap();

// Функция для пометки времени прочтения сообщения
function markAsRead(message) {
  readTime.set(message, new Date());
}

// Функция для получения времени прочтения сообщения
function getReadTime(message) {
  return readTime.get(message);
} */
