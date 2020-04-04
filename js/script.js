'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));

};
start();

let exp = [];
let expam = [];

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500,
    period: 2,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            exp[i] = prompt('Введите обязательную статью расходов?');
            do {
                expam[i] = prompt('Во сколько это обойдется?');
                appData.expenses[exp[i]] = parseFloat(expam[i]);
            } while (!isNumber(expam[i]));

        }

    },

    getExpensesMonth: function () {

        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
        return appData.expensesMonth;
    },

    getBudget: function () {

        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);

    },

    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;
    },

    getStatusIncome: function () {
        if (appData.budgetDay > 20) {
            console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay <= 20 && appData.budgetDay > 10) {
            console.log('У вас средний уровень дохода');
        } else if (appData.budgetDay <= 10 && appData.budgetDay >= 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay < 0) {
            console.log('Что то пошло не так');
        }
    }

};


appData.asking();

console.log(exp);
console.log('Расходы за месяц: ' + appData.getExpensesMonth());
console.log(appData.addExpenses);

appData.getBudget();


if (appData.getTargetMonth() < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяц(-а, -ев)');
}

console.log('Бюджет на день: ', appData.budgetDay);

appData.getStatusIncome();

console.log('"Наша программа включает в себя данные: "');
for (let key in appData) {
    console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
}