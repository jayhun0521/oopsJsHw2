//Create a Basic JavaScript Object

// let dog = {
//     name: "Stella",
//     numLegs: 4
//   };
//   console.log(dog);



// //Use Dot Notation to Access the Properties of an Object

// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   // Only change code below this line
//   console.log(dog.name);
//   console.log(dog.numLegs);


//   Create a Method on an Object

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//       return "This dog has " + dog.numLegs + " legs.";
//     }
//   };
  
//   dog.sayLegs();



// Make Code More Reusable with the this Keyword

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//       return "This dog has " + this.numLegs + " legs.";
//     }
//   };



// Define a Constructor Function

// function Dog(){
//     this.name = "Stella";
//     this.color = "Brindle";
//     this.numLegs = 4;
//   }
 


//Use a Constructor to Create Objects
// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
//   // Only change code below this line
  
//   let hound = new Dog();
  
//   console.log(hound);



// Extend Constructors to Receive Arguments
// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
//   }
//   let terrier = new Dog("Buddy", "Black");



// Verify an Object's Constructor with instanceof

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }
  
//   // Only change code below this line
//   let myHouse = new House (4);
//   myHouse instanceof House;

//   console.log(myHouse);



// Understand Own Properties
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
//   for ( let property in canary){
//     if(canary.hasOwnProperty(property)){
//       ownProps.push(property);
//     }
//   }
  
//   console.log(ownProps);



// Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

