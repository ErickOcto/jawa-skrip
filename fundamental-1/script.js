// Variable and value

// let js = 'fikri';
// if(js === 'amazing') alert('JS is FUN');

// console.log(40 + 40 - 24 + 10);

// let firstName = "Mathilda";

// console.log(firstName);

// if(js === 'amazing') console.log(firstName);

// while(js === 'amazing') {
//     for (let i = 0; i < 10; i++) {
//       console.log(firstName + i);
//     }
// }

// Datatypes

// let javascriptIsFun = false;
// console.log(typeof firstName);
// console.log(typeof 23);
// console.log(typeof "This is quick!");
// console.log(typeof true);

// let javascript;
// javascript = "yes sir!";
// console.log(typeof javascript);

// let erick = true;
// erick = "ini string";

// console.log(typeof erick);

// console.log(typeof null);


// // Basic Operators
// const ageJonas = 2037 - 1991;
// const ageSarah = 2024 - 2005;
// console.log(ageJonas, ageSarah);

// //To
// const now = 2024;
// const ageAgus = now - 1991;
// const ageShifa = now - 2005;
// console.log(ageAgus, ageShifa);

// //Case
// console.log(ageJonas * 2, ageShifa / 10, 2 ** 3);

// const firstName = 'Shifa Sharifah';
// const lastName = 'Maulidah';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10; // x = x + 10;
// x *= 4; // x =  x * 4;
// x++;
// x--;
// console.log(x);

// //comparison operator
// console.log(ageJonas > ageSarah);
// console.log(ageShifa >= 19);

// const isFullAge = ageShifa >= 19;

// console.log(now - 1991 > now - 2005);

// const now = 2024;
// const ageAgus = now - 1991;
// const ageShifa = now - 2005;
// console.log(ageAgus, ageShifa);

// console.log(now - 1991 > now - 2005);

// let x, y;
// x = y = 25-10-5;

// const averageAge = (ageAgus + ageShifa) / 2
// console.log(x, y, averageAge);


// String and Template Literals
// const firstName = "Shifa Sharifah Maulida";
// const job = "Professional Programmer";
// const birthYear = 2005;
// const now = 2024;

// const shifa = "Halo!, nama aku " + firstName + " dan aku ingin menjadi " + job + " diumurku yang ke-" + (now - birthYear) + " ini...";

// console.log(shifa);

// const shifaNew = `Halo!, nama aku ${firstName} dan aku ingin menjadi ${job} diumurku yang ke-${(now - birthYear)} ini...`;

// console.log(shifaNew);


// IF ELSE Statement
// const tall = 150;
// const isTallEnough = tall >= 170;
// const name = "Shifa";

// if(isTallEnough){
//     console.log('Cukup Tinggi');
// }else{
//     console.log(`Belum Cukup Tinggi, ${name} harus tumbuh sekitar ${170 - tall}cm`);
// }

// Type Conversion and Coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)

console.log(Number('JONAS'));
console.log(typeof NaN);

console.log(String(23));