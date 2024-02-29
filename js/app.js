let allNames = [];
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
let totalsPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totalSales = 0;

// constructor function for sams cookie stand
function CookieStand(name, minCustomers, maxCustomers, avgSales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.cookiesEachHour = [];
  this.totalSales = 0;
  this.hourlySales = [];
  this.generateCookieSales();
  allNames.push(this);
}

CookieStand.prototype.generateCookieSales = function () {

  for (let i = 0; i < hours.length; i++) {
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

CookieStand.prototype.render = function () {
  let body = document.getElementById('sales-body');

  let row = document.createElement('tr');
  body.appendChild(row);

  let name = document.createElement('td');
  name.textContent = this.name;
  row.appendChild(name);

  let total = document.createElement('td');
  total.textContent = this.totalSales;
  row.appendChild(total);

  for (let i = 0; i < this.cookiesEachHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesEachHour[i];
    row.appendChild(td);

    totalsPerHour[i] += this.cookiesEachHour[i];
  }



};

// let total = document.createElement('td');
// total.textContent = this.hourlySales[i];
// row.appendChild(total);

//   let tableElemLocation = document.getElementById('sales-table');
//   let storeName = document.createElement('td');
//   storeName.textContent = `${this.name}`;
//   tableElemLocation.appendChild(storeName);
// };

function createTableHeader() {
  let header = document.getElementById('sales-header');
  let row = document.createElement('tr');
  console.log(row);
  header.appendChild(row);

  let name = document.createElement('th');
  name.textContent = 'Name';
  row.appendChild(name);

  //add all the hours
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    row.appendChild(th);

  }
  let total = document.createElement('th');
  total.textContent = 'Daily Totals';
  row.appendChild(total);
}
function createTableFooter() {
  let footer = document.getElementById('sales-footer');

  let row = document.createElement('tr');
  footer.appendChild(row);

  let totalLabel = document.createElement('td');
  totalLabel.textContent = 'Total by the hour';
  row.appendChild(totalLabel);

  for (let i = 0; i < totalsPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = totalsPerHour[i];
    row.appendChild(td);

    totalSales += totalsPerHour[i];
  }
  let mainTotal = document.createElement('td');
  mainTotal.textContent = totalSales;
  row.appendChild(mainTotal);
}

// generates a random number
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(
    Math.random() * (maxCustomers - minCustomers + 1) + minCustomers
  );
}

// function generateCookieSales(storeObj) {

//   for (let i = 0; i <= hours.length; i++) {
//     // let thisHour = hours[0]
//     let peopleThisHour = randomNumberGenerator(storeObj.minCustomers, storeObj.maxCustomers);
//     let cookiesThisHour = Math.floor(peopleThisHour * storeObj.avgSales);
//     // console.log('cookiesThisHour', cookiesThisHour);
//     storeObj.cookiesEachHour.push(cookiesThisHour);
//   }
// }
// generateCookieSales();

// displays results for each location
// seattle.generateCookieSales();
// tokyo.generateCookieSales();
// dubai.generateCookieSales();
// paris.generateCookieSales();
// lima.generateCookieSales();

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

function start() {
  console.log('Starting process');

  // instances for each cookiestand
  new CookieStand('Seattle', 23, 65, 6.3);
  new CookieStand('Tokyo', 3, 24, 1.2);
  new CookieStand('Dubai', 11, 38, 3.7);
  new CookieStand('Paris', 20, 38, 2.3);
  new CookieStand('Lima', 2, 16, 4.6);

  console.log('Created the stores:', allNames);
  createTableHeader();

  for (let i = 0; i < allNames.length; i++) {
    allNames[i].render();
    console.log(allNames);
  }

  createTableFooter();
}
start();
