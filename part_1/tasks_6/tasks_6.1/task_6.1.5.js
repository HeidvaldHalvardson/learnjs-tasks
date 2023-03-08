// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printList = (list) => {
  const arr = []
  let obj = list

  do {
    arr.push(obj.value)
    obj = obj.next
  } while(obj)

  arr.forEach(item => console.log(item))
}

const printList = (list) => {
  if (list?.next) {
    printList(list.next)
  }

  console.log(list.value)
}
