  
const cacheFunction = (func_name) => {
    let cache = {};
    return () => {
        if (func_name.name in cache) {
            return cache[func_name.name];
        }
        else {
            cache[func_name.name] = func_name(x);
            return cache[func_name.name];
        }
    }
}

// const foo = x => (x * x);
// const cachedFunction = cacheFunction(foo);
    
module.exports = cacheFunction;
// console.log(cachedFunction(5));
// console.log(typeof cacheFunction());

// console.log(Object.getPrototypeOf(Array));
// console.log(Object.getPrototypeOf(Function));
// console.log(Object.getPrototypeOf(Object));