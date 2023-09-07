
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
  };
  
  
  const timeoutId1 = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
  const timeoutId2 = setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
  const timeoutId3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
  
  
  delayMsg('#4: Not delayed at all');
  
  
  const timeoutId5 = setTimeout(delayMsg, 20000, '#5: Delayed by 20 seconds');
  
  
  clearTimeout(timeoutId5);
  