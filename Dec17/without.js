function without(delete_list, from_list) {
  delete_list.forEach(function (item) {
	  while (from_list.indexOf(item) !== -1 && Object.is(from_list[from_list.indexOf(item)],item)) from_list.splice(from_list.indexOf(item), 1);
  });
  return from_list;
}
module.exports = without;
// console.log(without([1, 2], [1, 2, 1, 4, 5]));
// console.log(without([0], [-0]).length);
// console.log(without([1, 2], [1, 2, 1, 3, 4]));