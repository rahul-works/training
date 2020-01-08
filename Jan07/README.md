[Minima]
Given an array return the first k elements of the sorted array. Try to make your solution as efficient as possible.

[Curry]
Here's the basic usage of the function that you'll be creating:

    function add(a, b) {
    	return a + b;
    }
    
    const curriedAdd = curry(add); // <- this is the curry function
    console.log( curriedAdd(1)(2) ); // 3
Reference:
https://javascript.info/currying-partials