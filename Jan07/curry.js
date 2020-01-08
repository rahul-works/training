function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  }

module.exports = curry;

// function add(a, b) {
// 	return a + b;
// }
// const curriedAdd = curry(add); // <- this is the curry function
// console.log(curriedAdd(1)(2) ); // 3
