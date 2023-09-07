const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');


const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

const birthDate = new Date('03-02-2000');
const ageInMilliseconds = today - birthDate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;

const years = Math.floor(ageInDays / 365);
const months = Math.floor((ageInDays % 365) / 30);
const days = Math.floor(ageInDays % 30);

console.log(`I am ${years} years, ${months} months, and ${days} days old`);


function daysInBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}

const date1 = new Date('MM-DD-YYYY');
const date2 = new Date('MM-DD-YYYY');

const daysBetween = daysInBetween(date1, date2);
console.log(`There are ${daysBetween} days between the two given dates.`);
