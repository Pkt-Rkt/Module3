
Function.prototype.delay = function(ms) {
    const originalFunction = this;
  
    
    const delayedFunction = function(...args) {
      setTimeout(() => {
        originalFunction.apply(this, args);
      }, ms);
    };
  
    return delayedFunction;
  };
  

  function multiply(a, b, c, d) {
    console.log(a * b * c * d);
  }
  
 
  multiply.delay(1000)(9, 3, 3, -5);
  