describe('Global functions', function() {
   describe('eval()', function() {
        it('empty param returns undefined', function() {
            expect(eval('')).toBe(undefined);
        });
        it('evals expression and returns result', function() {
            expect(eval('1+2')).toEqual(3);
        });
   });
   
   describe('uneval()', function () {
       
       
   });
   
   describe('isFinite()', function() {
       it('shows that Infinity is not finite', function() {
           expect(isFinite(Infinity)).toBe(false);
           expect(isFinite(1)).toBe(true);
       });
       
       it('shows that 1 is finite', function() {
           expect(isFinite(1)).toBe(true);
       });
   });
   
   describe('isNaN', function() {
      it('returns true for NaN', function() {
          expect(isNaN(NaN)).toBe(true);
      }) 
       
   });
   
   describe('parseFloat', function() {
       
       
   });
   
   describe('parseInt', function() {
       
       
   });
   
   describe('decodeURI', function() {
       
   });
   
   describe('decodeURIComponent', function() {
       
       
   });
   
   describe('encodeURI', function() {
       
   });
   
   describe('encodeURIComponent', function() {
       
   });
   
   describe('escape', function() {
       
   });
   
   describe('unescape', function() {
       
       
   });
});