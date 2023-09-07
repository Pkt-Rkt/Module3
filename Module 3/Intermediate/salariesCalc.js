let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
  };
  
  function sumSalaries(salaries) {
    let totalSalary = 0;
    for (let person in salaries) {
      totalSalary += salaries[person];
    }
    return totalSalary;
  }
  
  const total = sumSalaries(salaries);
  console.log(`Total of all salaries: $${total}`);
  
  function topEarner(salaries) {
    let topSalary = 0;
    let topEarnerName = null;
  
    for (let person in salaries) {
      if (salaries[person] > topSalary) {
        topSalary = salaries[person];
        topEarnerName = person;
      }
    }
    
    return topEarnerName;
  }
  
  const topEarn = topEarner(salaries);
  console.log(`The top earner is ${topEarn} with a salary of $${salaries[topEarn]}`);
  