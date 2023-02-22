// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

const getMaxSubSum = (arr) => {
  let maxSum = 0
  let sum = 0
  for (let item of arr) {
    sum += item
    if (sum < 0) {
      sum = 0
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
