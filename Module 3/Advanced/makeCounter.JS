function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    let increment = incrementBy || 1;
  
    
    return function () {
      currentCount += increment;
      console.log(currentCount);
    };
  }
  
  let counter1 = makeCounter(5, 2);
  counter1();
  counter1();
  
  let counter2 = makeCounter();
  counter2();
  counter2();