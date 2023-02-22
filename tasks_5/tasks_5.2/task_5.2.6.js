// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//
//   Любое число из интервала min..max должно появляться с одинаковой вероятностью.

const randomInteger = (min, max) => {
  return Math.floor(((max - min + 1) * Math.random()) + min)
}
