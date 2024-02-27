let hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];


let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  cookiesEachHour: [],
};
let tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  cookiesEachHour: []
};
let dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgSales: 3.7,
  cookiesEachHour: []
};
let paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgSales: 2.3,
  cookiesEachHour: []
};
let lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgSales: 4.6,
  cookiesEachHour: []
};

function randomNumberGenerator(minCustomers, maxCustomers) {

  return Math.floor(
    Math.random() * (maxCustomers - minCustomers + 1) + minCustomers
  );
}
randomNumberGenerator();

function generateCookieSales(storeObj) {

  for (let i = 0; i <= hours.length; i++) {
    // let thisHour = hours[0]
    let peopleThisHour = randomNumberGenerator(storeObj.minCustomers, storeObj.maxCustomers);
    let cookiesThisHour = Math.floor(peopleThisHour * storeObj.avgSales);
    // console.log('cookiesThisHour', cookiesThisHour);
    storeObj.cookiesEachHour.push(cookiesThisHour);
  }
}
generateCookieSales(seattle);
console.log('seattleObj', seattle);

let divElemLocation = document.getElementById('sales-table');
let storeName = document.createElement('h3');
storeName.textContent = 'Seattle';
divElemLocation.appendChild(storeName);

let hourElem = document.createElement('li');
hourElem.textContent = `6am: ${seattle.cookiesEachHour[0]} cookies`;
divElemLocation.appendChild(hourElem);





generateCookieSales(tokyo);
console.log('tokyoObj',tokyo);
