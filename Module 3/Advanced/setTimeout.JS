function randomDelay() {
    const delayTime = Math.floor(Math.random() * 20 + 1) * 1000;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delayTime % 2 === 0) {
          resolve(`Delay of ${delayTime / 1000} seconds was successful.`);
        } else {
          reject(`Delay of ${delayTime / 1000} seconds failed.`);
        }
      }, delayTime);
    });
  }
  
  randomDelay()
    .then(message => console.log('Success:', message))
    .catch(error => console.error('Error:', error));
  