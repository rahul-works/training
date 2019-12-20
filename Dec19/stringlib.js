
function reverse(string) {
    var charArray = [];
    for (var i = 0; i < string.length; i++){
      if (i+1 < string.length){
          var value = string.charCodeAt(i);
          var nextValue = string.charCodeAt(i+1);
          if ((value >= 0xD800 && value <= 0xDBFF
                  && (nextValue & 0xFC00) == 0xDC00) // surrogate pair)
                    || (nextValue >= 0x0300 && nextValue <= 0x036F)){ // combining marks
              charArray.unshift(string.substring(i, i+2));
              i++; // skip the other half
              continue;
            }
        }
      // a plain old character.
      charArray.unshift(string[i]);
    }

  return charArray.join('');
}

function equal(string, comparewith) {
    //return string.localeCompare(comparewith);
    if(string.normalize() === comparewith.normalize()) return true;
    else return false;
    
    
}

module.exports = {
    reverse : reverse,
    equal : equal
  }
//console.log(reverse('ab'));
// 'ba'

//console.log(reverse('foo 𝌆 bar'));
// rab 𝌆 oof

//console.log(reverse('mañana mañana'));
// anañam anañam

//console.log(equal('a', 'a'));
// true

//console.log(equal('mañana', 'mañana'));
// true