var count=0;
const counter = () => {
    return () => {
          return ++count;
      }
}

const newCounter = counter();
module.exports = newCounter;
