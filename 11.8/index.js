// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
/*
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
.catch(alert); // Error: 404
*/

async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)

/*
Функция loadJson теперь асинхронная.
Все .then внутри неё заменены на await.
Можно было бы просто вернуть промис во внешний код return response.json(), вот так:
if (response.status == 200) {
  return response.json(); // (3)
}
Тогда внешнему коду пришлось бы получать результат промиса самостоятельно (через .then или await). В нашем варианте это не обязательно.
Выброшенная из loadJson ошибка перехватывается с помощью .catch. Здесь нельзя использовать await loadJson(…), так как мы находимся не в теле функции async. */





class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }


  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();





/* 
Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await. */

// Это тот случай, когда понимание внутреннего устройства работы async/await очень кстати.
// Здесь нужно думать о вызове функции async, как о промисе. И просто воспользоваться .then:

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // покажет 10 через 1 секунду
  wait().then(result => alert(result));
}

f();