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

const jonasArrays = [
    'Jonas',
    'Teacher',
    'Gather',
    2037 - 1991,
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Salamander',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
};