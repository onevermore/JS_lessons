
let money = 1600;
let income = 'фриланс';
let addExpenses = 'Интернет, автобусы, кафешки';
let deposit = true;
let mission = 500;
let period = 2;

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
for (let i = 0; i < addExpenses.length; i++) {
    console.log( addExpenses[i]) ;
}

/* Объявить переменную budgetDay, присвоить ей дневной бюджет и вывести в консоль */
let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

