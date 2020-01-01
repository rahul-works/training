const balancedBraces = require('./balancedBraces');

describe('balancedBraces', () => {
    it('Is balancedBraces', () => {
        expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
        expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);
    });
});