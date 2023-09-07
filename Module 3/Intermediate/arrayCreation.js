function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
  }
  
  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
  const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
  const carBrands = ['Porsche', 'Audi', 'Lamborghini', 'Ford', 'Aston Martin', 'Mazda', 'Bently'];
  console.log(unique(colours));
  console.log(unique(testScores));
  console.log(unique(carBrands));
