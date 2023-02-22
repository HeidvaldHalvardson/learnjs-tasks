// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const random = (min, max) => {
  return ((max - min) * Math.random()) + min
}
