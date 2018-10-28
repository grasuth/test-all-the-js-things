function a() {
   return this;
} 

describe('Fundamental objects', function(){
   describe('Object', function() {
      var that = this;
      var thing = {thing: 1}; 
      
      it('this is from closure', function() {
         expect(this).toEqual(that);
      });
      
      it('this can be set with call', function() {
         expect(a.call(thing)).toEqual(thing);
      });
       
   });
   
   describe('Function', function() {
       
       
   });
   
   describe('Boolean', function() {
       
       
   });
   
   describe('Symbol', function() {
       
       
   });
   
   describe('Error', function() {
       
   });
   
   describe('EvalError', function() {
       
   });
   
   describe('InternalError', function() {
       
   });
   
   describe('RangeError', function() {
       
   });
   
   describe('ReferenceError', function() {
       
   });
   
   describe('TypeError', function() {
       
   });
   
   describe('URIError', function() {
       
   });
});