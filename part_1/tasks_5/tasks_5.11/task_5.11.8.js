// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

const formatDate = (date) => {
  const timePassed = new Date() - date
  if (timePassed < 1000) {
    return 'прямо сейчас'
  }

  if (timePassed / 1000 < 60) {
    return `${timePassed / 1000} сек. назад`
  }

  const minutesPassed = (timePassed / 60000).toFixed()

  if (minutesPassed < 60) {
    return `${minutesPassed} мин. назад`
  }

  const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
  const month = (date.getMonth() < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = date.getFullYear().toString().slice(-2)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${day}.${month}.${year} ${hour}:${minutes}`
}
