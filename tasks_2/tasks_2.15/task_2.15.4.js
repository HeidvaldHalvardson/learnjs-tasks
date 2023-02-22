// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//
//   Запустить демо
//
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.


const x = +prompt('x:', 1)
const n = +prompt('n', 1)

const pow = (x, n) => {
  if (n < 1 || !Number.isInteger(n)) {
    alert('n must be integer or greater than 0')
    return NaN
  }

  let result = 1

  for (let i = 0; i < n; i++) {
    result *= x
  }

  return result
}


pow(x, n)
