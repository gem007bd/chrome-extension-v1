$(function() {

});
/******first video****/
// var gretting;
// var newCustomer = false;
// if(newCustomer){
//   gretting = function () {
//     alert("Thanks for visiting the Badlands!\n"+
//     "We hope your stay is .. better than most.");
//   };
// }else {
//   gretting = function () {
//     alert("Thanks for visiting the Badlands!\n"+
//     "Guess they aren't so bad huh ?");
//   };
// }
// closeTerminal(gretting);
// function closeTerminal(message) {
//   message();
// }

/******second video****/

// var numbers = [12, 4, 9,3,33,8,49];
//
// var results = numbers.map(
//   function (arrayCell) {
//     return arrayCell * 2;
//   }
// );
// console.log(results);

/******3rd video****/
//
// var parkRides = [
//   ["Birch Bumpers" ,  40],
//   ["Pines Plunge" , 55],
//   ["Ceder Coaster" , 20],
//   ["Ferris Wheel of Firs" , 90]
// ];
//
// var fastPassQueue = [
//   "Ceder Coaster",
//   "Pines Plunge",
//   "Birch Bumpers",
//   "Pines Plunge"
// ];
//
// function buildTicket(allRides, passRides, pick) {
//  if(passRides[0] == pick){
//    var pass = passRides.shift();
//    return function () {
//      alert("Quick! You've got a Fast Pass to " + pass + " !");
//
//    };
//  }else {
//    for (var i = 0; i < allRides.length; i++) {
//       if (allRides[i][0] == pick) {
//         return function () {
//           alert("A ticket is printing for " + pick + "!\n" +
//           "Your wait time is about " + allRides[i][1] + " minutes");
//         };
//       }
//    }
//
//  }
// }
//
// var wantsRide = "Ceder Coaster";
// buildTicket(parkRides, fastPassQueue, wantsRide)();

// /******4th video****/
//
// function buildCaveTicketMaker(transport) {
//
//   return function(name) {
//       alert("Here is your transportation ticket via the " + transport + ".\n" +
//     "Welcome to the Cold Closures Cave , " + name + "!");
//   };
// }
//
//
// var getSubmarineTicket = buildCaveTicketMaker("Submarine");
//
// var getBattleshipTicket = buildCaveTicketMaker("Battleship");
//
// var getGiantSeagullTicket = buildCaveTicketMaker("Giant Seagull");
//
// getSubmarineTicket("Mario");
// getBattleshipTicket("Luigi");
// getGiantSeagullTicket("Bowser");

/******5th video****/
//
// function buildCaveTicketMaker(transport) {
//   var passengerNumber = 0;
//   return function(name) {
//       passengerNumber++ ;
//       alert("Here is your transportation ticket via the " + transport + ".\n" +
//     "Welcome to the Cold Closures Cave , " + name + "!" + ".\n" +
//      "Your are passengerNumber #" + passengerNumber  + ".");
//   };
// }
//
//
// var getSubmarineTicket = buildCaveTicketMaker("Submarine");
//
// var getBattleshipTicket = buildCaveTicketMaker("Battleship");
//
// var getGiantSeagullTicket = buildCaveTicketMaker("Giant Seagull");
//
// getSubmarineTicket("Mario");
// getBattleshipTicket("Luigi");
// getGiantSeagullTicket("Bowser");

/******6th video****/

// function assignTorpedo(name , passengerArray) {
//     for (var i = 0; i < passengerArray.length; i++) {
//       if(passengerArray[i] == name){
//           return function() {
//             alert("Ahow. " + name + "!\n" +
//             "Man your post at Torpedo # " + (i+1) + "!");
//           };
//       }
//     }
// }

// function makeTorpidoAssigner(passengerArray) {
//   return function (name) {
//         for (var i = 0; i < passengerArray.length; i++) {
//           if (passengerArray[i] == name) {
//             alert("Ahow. " + name + "!\n" +
//             "Man your post at Torpedo # " + (i+1) + "!");
//           }
//         }
//   };
// }
//
// var subPassengers = ["Luke" , "Leia" , "Han" , "Chewie" , "Yada" , "R2-D2" , "C-3PO" , "Boba"];
//
// var getTorpidoFor = makeTorpidoAssigner(subPassengers);
//
// getTorpidoFor("Han");

// /******7th video****/
//
// function capacityStatus(numPassengers, capacity) {
//
//     function noSeats() {
//       alert("No seats left, dude!");
//       return false;
//     };
//
//     function seatsAvail() {
//       alert("There are " + (capacity - numPassengers) + " seats left!");
//       return true;
//     };
//
//     if(numPassengers == capacity){
//       noSeats();
//     }else {
//       seatsAvail();
//     }
// }
//
// capacityStatus(60, 20);

