function substitutionCipher(string){
    if(string!=undefined && string!=''){
        var cipher = '';
        // [...string].forEach(c => console.log(c));
        var charcode = 0;

        [...string].forEach(c => {
            charcode = (c.charCodeAt());
            if((charcode>='A'.charCodeAt() && charcode<='Z'.charCodeAt())
             || (charcode>='a'.charCodeAt() && charcode<='z'.charCodeAt())){
                if(charcode%2==0){
                    charcode += 6;
                } else {
                    charcode += 4;
                }
                // Z = 90 -> A = 65 
                // z = 122 -> a = 97
                if(charcode>'Z'.charCodeAt() && charcode<'a'.charCodeAt()){
                    charcode = 'A'.charCodeAt() + charcode - 'Z'.charCodeAt()-1;
                } else if(charcode>'z'.charCodeAt()) {
                    charcode = 'a'.charCodeAt() + charcode - 'z'.charCodeAt()-1;
                }
            }
            cipher += String.fromCharCode(charcode);
        });
        return cipher;
    } else {
        return string;
    }
}
//console.log(substitute('!?.\n'));
//console.log(substitute('The Quick Brown Fox Jumped Over The Lazy Dog!'));
//console.log(substitute('Lorem ipsum dolor sit amet, consectetur adipiscing elit! Sed sit amet tortor id turpis pharetra ultricies eget ac ipsum.\nNam porttitor, ligula vitae tincidunt lacinia, lacus eros tempus neque, ac tincidunt nisi dui ac dui. Ut volutpat mi non velit varius, at scelerisque lorem efficitur. Etiam vitae molestie nibh. Integer quis arcu non tortor auctor viverra et at leo?\nSed lacinia nunc non est tincidunt, vel pellentesque magna finibus. Nullam sed lectus sed massa convallis posuere id in augue. Mauris pharetra felis erat, vitae condimentum nisi bibendum id. Vestibulum vitae neque a lectus gravida rhoncus lobortis id elit. Maecenas semper.'));
module.exports = substitutionCipher;
