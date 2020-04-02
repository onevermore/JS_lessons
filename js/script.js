'use strict';

let money = +prompt('Ваш месячный доход?');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую') ;
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500;
let period = 2;
let exp1 = prompt('Введите обязательную статью расходов?','еда');
let am1 = +prompt('Во сколько это обойдется?', 100 );
let exp2 = prompt('Введите обязательную статью расходов?', 'бензин');
let am2 = +prompt('Во сколько это обойдется?', 150);

let showTypeOf = function(data) {
   console.log( data, typeof(data) ); 
};

/* тип данных значений переменных money, income, deposit; */
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let a;

const getExpensesMonth = function(amount1, amount2){
    a = amount1 + amount2; 
    return a; 
};

getExpensesMonth( am1, am2 );

const getAccumulatedMonth = function(){
   return money - a;
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(){
    return Math.ceil( mission / accumulatedMonth );
};

/* Привожу строку addExpenses к нижнему регистру */
addExpenses = addExpenses.toLowerCase();

/* Разбиваю строку на массив и массив в консоль */
let arr = addExpenses.split(', ');  
console.log( arr ) ;

console.log( 'Кол-во месяцев для достижения цели: ', getTargetMonth() );

/* Объявить переменную budgetDay, присвоить ей дневной бюджет и вывести в консоль */
let budgetDay = Math.floor( accumulatedMonth / 30 );
console.log('Бюджет на день: ', budgetDay);


let getStatusIncome = function() {
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
};

getStatusIncome();

