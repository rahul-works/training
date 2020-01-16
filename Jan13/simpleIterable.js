
const simpleIterable = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                if (step<5) {
                    return { value: ++step, done: false  };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
};

module.exports = simpleIterable;
