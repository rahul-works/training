function alternatingCharacters(string_arr){
    if(string_arr==undefined){
        throw "Input Array of String is undefined";
    } 

    if(!Array.isArray(string_arr)){
        throw "Input Array of String is not an array";   
    }

    let alternate_count = [];
    string_arr.forEach(string => {
        let last_char = '';
        let count = 0;
        for(let i = 0; i<string.length; i++){
            if(last_char!='' && last_char==string[i]){
                count++;
            }
            last_char = string[i];
        }
        alternate_count.push(count);
    });
    return alternate_count;
}

module.exports = alternatingCharacters;
//console.log(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB']));
//console.log(alternatingCharacters(['ABBABBAA']));
