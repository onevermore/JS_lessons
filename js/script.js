'use strict';

let isNumber = function (n) {   
    return !isNaN(parseFloat(n)) && isFinite(n)   ;
};

let money; 
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую') ;
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500;
let period = 2;


let start = function () {
do {
    money = prompt('Ваш месячный доход?'); 
} while (!isNumber(money));

};
start();


let showTypeOf = function(data) {
   console.log( data, typeof(data) ); 
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let exp = [];
let expam = [];

const getExpensesMonth = function(){
   
let sum = 0;

for (let i = 0; i < 2; i++) {
   exp[i] =  prompt('Введите обязательную статью расходов?');
   
    do {   
        expam[i] =  prompt( 'Во сколько это обойдется?' ); 
    } while (!isNumber(expam[i])); 

    sum += parseFloat(expam[i]);    
}
    return sum; 
};

console.log(exp);

let expensesAmount = getExpensesMonth();

//Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function(){
   return money - expensesAmount;
};


console.log('Расходы за месяц: ' + expensesAmount);

let accumulatedMonth = getAccumulatedMonth();

//Подсчитывает за какой период будет достигнута цель (в месяцах)
const getTargetMonth = function(){
   // return Math.ceil( mission / accumulatedMonth );
   return  mission / accumulatedMonth ;
};


/* Привожу строку addExpenses к нижнему регистру */
addExpenses = addExpenses.toLowerCase();

/* Разбиваю строку на массив и массив в консоль */
let arr = addExpenses.split(', ');  
console.log( arr ) ;

if (getTargetMonth() < 0 ) {
console.log('Цель не будет достигнута');
    }
else { 
    console.log( 'Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяц(-а, -ев)');
   }


/* Объявить переменную budgetDay, присвоить ей дневной бюджет и вывести в консоль */
let budgetDay =  accumulatedMonth / 30 ;
    console.log('Бюджет на день: ', Math.floor( accumulatedMonth / 30 ));

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

