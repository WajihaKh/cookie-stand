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

function CookieStand(name, minCustomers, maxCustomers, avgSales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.cookiesEachHour = [];
}

function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(
    Math.random() * (maxCustomers - minCustomers + 1) + minCustomers
  );
}

CookieStand.prototype.generateCookieSales = function () {
  for (let i = 0; i <= hours.length; i++) {
    // let thisHour = hours[0]
    let peopleThisHour = randomNumberGenerator(
      this.minCustomers,
      this.maxCustomers
    );
    let cookiesThisHour = Math.floor(peopleThisHour * this.avgSales);
    // console.log('cookiesThisHour', cookiesThisHour);
    this.cookiesEachHour.push(cookiesThisHour);
  }
  console.log(this.cookiesEachHour);
};

let seattle = new CookieStand('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
let lima = new CookieStand('Lima', 2, 16, 4.6);

// function randomNumberGenerator(minCustomers, maxCustomers) {

//   return Math.floor(
//     Math.random() * (maxCustomers - minCustomers + 1) + minCustomers
//   );
// }
// randomNumberGenerator();

// function generateCookieSales(storeObj) {

//   for (let i = 0; i <= hours.length; i++) {
//     // let thisHour = hours[0]
//     let peopleThisHour = randomNumberGenerator(storeObj.minCustomers, storeObj.maxCustomers);
//     let cookiesThisHour = Math.floor(peopleThisHour * storeObj.avgSales);
//     // console.log('cookiesThisHour', cookiesThisHour);
//     storeObj.cookiesEachHour.push(cookiesThisHour);
//   }
// }
seattle.generateCookieSales();
tokyo.generateCookieSales();
dubai.generateCookieSales();
paris.generateCookieSales();
lima.generateCookieSales();
// console.log('seattleObj', seattle);
CookieStand.prototype.render = function () {
  let divElemLocation = document.getElementById('sales-table');
  let storeName = document.createElement('h3');
  storeName.textContent = `${this.name}`;
  divElemLocation.appendChild(storeName);

  for (let i = 0; i < hours.length; i++) {
    let hourElem = document.createElement('li');
    hourElem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    console.log(hourElem);
    divElemLocation.appendChild(hourElem);
  }
};
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// function cookiesPerHour ()

// generateCookieSales(tokyo);
// console.log('tokyoObj',tokyo);
