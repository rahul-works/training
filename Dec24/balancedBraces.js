function balancedBraces(expression){
    if(expression!=undefined && expression!=''){
        let stack = [];
        let map = {
            '(': ')',
            '[': ']',
            '{': '}'
        };

        [...expression].forEach(char => {
            if(char==='(' || char==='{' || char==='['){
                stack.push(char);
            } else if(char===')' || char==='}' || char===']'){
                let last_char = stack.pop();
                if(char !== map[last_char]){
                    return false;
                }
            }
        });
        if(stack.length!==0){
            return false;
        }
        return true;
    } else {
        return false;
    }
}

module.exports = balancedBraces;
// console.log(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}'));
// console.log(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}'));
