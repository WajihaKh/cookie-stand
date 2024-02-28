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

// constructor function for sams cookie stand
function CookieStand(name, minCustomers, maxCustomers, avgSales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.cookiesEachHour = [];
}

// generates a random number
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(
    Math.random() * (maxCustomers - minCustomers + 1) + minCustomers
  );
}

// calls hours and generating how many cookies per hour for each location
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


// instances for each cookiestand
let seattle = new CookieStand('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
let lima = new CookieStand('Lima', 2, 16, 4.6);

// function generateCookieSales(storeObj) {

//   for (let i = 0; i <= hours.length; i++) {
//     // let thisHour = hours[0]
//     let peopleThisHour = randomNumberGenerator(storeObj.minCustomers, storeObj.maxCustomers);
//     let cookiesThisHour = Math.floor(peopleThisHour * storeObj.avgSales);
//     // console.log('cookiesThisHour', cookiesThisHour);
//     storeObj.cookiesEachHour.push(cookiesThisHour);
//   }
// }

// displays results for each location
seattle.generateCookieSales();
tokyo.generateCookieSales();
dubai.generateCookieSales();
paris.generateCookieSales();
lima.generateCookieSales();

// rendering table
CookieStand.prototype.render = function () {
  let tableElemLocation = document.getElementById('sales-table');
  let storeName = document.createElement('td');
  storeName.textContent = `${this.name}`;
  tableElemLocation.appendChild(storeName);

  // let head = document.create('')

  let headerRow = document.createElement('tr');
  let headerData = ['location'];
  //for loop to generate each hour
  for (let i = 6; i <= 19; i++) {
    let hour = i % 12;
    let period = i < 12 ? 'am' : 'pm' ;
    if (hour === 0) hour = 12;
    headerData.push(`${hour} ${period}`);
  }
  // creats table header cells
  headerData.push('Location Totals');

  headerData.forEach(data => {
    let headerCell = document.createElement('th');
    headerCell.textContent = data;
    tableHeaderRow.appendChild(headerCell);

  });
  //appends the header row
  document.getElementById('CookieSalesTable').appendChild(tableHeaderRow);
};

//function for footer

function createFooterRow(locations){
  let tableFooterRow = document.createElement('tfoot');
  let footerData = ['Hourly Totals for Every Location'];

  for (let i = 1; i <= 14; i++) {
    let total = locations.reduce((acc, location) => acc + location.cookiesEachHour[i -1],0);
    footerData.push(total);
  }
  let grandTotal = locations.reduce((acc,locations) => acc + location.calculateDailyTotal(),0);
  footerData.push(grandTotal);

  footerData.forEach(data => {
    let footercell = document.createElement('td');
    footercell.textContent = data;
    tableFooterRow.appendChild(footerCell);
  });
  document.getElementById('cookieSalesTable').appendChild(tableFooterRow);
}
function createLocationTotalsColumn(locations){
  let tableRows = document.querySelectorAll('#cookieSalesTable tbody tr');
  tableRows.forEach((row,index) => {
    let locationTotal = locations[index].calculateDailyTotal();
    let totalCell = document.createElement('td');
    totalCell.textContent = locationTotal;
    row.appendChild(totalCell);
  });
}









// for (let i = 0; i < hours.length; i++) {
//   let hourElem = document.createElement('li');
//   hourElem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
//   console.log(hourElem);
//   tableElemLocation.appendChild(hourElem);
// }
// };
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// function cookiesPerHour ()

// generateCookieSales(tokyo);
// console.log('tokyoObj',tokyo);
