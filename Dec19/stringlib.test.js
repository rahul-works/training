const stringlib = require('./stringlib');


describe('stringlib', () => {
      it('reverse of ab', () => {
        expect(stringlib.reverse('ab')).toEqual('ba');
      });
    
      it('reverse of foo 𝌆 bar', () => {
        expect(stringlib.reverse('foo 𝌆 bar')).toEqual('rab 𝌆 oof');
      });

      it('reverse of mañana mañana', () => {
        expect(stringlib.reverse('mañana mañana')).toEqual('anañam anañam');
      });

      it('equal of a, a', () => {
        expect(stringlib.equal('a', 'a')).toEqual(true);
      });

      it('equal of mañana, mañana', () => {
        expect(stringlib.equal('mañana', 'mañana')).toEqual(true);
      });
});