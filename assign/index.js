// markWeight = 78;
// markTall = 1.69 ** 2;

// johnWeight = 92;
// johnTall = 1.95 ** 2;

// data1 = markWeight / markTall > johnWeight / johnTall;

// console.log(markWeight, markTall, johnWeight, johnTall);
// let markHigherBMI = data1;

// console.log(markHigherBMI);

//assign 2
/* Write your code below. Good luck! 🙂 */

let scoreDolphins =  ((96 + 108 + 89) / 3);
let scoreKoalas = ((88 + 91 + 110) / 3);

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

//assign 4
const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

let totalValue = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);