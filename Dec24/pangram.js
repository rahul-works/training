function createLetters() {
    var abc = "abcdefghijklmnopqrstuvwxyz"
    abc = abc.split("")
    return abc;
}

function isPangram(sentence){
    if(sentence!=undefined && sentence!=''){
        sentence = sentence.toLowerCase();
        all_letters = createLetters();
        let pangram_flag = true;
        all_letters.forEach(letter => {
            if(sentence.indexOf(letter)<0){
                pangram_flag = false;
            } 
        });
        return pangram_flag;
    } else {
        return false;
    }
}

module.exports = isPangram;
//console.log(pangram('the quick brown fox jumps over the lazy dog'));
//console.log(pangram('a quick of the enemy will jeopardize gunboats'));
