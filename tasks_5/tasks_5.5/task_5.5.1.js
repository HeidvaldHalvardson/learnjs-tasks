// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
//   Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

const camelize = (str) => {
  let arr = str.split('-')
  str = arr.map((item, index) => {
    if (index > 0) {
      return item = item[0].toUpperCase() + item.slice(1)
    }
    return item
  }).join('')
  return str
}
