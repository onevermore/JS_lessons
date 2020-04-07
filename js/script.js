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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500,
    period: 2,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {


        if (confirm('Есть ли у Вас дополнительный источник заработка?')) {

            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }
            while ( isNumber(itemIncome) || itemIncome.trim() === '' || itemIncome === null   );
          

           let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 300);
            } while (!isNumber(cashIncome));


            appData.income[itemIncome] = cashIncome;
        }



        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');

        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
           
            do {
                exp[i] = prompt('Введите обязательную статью расходов?');
            }
            while ( isNumber(exp[i]) || exp[i].trim() === '' || exp[i] === null   );

            do {
                expam[i] = prompt('Во сколько это обойдется?');

            } while (!isNumber(expam[i]));
            appData.expenses[exp[i]] = parseFloat(expam[i]);
        }

    },

    getExpensesMonth: function () {

        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
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
    },

    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            while (!isNumber(appData.percentDeposit) || appData.percentDeposit.trim()=== '' || appData.percentDeposit ===null);

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 200);

            } while (!isNumber(appData.moneyDeposit));
            
            
        }
    },

    calcSavedMoney: function (params) {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(exp);
console.log('Расходы за месяц: ' + appData.expensesMonth);


for (let i = 0; i < appData.addExpenses.length; i++) {
   let s = appData.addExpenses[i];
   appData.addExpenses[i] = s[0].toUpperCase () + s.substr (1).toLowerCase ();   
}

let sent = appData.addExpenses.join(', ');  
console.log('Возможные расходы: ', sent);
//console.log(appData.addExpenses);


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

appData.getInfoDeposit();
//console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());