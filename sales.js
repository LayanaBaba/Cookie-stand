'use strict';
// Seattle


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm'];
let parent=document.getElementById('parent');
    let articleElement=document.createElement('article');
let seattle={
  name:'Seattle',
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
  render: function(){

    
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
        h2Element.textContent=this.name;
    
    let UlElement=document.createElement('ul');
    articleElement.appendChild(UlElement);
    
    for (let i = 0; i < hours.length; i++) {
        let LiElement = document.createElement('li');
        UlElement.appendChild(LiElement);
        LiElement.textContent = `${hours[i]}: ${this.CookiePerHourArr()[i]} cookies`;
        
    }
    
    let LiTotalElement = document.createElement('li');
    UlElement.appendChild(LiTotalElement);
    LiTotalElement.textContent = `Total: ${this.totalCookie()} cookies`;
  }
};

seattle.numberOfCustPerHour();
seattle.CookiePerHourArr();
seattle.totalCookie();
seattle.render();


    

 
//Tokyo

let tokyo={
  name:'Tokyo',
    min: 3,
    max:24,
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
  render: function(){

    
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
        h2Element.textContent=this.name;
    
    let UlElement=document.createElement('ul');
    articleElement.appendChild(UlElement);
    
    for (let i = 0; i < hours.length; i++) {
        let LiElement = document.createElement('li');
        UlElement.appendChild(LiElement);
        LiElement.textContent = `${hours[i]}: ${this.CookiePerHourArr()[i]} cookies`;
        
    }
    
    let LiTotalElement = document.createElement('li');
    UlElement.appendChild(LiTotalElement);
    LiTotalElement.textContent = `Total: ${this.totalCookie()} cookies`;
  }
};

tokyo.numberOfCustPerHour();
tokyo.CookiePerHourArr();
tokyo.totalCookie();
tokyo.render();

    

// Dubai

let dubai={
  name:'Dubai',
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
  render: function(){

    
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
        h2Element.textContent=this.name;
    
    let UlElement=document.createElement('ul');
    articleElement.appendChild(UlElement);
    
    for (let i = 0; i < hours.length; i++) {
        let LiElement = document.createElement('li');
        UlElement.appendChild(LiElement);
        LiElement.textContent = `${hours[i]}: ${this.CookiePerHourArr()[i]} cookies`;
        
    }
    
    let LiTotalElement = document.createElement('li');
    UlElement.appendChild(LiTotalElement);
    LiTotalElement.textContent = `Total: ${this.totalCookie()} cookies`;
  }
};

dubai.numberOfCustPerHour();
dubai.CookiePerHourArr();
dubai.totalCookie();
dubai.render();


//Paris
let paris={
  name:'Paris',
    min: 20,
    max:38,
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
  render: function(){

    
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
        h2Element.textContent=this.name;
    
    let UlElement=document.createElement('ul');
    articleElement.appendChild(UlElement);
    
    for (let i = 0; i < hours.length; i++) {
        let LiElement = document.createElement('li');
        UlElement.appendChild(LiElement);
        LiElement.textContent = `${hours[i]}: ${this.CookiePerHourArr()[i]} cookies`;
        
    }
    
    let LiTotalElement = document.createElement('li');
    UlElement.appendChild(LiTotalElement);
    LiTotalElement.textContent = `Total: ${this.totalCookie()} cookies`;
  }
};

paris.numberOfCustPerHour();
paris.CookiePerHourArr();
paris.totalCookie();
paris.render();



//Lima
let lima={
  name:'Lima',
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
  render: function(){

    
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
        h2Element.textContent=this.name;
    
    let UlElement=document.createElement('ul');
    articleElement.appendChild(UlElement);
    
    for (let i = 0; i < hours.length; i++) {
        let LiElement = document.createElement('li');
        UlElement.appendChild(LiElement);
        LiElement.textContent = `${hours[i]}: ${this.CookiePerHourArr()[i]} cookies`;
        
    }
    
    let LiTotalElement = document.createElement('li');
    UlElement.appendChild(LiTotalElement);
    LiTotalElement.textContent = `Total: ${this.totalCookie()} cookies`;
  }
};

lima.numberOfCustPerHour();
lima.CookiePerHourArr();
lima.totalCookie();
lima.render();






