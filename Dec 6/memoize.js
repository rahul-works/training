function expensiveOperation() {
  console.log('expensiveOperation function is called!');
  return 22;
}

// a simple memoized function to add something
const memoize = (func_name) => {
  let cache = {};
	return () => {
		if (func_name.name in cache) {
			return cache[func_name.name];
		}
		else {
			cache[func_name.name] = func_name();
			return cache[func_name.name];
		}
	}
}

const memoized = memoize(expensiveOperation); // <- memoize function
console.log(memoized());
console.log(memoized());