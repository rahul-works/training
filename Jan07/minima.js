function minima(count_number, number_arr){
    if(count_number<=0){
        throw "minima count should be more than zero";
    } 

    if(number_arr == undefined && !Array.isArray(number_arr)){
        throw "Input Array either not defined or is not an array";   
    }

    if(count_number>number_arr.length){
        return number_arr;
    }

    let minima_number = [];
    for(let i = 0; i<count_number; i++){
        let min = number_arr[0];
        number_arr.forEach(element => {
            if(min>element){
                min = element;
            }
        });
        const index = number_arr.indexOf(min);
        if (index > -1) {
            number_arr.splice(index, 1);
        }
        minima_number.push(min);
    }
    return minima_number;
}

module.exports = minima;

// console.log(minima(2, [5, 3, 4]));
// console.log(minima(3, [5, 3, 4, 6, 10, 1]));
