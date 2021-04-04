'use strict';
// Seattle


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle={
    min: 23,
    max:65,
 average: 6.3,
 
 randomCustNum: function () {
    
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;

},
numberOfCustPerHour: function () {
      let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let CookiePerHourArr = [];
    let numberOfCustPerHour = this.numberOfCustPerHour();
    
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
   
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    
    return total;
  },
};

Seattle.numberOfCustPerHour();
Seattle.CookiePerHourArr();
Seattle.totalCookie();

let parent=document.getElementById('parent');
let articleElement=document.createElement('article');
parent.appendChild(articleElement);
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
    h2Element.textContent='Seattle';

let UlElement=document.createElement('ul');
articleElement.appendChild(UlElement);

for (let i = 0; i < hours.length; i++) {
    let LiElement = document.createElement('li');
    UlElement.appendChild(LiElement);
    LiElement.textContent = `${hours[i]}: ${Seattle.CookiePerHourArr()[i]} cookies`;
    
}

let LiTotalElement = document.createElement('li');
UlElement.appendChild(LiTotalElement);
LiTotalElement.textContent = `Total: ${Seattle.totalCookie()} cookies`;
    

 
//Tokyo

let Tokyo={
    min: 3,
    max: 24,
 average: 1.2,
 
 randomCustNum: function () {
    
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;

},
numberOfCustPerHour: function () {
      let numberOfCustPerHour = [];
    for (let i = 0; i <hours.length; i++) {
        numberOfCustPerHour.push(this.randomCustNum());
    }
    
    return numberOfCustPerHour;
  },
  CookiePerHourArr: function () {
    let CookiePerHourArr = [];
    let numberOfCustPerHour = this.numberOfCustPerHour();
    
    for (let i = 0; i < numberOfCustPerHour.length; i++) {
      CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
    }
    
    return CookiePerHourArr;
  },
  totalCookie: function () {
    let CookiePerHourArr = this.CookiePerHourArr();
   
    let total = 0;
    for (let i = 0; i < CookiePerHourArr.length; i++) {
      total = total + CookiePerHourArr[i];
    }
    
    return total;
  },
};

Tokyo.numberOfCustPerHour();
Tokyo.CookiePerHourArr();
Tokyo.totalCookie();

let tparent=document.getElementById('parent');
let tarticleElement=document.createElement('article');
tparent.appendChild(tarticleElement);
let th2Element=document.createElement('h2');
tarticleElement.appendChild(th2Element);
    th2Element.textContent='Tokyo';

let tUlElement=document.createElement('ul');
tarticleElement.appendChild(tUlElement);

for (let i = 0; i < hours.length; i++) {
    let tLiElement = document.createElement('li');
    tUlElement.appendChild(tLiElement);
    tLiElement.textContent = `${hours[i]}: ${Tokyo.CookiePerHourArr()[i]} cookies`;
    
}

let tLiTotalElement = document.createElement('li');
tUlElement.appendChild(tLiTotalElement);
tLiTotalElement.textContent = `Total: ${Tokyo.totalCookie()} cookies`;
    

// Dubai

let Dubai={
  min: 11,
  max:38,
average: 3.7,

randomCustNum: function () {
  
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
  for (let i = 0; i <hours.length; i++) {
      numberOfCustPerHour.push(this.randomCustNum());
  }
  
  return numberOfCustPerHour;
},
CookiePerHourArr: function () {
  let CookiePerHourArr = [];
  let numberOfCustPerHour = this.numberOfCustPerHour();
  
  for (let i = 0; i < numberOfCustPerHour.length; i++) {
    CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
  }
  
  return CookiePerHourArr;
},
totalCookie: function () {
  let CookiePerHourArr = this.CookiePerHourArr();
 
  let total = 0;
  for (let i = 0; i < CookiePerHourArr.length; i++) {
    total = total + CookiePerHourArr[i];
  }
  
  return total;
},
};

Dubai.numberOfCustPerHour();
Dubai.CookiePerHourArr();
Dubai.totalCookie();

let dparent=document.getElementById('parent');
let darticleElement=document.createElement('article');
dparent.appendChild(darticleElement);
let dh2Element=document.createElement('h2');
darticleElement.appendChild(dh2Element);
 dh2Element.textContent='Dubai';

