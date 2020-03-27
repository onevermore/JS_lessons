
let money = 1600;
let income = 'фриланс';

let addExpenses = 'Интернет, автобусы, кафешки';
let deposit = true;
let mission = 500;
let period = 2;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');

addExpenses = addExpenses.toLowerCase();

for (let i = 0; i < addExpenses.length; i++) {
    console.log( addExpenses[i]) ;
}

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);


