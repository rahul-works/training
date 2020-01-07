function aperture(tuple_count, number_arr){
    if(tuple_count<=0){
        throw "Tuple count should be more than zero";
    } 

    if(number_arr == undefined && !Array.isArray(number_arr)){
        throw "Input Array either not defined or is not an array";   
    }

    if(tuple_count>number_arr.length){
        return [];
    }

    let n_tuple = [];
    for(let i = 0; i<number_arr.length-tuple_count+1; i++){
        n_tuple.push(number_arr.slice(i,i+tuple_count));
    }
    return n_tuple;
}

module.exports = aperture;

//console.log(aperture(2, [1, 2, 3, 4, 5])); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
// console.log(aperture(3, [1, 2, 3, 4, 5])); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
//console.log(aperture(7, [1, 2, 3, 4, 5])); //=> []
