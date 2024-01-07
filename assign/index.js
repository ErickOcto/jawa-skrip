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

// let scoreDolphins =  ((96 + 108 + 89) / 3);
// let scoreKoalas = ((88 + 91 + 110) / 3);

// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy");
// } else {
//     console.log("Both win the trophy");
// }

//assign 4
// const bill = 275;

// /* Write your code below. Good luck! 🙂 */

// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// let totalValue = bill + tip;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
// );

//assign 5
// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// const scoreDolphins = calcAverage(300, 300, 300);
// const scoreKoalas = calcAverage(65, 54, 49);
   
// const checkWinner = (avgDolphins, avgKoalas) => {
//     if(avgDolphins > avgKoalas * 2){
//         const checking = console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
//         return checking;
//     }else if(avgKoalas > avgDolphins * 2){
//         const checking = console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
//         return checking;
//     }else{
//         const checking = console.log('No Team wins...');
//         return checking;
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

//assign 6
// const calcTip = (bills) => {
//   const tip =
//     bills >= 50 && bills <= 300 ? (bills * 15) / 100 : (bills * 20) / 100;
//   return tip;
// };
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];
// console.log(bills);
// console.log(tips);
// console.log(totals);

//assign 7
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!)`
//   );
// }