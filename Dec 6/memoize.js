function expensiveOperation() {
  console.log('expensiveOperation function is called!');
  return 22;
}

// a simple memoize function to add function
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