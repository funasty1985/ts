let carMakers: string[] = [];
carMakers = carMakers.concat(['ford', 'toyota', 'chevy']);

const dates = [new Date(), new Date()];

let carsByMaker: string[][] = [];
carsByMaker = carsByMaker.concat(['f150'], ['corolla'], ['camaro']);

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
// as a list of method of string will be popped up when we put down return car.
// as ts knows car is a string
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(new Date());
