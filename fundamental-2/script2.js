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
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} of apples and ${orangesPieces} of oranges`;
    return juice;
}

console.log(fruitProcessor(2,4));