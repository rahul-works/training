function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4, [5, 6]]]));