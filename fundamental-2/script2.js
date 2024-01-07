//activating strict mdoe
'use strict';

// let hasDriversLicenses = false;

// const passTest = true;
// if(passTest) hasDriversLicenses = true;
// if(hasDriversLicenses) console.log(hasDriversLicenses);

//Functions

// function logger(){
//     console.log('My Name Is Erick');
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return console.log(`Juice with ${apples} apples and ${oranges} oranges`);
// }

// fruitProcessor(5, 1);
// fruitProcessor(10, 10);
//console.log(appleJuice);

// function declaration and expression

//function declaration
// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return console.log(age);
// }

// calcAge1(2006);

// //function expression
// const calcAge2 = function (birthYear){
//     return console.log(2037 - birthYear);
// }

// const calcAge3 = () => {
//     rerwerower
// }

// calcAge2(2006);

// console.log(calcAge1(2006),);

// Arrow functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age = calcAge3(1991);
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirements = 65 - age;
//     //return retirements;
//     return `${firstName} retires in ${retirements} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(2005, 'Shifa'));

//Functions Calling Other Functions
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} of apples and ${orangesPieces} of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2,4));

// Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends[2]);

// const firstName = 'Jonas';
// const jonas = [firstName, 'October', 2037 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);


// function calcAge1(birthYear){
//      return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2005, 2010, 2018];

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[3]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

// Basic Arrays Operators

// const friends = ['Michael', 'Steven', 'Peter'];

// //add elements to friends
// friends.push('Jay');
// console.log(friends);
// friends.unshift('John');
// console.log(friends);

// //Remove elements to friends
// friends.pop(); //Last
// friends.shift() //first
// console.log(friends);

// console.log(friends.indexOf('Steven'));

//intro to object

// const jonasArrays = [
//     'Jonas',
//     'Teacher',
//     'Gather',
//     2037 - 1991,
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Ifa',
//     lastName: 'Smith',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Erick', 'Steven', 'Peter'],
// };

// console.log(jonas);
// console.log(jonas['firstName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt('What do you to know about Ifa? Choose between firstName, lastName, age, job, friends');

// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]){
// alert(`${jonas.firstName} ${interestedIn} is ${jonas[interestedIn]}`);
// }else{
// alert('Ups! Something Went Wrong, Please check again');
// }

// jonas.location = 'Portugal';
// jonas['hobby'] = 'Gaming';
// console.log(jonas);

// console.log(`${jonas.firstName} has friends called ${jonas.friends[0]}`)

// object methods
// const jonas = {
//   firstName: "Ifa",
//   lastName: "Smith",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Erick", "Steven", "Peter"],
//   hasDriversLicense: false,

//   // calcAge: function(){
//   //     return 2037 - this.birthYear;
//   // }

//   calcAge: function(){
//     this.age = 2037 - this.birthYear;
//       return this.age;
//   },

//   getSummary: function(){
//     console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license`)
//   }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);

//Challenge methods
//Jonas is a 46 years old teacher, and he has a driver license

// console.log(jonas.getSummary());


// if(jonas.hasDriversLicense){
//     console.log(`${jonas.firstName} is a ${jonas.age} years old ${jonas.job}, and he has a driver license`);
// }else{
//     console.log(
//       `${jonas.firstName} is a ${jonas.age} years old ${jonas.job}, and he has no driver license`);
// }

//FOR Loop Iteration

// for(let i = 0; i < 10; i++) {
// console.log(i);
// }

//Looping Arrays

// const jonasArrays = [
//     'Jonas',
//     'Teacher',
//     'Gather',
//     2037 - 1991,
//     ['Michael', 'Peter', 'Steven']
// ];

// const users = {
//   0: {
//     firstName: "Erick",
//     lastName: "Smith",
//     age: 17,
//     status: true,
//   },
//   1: {
//     firstName: "Ifa",
//     lastName: "Sharifah",
//     age: 17,
//     status: true,
//   },
//   2: {
//     firstName: "Jonas",
//     lastName: "Thompson",
//     age: 17,
//     status: true,
//   },
//   3: {
//     firstName: "Will",
//     lastName: "Smith",
//     age: 17,
//     status: true,
//   },
// };

// for(let i = 0; i < 4; i++) {
//     console.log(users[i].firstName, users[i].lastName);
// }
// console.log(users);