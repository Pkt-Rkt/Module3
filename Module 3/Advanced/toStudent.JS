
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  
   
    this.toString = function() {
      return `${this.name}, ${this.age} years old, ${this.gender}`;
    };
  }
  
  
  function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender); // Inherit properties from Person
    this.cohort = cohort;
  
    
    this.toString = function() {
      return `${this.name}, ${this.age} years old, ${this.gender}, Cohort: ${this.cohort}`;
    };
  }
  
  const student1 = new Student('Daniel Hiscock', 23, 'male', '2023');
  const student2 = new Student('Jesper Tjarnfors', 32, 'male', '2023');
  
  
  console.log('student1: ' + student1.toString());
  console.log('student2: ' + student2.toString());
  