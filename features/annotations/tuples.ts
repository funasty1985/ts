const drink = {
  color: 'brown',
  carbonated: true,
  suger: 40
};
// Type alias
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];
const sprinte: Drink = ['clear', true, 40];

// tuple vs object
const carSpecs: [number, number] = [400, 3354];

// object is more clear
const carStats = {
  horsepower: 400,
  weight: 3354
};
