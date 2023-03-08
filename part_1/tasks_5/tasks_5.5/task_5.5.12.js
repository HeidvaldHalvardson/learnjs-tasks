// Пусть arr – массив строк.
//
//   Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//
//   Например:
//
// function unique(arr) {
//   /* ваш код */
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// alert( unique(strings) ); // кришна, харе, :-O

const unique = (arr) => {
  const uniqueArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i])
    }
  }
  return uniqueArr
}
