'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm'];


function randomnumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let locations = [];

function Location(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.total = 0;
  this.cookiePerHour= [];
  locations.push(this);
}


Location.prototype.numberOfCustPerHour = function () {

  return randomnumber(this.min, this.max);
}

Location.prototype.cookiePerHourArr= function(){
  for (let i=0;i<hours.length;i++){
    this.cookiePerHour.push(Math.floor(this.numberOfCustPerHour()*this.average));
    this.total+=this.cookiePerHour[i];
  }
}

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);

let paris = new Location('Paris', 20, 38, 2.3);

let lima = new Location('Lima', 2, 16, 4.6);

console.log(locations);

let parentElement = document.getElementById('parent');
let tableElement = document.createElement('table');

parentElement.appendChild(tableElement);

function headerRender() {

  let headerRowElement = document.createElement('tr');
  tableElement.appendChild(headerRowElement);

  let thEmptyElement = document.createElement('th');
  headerRowElement.appendChild(thEmptyElement);
  thEmptyElement.textContent = '';

  for (let i = 0; i < hours.length; i++) {
    let hoursRowElement = document.createElement('th');
    headerRowElement.appendChild(hoursRowElement);
    hoursRowElement.textContent = hours[i];
  }

  let thTotalElement = document.createElement('th');
  headerRowElement.appendChild(thTotalElement);
  thTotalElement.textContent = 'Daily location total';

}

Location.prototype.render = function () {

  let sumRowElement = document.createElement('tr');
  tableElement.appendChild(sumRowElement);

  let tdNameElement = document.createElement('td');
  sumRowElement.appendChild(tdNameElement);
  tdNameElement.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    let tdLocationElement = document.createElement('td');
    sumRowElement.appendChild(tdLocationElement);
    tdLocationElement.textContent = this.cookiePerHour[i];
  }
  let tdTotalElement = document.createElement('td');
  sumRowElement.appendChild(tdTotalElement);
  tdTotalElement.textContent = this.total;

}

function footerRender() {
  let footerRowElement = document.createElement('tr');
  tableElement.appendChild(footerRowElement);
  let thEmptyElement = document.createElement('th');
  footerRowElement.appendChild(thEmptyElement);
  thEmptyElement.textContent = 'Totals';

  let sumOfEachHour;
  let horSum = 0;
  for (let i = 0; i < hours.length; i++) {
    sumOfEachHour = 0;
    for (let q = 0; q < locations.length; q++) {
      sumOfEachHour += locations[q].cookiePerHour[i];
      horSum += locations[q].cookiePerHour[i];
    }

    let tfElement = document.createElement('th');
    footerRowElement.appendChild(tfElement);
    tfElement.textContent = sumOfEachHour;

  }
  let tfTotalElement = document.createElement('th');
  footerRowElement.appendChild(tfTotalElement);
  tfTotalElement.textContent = horSum;
}

headerRender();
for (let i=0;i<locations.length;i++){
  locations[i].cookiePerHourArr();
  locations[i].render();
}

footerRender();

