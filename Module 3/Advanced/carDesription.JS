let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
  };
  
  
  let newCar = { ...car, year: 2008, model: "Cayenne" };
  
  
  const boundDescription = car.description.bind(newCar);
  
  
  setTimeout(boundDescription, 200);
  