'use strict';

let money = +prompt('Ваш месячный доход?');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую') ;
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500;
let period = 2;
let exp1 = prompt('Введите обязательную статью расходов?');
let am1 = +prompt('Во сколько это обойдется?');
let exp2 = prompt('Введите обязательную статью расходов?');
let am2 = +prompt('Во сколько это обойдется?');

/* Вывожу в консоль тип данных значений переменных money, income, deposit; */
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

/* Вывожу в консоль длину строки addExpenses */
console.log(addExpenses.length);

/* Вывожу в консоль “Период равен (period) месяцев” и “Цель заработать (mission) долларов” */
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');

/* Привожу строку addExpenses к нижнему регистру */
addExpenses = addExpenses.toLowerCase();

/* Разбиваю строку на массив и массив в консоль */
let arr= addExpenses.split(', ');  
console.log( arr) ;

let budgetMonth = money-am1-am2;
let months = Math.ceil( mission / budgetMonth );

console.log('Бюджет на месяц: ', budgetMonth);
console.log('Кол-во месяцев для достижения цели: ', months);

/* Объявить переменную budgetDay, присвоить ей дневной бюджет и вывести в консоль */
let budgetDay = Math.floor( budgetMonth/ 30 );
console.log('Бюджет на день: ', budgetDay);

if (budgetDay>20) {
    console.log('У вас высокий уровень дохода'); 
 } 
 else if (budgetDay<=20 && budgetDay>10) {
     console.log('У вас средний уровень дохода'); 
 }
 else if (budgetDay<=10 && budgetDay>=0) {
     console.log('К сожалению у вас уровень дохода ниже среднего'); 
 }
 else if (budgetDay<0) {
     console.log('Что то пошло не так');
 }