/******8th video -- javascript data structure ****/
// var bookArray = [
//   "Great Expectations",
//   "The Remains of the Day",
//   "Peter Pan"
// ];
// var myBox = {
//   height: 6,
//   width: 4,
//   length: 10,
//   volume: 240,
//   martirial: "cardboard",
//   contents: bookArray,
//   "# of Books" : 0
// };
//
// function addBook(box, name , writer) {
//   box["# of Books"]++;
//   box["book" + box["# of Books"]] = {title: name, author: writer};
// }
//
// addBook(myBox , "Great Expectation" , "Charles Dickens");
// addBook(myBox , "The days of Remains" , "Abck");

/******9th video --  ****/
// aquarium = {
//    Nimo : {type: "fish" , species: "clownfish" , lenght: 3.7 },
//    Dary : {type: "fish" , species: "blue tang" , lenght: 6.2 },
//    Peach : {type: "echinoderm" , species: "starfish" , lenght: 5.3 },
//    addCritter: function ( name , type , species, length) {
//      this[name] = {type: type, species: species , length: length};
//    }
// };
// aquarium.addCritter("Bubbles" , "fish" , "yellow tang" , 5.5);
//
// aquarium.takeOut = function(name) {
//   this[name].name = name;
//   var temp = this[name];
//   delete this[name];
//   return temp;
// };
//
// var fishOutOfWater = aquarium.takeOut("Marlin");

/******11th video Using Objects--  ****/

// aquarium = {
//    Nimo : {type: "fish" , species: "clownfish" , lenght: 3.7 },
//    Dory : {type: "fish" , species: "blue tang" , lenght: 6.2 },
//    Peach : {type: "echinoderm" , species: "starfish" , lenght: 5.3 },
//    addCritter: function ( name , type , species, length) {
//      this[name] = {type: type, species: species , length: length};
//    }
// };
// aquarium.takeOut = function(name) {
//   this[name].name = name;
//   var temp = this[name];
//   delete this[name];
//   return temp;
// };
// aquarium.countFish = function () {
//   var numFish = 0;
//   for(key in this){
//       if( this[key].type == "fish"){
//         numFish++;
//       }
//   }
//   return numFish;
// };


/******12th video Prototype--  ****/

// For array:
// length,pop, push , shift , join, reverse, reduce, sort,slice, map.
//
// string,
// length, concat, toUpperCase, CharAt, IndexOf, toLowerCase, trim, replace, substring.


// var witch = " I will get you , my pretty .. and you little dog too";
//
// String.prototype.countAll = function (letter) {
//   var letterCount = 0;
//   for (var i = 0; i < this.length; i++) {
//       if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
//         letterCount ++;
//       }
//   }
//   return letterCount++;
// };

/******13th video Inheretance--  ****/

//
// var shoe = { size : 6, gender: " woman" , construction: "slipper"};
//
// var magicShoe = Object.create( shoe );
//
// magicShoe.jewels = "ruby";
// magicShoe.travelAction = "click heels";
// magicShoe.actionsRequired = 3;
//
// // console.log(Object.prototype.isPrototypeOf( shoe ));
// console.log(shoe.isPrototypeOf( magicShoe ));
//
//
// function Shoe(shoeSize, shoeColor, forGender, constructStyle) {
//   this.size = shoeSize;
//   this.color = shoeColor;
//   this.gender = forGender;
//   this.construction = constructStyle;
// }
//
// Shoe.prototype = {
//   putOn: function () { alert("Shoe's on , dood!" + this.construction );},
//   takeOff: function(){ alert("Uh, what's that smeel!?" + this.size);}
// };
//
//
// var beachShoe = new Shoe(10, "blue" , "woman" , "flipflop");


/******13th video Prototype Overriding--  ****/

// var x = 4;
// var y = "4";
//
// if(x.valueOf() ===  y.valueOf()){
//   alert("Haloop");
// }


var Tornado = function (category, affectedAreas, windGust) {
  this.category = category;
  this.affectedAreas = affectedAreas;
  this.windGust = windGust;
}

var cities = [
  ["Kansas City" , 434534],
  ["Tapeka" , 434435],
  ["Lenexa" , 798789]
];
cities.push(["Olathe", 93428]);
var twister = new Tornado("F5" , cities , 220);
Tornado.prototype.valueOf = function() {
  var sum = 0;
  for (var i = 0; i < this.affectedAreas.length; i++) {
    sum += this.affectedAreas[i][1];
  }
  return sum;
};
Tornado.prototype.toString = function () {
  var list = 0;
  for (var i = 0; i < this.affectedAreas.length; i++) {
        if ( i< this.affectedAreas.length - 1) {
           list = list + this.affectedAreas[i][0] + ", ";
        }else {
          list = list + "and" + this.affectedAreas[i][0];
        }
  }
  return "This tornado has been classified as an " + this.category +
  ", with the wind  gusts up to " + this.windGust + "mph Affected areas are :" +
  list + ", potantially affecting a pupulation of " + this.valueOf() + ".";
}
