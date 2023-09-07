function printFibonacci(limit) {
    let current = 1;
    let previous = 0;
    let count = 0;
  
    const intervalId = setInterval(() => {
      console.log(current);
      count++;
  
      if (count === limit) {
        clearInterval(intervalId); 
      }
  
      
      const next = current + previous;
  
      
      previous = current;
      current = next;
    }, 100);
  }
  
  printFibonacci(10);