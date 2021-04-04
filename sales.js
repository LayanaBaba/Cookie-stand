'use strict';
// Seattle

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let Seattle={
    min: 23,
    max:65,
 average: 6.3,
 randomCust: [],
 randomCustNum: function () {
    
    return (
      Math.floor(Math.random() * (this.max - this.min)) + this.min
    );

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    console.log(numberOfCustPerHour);
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let numberOfCustPerHour = this.numberOfCustPerHour();
    let CookiePerHourArr = [];
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    console.log(CookiePerHourArr);
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
    console.log(CookiePerHourArr);
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    console.log(total);
    return total;
  }  
}
Seattle.randomCustNum();
Seattle.numberOfCustPerHour();
Seattle.CookiePerHourArr();
Seattle.totalCookie();

console.log(Seattle);


let articleElement=document.createElement('article');
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
console.log(h2Element);

h2Element.textContent='Seattle';

let UlElement=document.createElement('ul');
articleElement.appendChild(UlElement);

for (let i = 0; i < hours.length; i++) {
    let LiElement = document.createElement('li');
    UlElement.appendChild(LiElement);
    LiElement.textContent = `${hours[i]}: ${
      Seattle.CookiePerHourArr[i]
    } cookies`;
    console.log(LiElement);
}

let LiElement = document.createElement('li');
UlElement.appendChild(LiElement);
LiElement.textContent = `Total: ${Seattle.totalCookie()} cookies`;
console.log(LiElement);
 
//Tokyo
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let Tokyo={
    min: 3,
    max:24,
 average: 1.2,
 randomCust: [],
 randomCustNum: function () {
    
    return (
      Math.floor(Math.random() * (this.max - this.min)) + this.min
    );

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    console.log(numberOfCustPerHour);
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let numberOfCustPerHour = this.numberOfCustPerHour();
    let CookiePerHourArr = [];
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    console.log(CookiePerHourArr);
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
    console.log(CookiePerHourArr);
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    console.log(total);
    return total;
  }  
}
Tokyo.randomCustNum();
Tokyo.numberOfCustPerHour();
Tokyo.CookiePerHourArr();
Tokyo.totalCookie();

console.log(Tokyo);


let articleElement=document.createElement('article');
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
console.log(h2Element);

h2Element.textContent='Tokyo';

let UlElement=document.createElement('ul');
articleElement.appendChild(UlElement);

for (let i = 0; i < hours.length; i++) {
    let LiElement = document.createElement('li');
    UlElement.appendChild(LiElement);
    LiElement.textContent = `${hours[i]}: ${
      Seattle.CookiePerHourArr[i]
    } cookies`;
    console.log(LiElement);
}

let LiElement = document.createElement('li');
UlElement.appendChild(LiElement);
LiElement.textContent = `Total: ${Seattle.totalCookie()} cookies`;
console.log(LiElement);



// Dubai

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let Dubai={
    min: 11,
    max: 38,
 average: 3.7,
 randomCust: [],
 randomCustNum: function () {
    
    return (
      Math.floor(Math.random() * (this.max - this.min)) + this.min
    );

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    console.log(numberOfCustPerHour);
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let numberOfCustPerHour = this.numberOfCustPerHour();
    let CookiePerHourArr = [];
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    console.log(CookiePerHourArr);
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
    console.log(CookiePerHourArr);
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    console.log(total);
    return total;
  }  
}
Dubai.randomCustNum();
Dubai.numberOfCustPerHour();
Dubai.CookiePerHourArr();
Dubai.totalCookie();

console.log(Dubai);


let articleElement=document.createElement('article');
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
console.log(h2Element);

h2Element.textContent='Dubai';

let UlElement=document.createElement('ul');
articleElement.appendChild(UlElement);

for (let i = 0; i < hours.length; i++) {
    let LiElement = document.createElement('li');
    UlElement.appendChild(LiElement);
    LiElement.textContent = `${hours[i]}: ${
      Seattle.CookiePerHourArr[i]
    } cookies`;
    console.log(LiElement);
}

let LiElement = document.createElement('li');
UlElement.appendChild(LiElement);
LiElement.textContent = `Total: ${Seattle.totalCookie()} cookies`;
console.log(LiElement);



// Paris
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let Paris={
    min: 20,
    max: 38,
 average: 2.3,
 randomCust: [],
 randomCustNum: function () {
    
    return (
      Math.floor(Math.random() * (this.max - this.min)) + this.min
    );

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    console.log(numberOfCustPerHour);
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let numberOfCustPerHour = this.numberOfCustPerHour();
    let CookiePerHourArr = [];
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    console.log(CookiePerHourArr);
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
    console.log(CookiePerHourArr);
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    console.log(total);
    return total;
  }  
}
Paris.randomCustNum();
Paris.numberOfCustPerHour();
Paris.CookiePerHourArr();
Paris.totalCookie();

console.log(Paris);


let articleElement=document.createElement('article');
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
console.log(h2Element);

h2Element.textContent='Paris';

let UlElement=document.createElement('ul');
articleElement.appendChild(UlElement);

for (let i = 0; i < hours.length; i++) {
    let LiElement = document.createElement('li');
    UlElement.appendChild(LiElement);
    LiElement.textContent = `${hours[i]}: ${
      Seattle.CookiePerHourArr[i]
    } cookies`;
    console.log(LiElement);
}

let LiElement = document.createElement('li');
UlElement.appendChild(LiElement);
LiElement.textContent = `Total: ${Seattle.totalCookie()} cookies`;
console.log(LiElement);



// Lima
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let Lima={
    min: 2,
    max: 16,
 average: 4.6,
 randomCust: [],
 randomCustNum: function () {
    
    return (
      Math.floor(Math.random() * (this.max - this.min)) + this.min
    );

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    console.log(numberOfCustPerHour);
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let numberOfCustPerHour = this.numberOfCustPerHour();
    let CookiePerHourArr = [];
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    console.log(CookiePerHourArr);
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
    console.log(CookiePerHourArr);
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    console.log(total);
    return total;
  }  
}
Lima.randomCustNum();
Lima.numberOfCustPerHour();
Lima.CookiePerHourArr();
Lima.totalCookie();

console.log(Lima);


let articleElement=document.createElement('article');
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
console.log(h2Element);

h2Element.textContent='Lima';

let UlElement=document.createElement('ul');
articleElement.appendChild(UlElement);

for (let i = 0; i < hours.length; i++) {
    let LiElement = document.createElement('li');
    UlElement.appendChild(LiElement);
    LiElement.textContent = `${hours[i]}: ${
      Seattle.CookiePerHourArr[i]
    } cookies`;
    console.log(LiElement);
}

let LiElement = document.createElement('li');
UlElement.appendChild(LiElement);
LiElement.textContent = `Total: ${Seattle.totalCookie()} cookies`;
console.log(LiElement);