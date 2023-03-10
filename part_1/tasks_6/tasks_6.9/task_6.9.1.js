// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
//
//   Каждый вызов должен сохраняться как массив аргументов.
//
//   Например:
//
// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }
//
// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

const spy = (func) => {

  function f(...args) {
    f.calls.push(args)
    const result = func.call(this, ...args)
    return result
  }

  f.calls = []

  return f
}
