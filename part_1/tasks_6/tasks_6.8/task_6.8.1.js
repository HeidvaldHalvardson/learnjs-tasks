// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
// Сделайте два варианта решения.
//
// Используя setInterval.

const printNumbers = (from, to) => {
  let i = from

  const timerId = setInterval(() => {
    console.log(i)
    if (i === to) {
      clearInterval(timerId)
    }
    i++
  }, 1000)
}

// Используя рекурсивный setTimeout


const printNumbers = (from, to) => {
  let i = from

  let timerId = setTimeout(function func() {
    console.log(i)

    i++
    timerId = setTimeout(func, 1000)
    if (i > to) {
      clearTimeout(timerId)
    }
  }, 1000)
}

