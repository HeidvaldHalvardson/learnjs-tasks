// Напишите код, который выводит все простые числа из интервала от 2 до n.
//
// Для n = 10 результат должен быть 2,3,5,7.
//
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

next:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue next
    }
  }
  console.log(i)
}
