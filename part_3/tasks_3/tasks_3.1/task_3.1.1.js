// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// В песочнице есть тестовый пример.

// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

async function getUsers(names) {
  const arr = []
  for (let name of names) {
    let item = fetch(`https://api.github.com/users/${name}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return null
        }
      })
    arr.push(item)
  }

  return Promise.all(arr)
}
