function currencyAddition(float1, float2) {
    return parseFloat((float1 + float2).toFixed(2));
  }
  
  function currencyOperation(float1, float2, operation) {
    const numDecimals = 2;
    switch (operation) {
      case '+':
        return parseFloat((float1 + float2).toFixed(numDecimals));
      case '-':
        return parseFloat((float1 - float2).toFixed(numDecimals));
      case '*':
        return parseFloat((float1 * float2).toFixed(numDecimals));
      case '/':
        return parseFloat((float1 / float2).toFixed(numDecimals));
      default:
        throw new Error("Invalid operation");
    }
  }
  
  function currencyOperationWithDecimals(float1, float2, operation, numDecimals = 2) {
    const factor = Math.pow(10, numDecimals);
    switch (operation) {
      case '+':
        return parseFloat(((float1 + float2) * factor / factor).toFixed(numDecimals));
      case '-':
        return parseFloat(((float1 - float2) * factor / factor).toFixed(numDecimals));
      case '*':
        return parseFloat(((float1 * float2) * factor / (factor * factor)).toFixed(numDecimals));
      case '/':
        return parseFloat(((float1 / float2) * factor / (factor / factor)).toFixed(numDecimals));
      default:
        throw new Error("Invalid operation");
    }
  }
  
  console.log(currencyAddition(0.20, 0.10));
  console.log(currencyOperation(0.20, 0.10, '+'));
  console.log(currencyOperation(0.20, 0.10, '-'));
  console.log(currencyOperation(0.20, 0.10, '*'));
  console.log(currencyOperation(0.20, 0.10, '/'));
  
  console.log(currencyOperationWithDecimals(0.1, 0.2, '+', 1));
  console.log(currencyOperationWithDecimals(0.1, 0.2, '+', 2));
  console.log(currencyOperationWithDecimals(0.1, 0.2, '+', 3));
  