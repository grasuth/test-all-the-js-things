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
   
   describe('isNaN()', function() {
      it('returns true for NaN', function() {
          expect(isNaN(NaN)).toBe(true);
          expect(isNaN(Number.Nan)).toBe(true);
      }); 
      
      it('returns false for numbers', function() {
          expect(isNaN(1)).toBe(false);
          expect(isNaN(1.234)).toBe(false);
      });
      
      it('returns false for infinity', function() {
          expect(isNaN(Infinity)).toBe(false);
          
      });
   });
   
   describe('parseFloat()', function() {
      it('parses float strings', function() {
         expect(parseFloat('3.14')).toEqual(3.14);
      });
      
      it('parses scientific notation', function() {
         expect(parseFloat('314e-2')).toEqual(3.14);     
      });
      
      it('parses up to non-digit chars', function() {
         expect(parseFloat('3.15xxxyyy')).toEqual(3.15);
      });
      
      it('non-digits give NaN result', function() {
         expect(isNaN(parseFloat('ABC'))).toBe(true);
      });
       
       
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