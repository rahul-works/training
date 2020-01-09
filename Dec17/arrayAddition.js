function arrayAddition(list_a, list_b) {
	if(!Array.isArray(list_a)) throw "parameters are not arrays";
	if(!Array.isArray(list_b)) throw "parameters are not arrays";
  
	if(!list_a.length) throw "one of the array is empty";
	if(!list_b.length) throw "one of the array is empty";
	
	var sum = [];
	if(list_a.length>=list_b.length){
		large_list = list_a;
		small_list = list_b;
	} else {
		large_list = list_b;
		small_list = list_a;
	}
	large_list.forEach(function (value, index) {
		if(typeof value != 'number') throw "non strictly numerical arrays";
		if(small_list[index] && typeof small_list[index] != 'number') throw "non strictly numerical arrays";
		if(small_list[index])
			sum[index] = value + small_list[index];
		else 
			sum[index] = value;
	});
  	return sum;
}
module.exports = arrayAddition;
//console.log(arrayAddition([-1, -2, -3, -4], [1, 2, 3, 4]));
//console.log(arrayAddition([0, 0, 0, 0], [1, 2, 3, 4]));
//console.log(arrayAddition([0, 1, 0, 4], [100, -200, 200, 400, 0, 99999]));
//console.log(arrayAddition([], [100, -200, 200, 400, 0, 99999]));
//console.log(arrayAddition('a', [100, -200, 200, 400, 0, 99999]));
//console.log(arrayAddition('a', 1));
//console.log(arrayAddition(['1', '2', '3', '4'], [2, 'b', 'c']));