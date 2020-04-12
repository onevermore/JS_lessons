'use strict';

//Кнопку "Рассчитать" через id
const btn1 = document.getElementById('start');

const btnPlus = document.getElementsByTagName('button');

let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];

const checkBox = document.querySelector('#deposit-check');

const addIncomeItem = document.querySelectorAll('.additional_income-item');

const budgetMonthV = document.querySelector('.budget_month-value');
const budgetDayV = document.querySelector('.budget_day-value');
const expensesMonthV = document.querySelector('.expenses_month-value');
const addIncomeV = document.querySelector('.additional_income-value');
const addExpensesV = document.querySelector('.additional_expenses-value');
const incomePeriodV = document.querySelector('.income_period-value');
const targetMonthV = document.querySelector('.target_month-value');

const incItems = document.querySelector('.income-items');
const incomeTitle = incItems.querySelector('.income-title');

let incomeItems = document.querySelectorAll('.income-items');

const expTitle = document.querySelector('.expenses-items');
const expensesTitle = expTitle.querySelector('.expenses-title');


let expensesItems = document.querySelectorAll('.expenses-items');
const addExpensesItem = document.querySelector('.additional_expenses-item');

const targetAmount = document.querySelector('.target-amount');
const salaryAmount = document.querySelector('.salary-amount');
const period = document.querySelector('[type="range"]');
let periodValue = document.querySelector('.period-amount');


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let exp = [];
let expam = [];

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    incomeMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {
       
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();

    },

    showResult: function () {

        budgetMonthV.value = appData.budgetMonth;
        budgetDayV.value = appData.budgetDay;
        expensesMonthV.value = appData.expensesMonth;
        addExpensesV.value = appData.addExpenses.join(', ');
        addIncomeV.value = appData.addIncome.join(', ');
        targetMonthV.value = Math.ceil(appData.getTargetMonth());
        incomePeriodV.value = appData.calcSavedMoney();
        period.addEventListener('input', function () {
            incomePeriodV.value = appData.calcSavedMoney();
        });




    },



    addExpensesBlock: function () {

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },


    getExpenses: function () {

        expensesItems.forEach(function (item) {

            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });

    },


    getAddExpenses: function () {
        let addExpenses = addExpensesItem.value.split(',');

        addExpenses.forEach(function (item) {
            item = item.trim();

            if (item !== '') {
                appData.addExpenses.push(item);
            }

        });

    },


    addIncomeBlock: function () {

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },

    getIncome: function () {

        incomeItems.forEach(function (item) {

            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });

        for (const key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }

    },


    getAddIncome: function () {
        addIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function () {

        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth;
    },

    getBudget: function () {

        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);

    },

    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
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
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            while (!isNumber(appData.percentDeposit) || appData.percentDeposit.trim() === '' || appData.percentDeposit === null);

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 200);

            } while (!isNumber(appData.moneyDeposit));


        }
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * period.value;
    },
    changePeriod: function () {
        periodValue.textContent = period.value;
    }

};


btn1.addEventListener('click', function (event) {
   if (salaryAmount.value === ''){
    event.preventDefault();
   }
   else {
   appData.start();
   }
});

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
period.addEventListener('input', appData.changePeriod);


