function isomorphic(array_str){
    if(array_str!=undefined && array_str[0]!=undefined&& array_str[1]!=undefined){
        if(array_str[0].length!=array_str[1].length) return false;
        
        var map_char = {};
        for(var i=0; i<array_str[0].length; i++){
            if(!map_char[array_str[0][i]]){
                map_char[array_str[0][i]] = array_str[1][i];
            } else if(map_char[array_str[0][i]]!==array_str[1][i]){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

module.exports = isomorphic;
// console.log(isomorphic(['egg', 'add']));
// console.log(isomorphic(['foo', 'bar']));
// console.log(isomorphic(['asdfghjkl', 'qwertyuio']));
// console.log(isomorphic(['asdfgsjkl', 'qwertyuio']));
// console.log(isomorphic(['better', 'fetter']));