let dUlElement=document.createElement('ul');
darticleElement.appendChild(dUlElement);

for (let i = 0; i < hours.length; i++) {
  let dLiElement = document.createElement('li');
  dUlElement.appendChild(dLiElement);
 dLiElement.textContent = `${hours[i]}: ${Dubai.CookiePerHourArr()[i]} cookies`;
  
}

let dLiTotalElement = document.createElement('li');
dUlElement.appendChild(dLiTotalElement);
dLiTotalElement.textContent = `Total: ${Dubai.totalCookie()} cookies`;


//Paris
let Paris={
  min: 20,
  max: 38,
average: 2.3,

randomCustNum: function () {
  
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
  for (let i = 0; i <hours.length; i++) {
      numberOfCustPerHour.push(this.randomCustNum());
  }
  
  return numberOfCustPerHour;
},
CookiePerHourArr: function () {
  let CookiePerHourArr = [];
  let numberOfCustPerHour = this.numberOfCustPerHour();
  
  for (let i = 0; i < numberOfCustPerHour.length; i++) {
    CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
  }
  
  return CookiePerHourArr;
},
totalCookie: function () {
  let CookiePerHourArr = this.CookiePerHourArr();
 
  let total = 0;
  for (let i = 0; i < CookiePerHourArr.length; i++) {
    total = total + CookiePerHourArr[i];
  }
  
  return total;
},
};

Paris.numberOfCustPerHour();
Paris.CookiePerHourArr();
Paris.totalCookie();

let pparent=document.getElementById('parent');
let particleElement=document.createElement('article');
pparent.appendChild(particleElement);
let ph2Element=document.createElement('h2');
particleElement.appendChild(ph2Element);
  ph2Element.textContent='Paris';

let pUlElement=document.createElement('ul');
particleElement.appendChild(pUlElement);

for (let i = 0; i < hours.length; i++) {
  let pLiElement = document.createElement('li');
  pUlElement.appendChild(pLiElement);
  pLiElement.textContent = `${hours[i]}: ${Paris.CookiePerHourArr()[i]} cookies`;
  
}

let pLiTotalElement = document.createElement('li');
pUlElement.appendChild(pLiTotalElement);
pLiTotalElement.textContent = `Total: ${Paris.totalCookie()} cookies`;


//Lima
let Lima={
  min: 2,
  max:16,
average: 4.6,

randomCustNum: function () {
  
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;

},
numberOfCustPerHour: function () {
    let numberOfCustPerHour = [];
  for (let i = 0; i <hours.length; i++) {
      numberOfCustPerHour.push(this.randomCustNum());
  }
  
  return numberOfCustPerHour;
},
CookiePerHourArr: function () {
  let CookiePerHourArr = [];
  let numberOfCustPerHour = this.numberOfCustPerHour();
  
  for (let i = 0; i < numberOfCustPerHour.length; i++) {
    CookiePerHourArr.push(Math.floor(numberOfCustPerHour[i] * this.average));
  }
  
  return CookiePerHourArr;
},
totalCookie: function () {
  let CookiePerHourArr = this.CookiePerHourArr();
 
  let total = 0;
  for (let i = 0; i < CookiePerHourArr.length; i++) {
    total = total + CookiePerHourArr[i];
  }
  
  return total;
},
};

Lima.numberOfCustPerHour();
Lima.CookiePerHourArr();
Lima.totalCookie();

let lparent=document.getElementById('parent');
let larticleElement=document.createElement('article');
lparent.appendChild(larticleElement);
let lh2Element=document.createElement('h2');
larticleElement.appendChild(lh2Element);
  lh2Element.textContent='Lima';

let lUlElement=document.createElement('ul');
larticleElement.appendChild(lUlElement);

for (let i = 0; i < hours.length; i++) {
  let lLiElement = document.createElement('li');
  lUlElement.appendChild(lLiElement);
  lLiElement.textContent = `${hours[i]}: ${Lima.CookiePerHourArr()[i]} cookies`;
  
}

let lLiTotalElement = document.createElement('li');
lUlElement.appendChild(lLiTotalElement);
lLiTotalElement.textContent = `Total: ${Lima.totalCookie()} cookies`;






