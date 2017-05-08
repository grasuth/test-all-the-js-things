describe('Built-in objects', function() {
    describe('Infinity', function() {
        
        it('is a number type', function() {
            expect(typeof Infinity).toEqual('number');
        });        
        
        it('is read only', function() {
            Infinity = 1;
            expect(Infinity).not.toEqual(1);
        });
        
        it('is the result of 1/0', function() {
            expect(1/0).toBe(Infinity);
        });
        
        it('is Number.POSITIVE_INFINITY', function() {
            expect(Infinity).toBe(Number.POSITIVE_INFINITY);
        });
        
        it('anything divided by it is 0', function() {
            expect(1/Infinity).toBe(0);
        });
    });
    
    describe('NaN', function() {
        it('is not equal to NaN', function() {
            expect(NaN).not.toEqual(NaN);
        });
    });
});