// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

Function.prototype.defer = function (ms) {
  setTimeout(() => {
    this()
  }, ms)
}

// После этого должен работать такой код:

function f() {
  console.log("Hello!");
}

f.defer(2000); // выведет "Hello!" через 1 секунду

