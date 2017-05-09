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
    
    describe('undefined', function() {
       var a;
       
       it('is the value of a var not assigned to', function() {
            expect(a).toBe(undefined);
       });
       
       it('typeof unassigned var', function() {
            expect(typeof a).toBe('undefined');
            expect(typeof undefined).toBe('undefined');
       });
       
       it('equals void 0', function () {
            expect(void 0).toBe(undefined); 
       });
    });
    
    describe('null', function() {
        it('has a type of object', function () {
            expect(typeof null).toBe('object');
        });
        it('is equal to undefined', function() {
            expect(null).toEqual(undefined);
        });
        it('is not *exactly* equal to undefined', function() {
            expect(null).not.toBe(undefined);
        });
        it('is not true', function() {
            expect(!null).toBe(true);
        });
        it('null exactly equals null', function() {
            expect(null).toBe(null);
        });
    });
});