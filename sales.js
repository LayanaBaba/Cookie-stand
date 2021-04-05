'use strict';
// lab 07 branch
// edit 

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm'];
let parentElement=document.getElementById('container');
let tableElement=document.createElement('table');
console.log(tableElement);
parentElement.appendChild(tableElement);
 let locations=[];

 function Location (name,min,max,average){
  this.name=name;
  this.min=min;
  this.max=max;
  this.average=average;
  this.numberOfCustPerHour = [];
  this.CookiePerHourArr = [];
  this.total=0;

  locations.push(this);
}

 Location.prototype.randomCustNum=function () {
    
  return (Math.floor(Math.random() * (this.max - this.min)) + this.min);

};

Location.prototype.numberOfCustPerHour=function () {
  
for (let i = 0; i <hours.length; i++) {
    this.numberOfCustPerHour.push(this.randomCustNum());
}

Location.prototype.CookiePerHourArr= function () {
  let numberOfCustPerHour = this.numberOfCustPerHour();
  
  for (let i = 0; i < this.numberOfCustPerHour.length; i++) {
    this.CookiePerHourArr.push(Math.floor(this.numberOfCustPerHour[i] * this.average));
  }
  
  
}

Location.prototype.totalCookie= function () {
  let CookiePerHourArr = this.CookiePerHourArr();
  for (let i = 0; i < this.CookiePerHourArr.length; i++) {
    this.total = this.total + this.CookiePerHourArr[i];
  }
  
}

 Location.prototype.render = function(){
  this.numberOfCustPerHour();
  this.CookiePerHourArr(); 
  this.totalCookie();

  let tableRowElement=document.createElement('tr');
  tableElement.appendChild(tableRowElement);

  let tdNameElement =document.createElement('td');
  tableRowElement.appendChild(tdNameElement);
  tdNameElement.textContent=`${this.CookiePerHourArr[i]}+cookies`;
 }
 let tdTotalElement=document.createElement('td');
tableRowElement.appendChild(tdTotalElement);
tdTotalElement.textContent=`${this.totalCookie}+cookies`;
}

let seattle=new Location('Seattle',23,65,6.3);

seattle.render();

let tokyo=new Location('Tokyo',3,24,1.2);
tokyo.render();
let dubai=new Location('Dubai',11,38,3.7);
dubai.render();
let paris=new Location('Paris',20,38,2.3);
paris.render();
let lima=new Location('Lima',2,16,4.6);
lima.render();

function headerRender(){

  let tableRowElement=document.createElement('tr');
  tableElement.appendChild(tableRowElement);
  let thEmptyElement=document.createElement('th');
  tableRowElement.appendChild(thEmptyElement);
  thEmptyElement.textContent='';

 for ( let i=0; i<hours.length ; i++ ) {
  let tableHeadElement=document.createElement('th');
  tableRowElement.appendChild(tableHeadElement);
  tableHeadElement.textContent = hours[i];
}

let thTotalElement=Document.createElement('th');
tableRowElement.textContent='Daily location total';

}
headerRender();
function footerRender(){
let tableRowElement=document.createElement('tr');
tableElement.appendChild(tableRowElement);
let thEmptyElement=document.createElement('th');
tableRowElement.appendChild(thEmptyElement);
thEmptyElement.textContent='Totals';

let sumOfSum=0;
for (let i=0; i<hours.length;i++){
  let sum=0;
  for (let q=0;q<location.length;q++){
    sum=sum+location[i].CookiePerHourArr[i];
  }
  sumOfSum=sumOfSum+sum
  let tfElement=document.createElement('th');
  tableRowElement.appendChild(tfElement);
  tfElement.textContent=sum;

}
let tfTotalElement=document.createElement('th');
tableRowElement.appendChild(tfTotalElement);
tfTotalElement.textContent=sumOfSum;
}
footerRender();

/*




let seattle= new Location('Seatle',23,65,6.3);*/ 

/*let parent=document.getElementById('parent');
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
lima.render();*/






