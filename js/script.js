'use strict';

//Кнопку "Рассчитать" через id
const btn1 = document.getElementById('start');
const cancelBtn = document.getElementById('cancel');

const btnPlus = document.getElementsByTagName('button');

let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];

const depositCheckBox = document.querySelector('#deposit-check');
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



const AppData = function () {
 
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.incomeMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;  

};


AppData.prototype.start = function () {
       
    if (salaryAmount.value === ''){
        return;
       }
       else {
    this.budget = + salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult(); 

    let dataaa = document.querySelectorAll('.data [type=text]');

   dataaa.forEach(function (item) {
     item.disabled = true;
    }, this);
    btn1.style.display = 'none';
    cancelBtn.style.display = 'block';      
 }
};





AppData.prototype.showResult= function () {
    const _this = this;
    budgetMonthV.value = this.budgetMonth;
    budgetDayV.value = this.budgetDay;
    expensesMonthV.value = this.expensesMonth;
    addExpensesV.value = this.addExpenses.join(', ');
    addIncomeV.value = this.addIncome.join(', ');
    targetMonthV.value = Math.ceil(this.getTargetMonth());
    incomePeriodV.value = this.calcSavedMoney();
    period.addEventListener('input', function () {    
       incomePeriodV.value = _this.calcSavedMoney();
    });

};

AppData.prototype.reset= function () {
cancelBtn.style.display = 'none';
btn1.style.display = 'block';

let allData = document.querySelectorAll('[type=text]');
period.value=1;
periodValue.textContent = period.value;
depositCheckBox.checked = false;
allData.forEach(function (item) {
    item.disabled = false;
    item.value = '';
   }, this);


   let lenInc = incomeItems.length;
while (lenInc>1) {
incomeItems[lenInc-1].remove();
   lenInc--;
}
incomePlus.style.display = 'block';

  
let lenExp = expensesItems.length;
while (lenExp>1) {
expensesItems[lenExp-1].remove();
   lenExp--;
}
expensesPlus.style.display = 'block';

   this.income = {};
   this.addIncome = [];
   this.expenses = {};
   this.addExpenses = [];
   this.budget = 0;
   this.budgetDay = 0;
   this.budgetMonth = 0;
   this.expensesMonth = 0;
   this.incomeMonth = 0;
   this.deposit = false;
   this.percentDeposit = 0;
   this.moneyDeposit = 0;
  
};

AppData.prototype.addExpensesBlock= function () {

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};


AppData.prototype.getExpenses= function () {

    expensesItems.forEach(function (item) {

        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = cashExpenses;
        }
    }, this);

};


AppData.prototype.getAddExpenses= function () {
    let addExpenses = addExpensesItem.value.split(',');

    addExpenses.forEach(function (item) {
        item = item.trim();

        if (item !== '') {
            this.addExpenses.push(item);
        }

    }, this);

};


AppData.prototype.addIncomeBlock= function () {

    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};

AppData.prototype.getIncome= function () {

    incomeItems.forEach(function (item) {

        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            this.income[itemIncome] = cashIncome;
        }
    }, this);

    for (const key in this.income) {
        this.incomeMonth += +this.income[key];
    }

};


AppData.prototype.getAddIncome= function () {
    addIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
    }, this);
};

AppData.prototype.getExpensesMonth= function () {

    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
  
    return this.expensesMonth;
};

AppData.prototype.getBudget= function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;     
    this.budgetDay = Math.floor(this.budgetMonth / 30);

};

AppData.prototype.getTargetMonth= function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome= function () {
    if (this.budgetDay > 20) {
        console.log('У вас высокий уровень дохода');
    } else if (this.budgetDay <= 20 && this.budgetDay > 10) {
        console.log('У вас средний уровень дохода');
    } else if (this.budgetDay <= 10 && this.budgetDay >= 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay < 0) {
        console.log('Что то пошло не так');
    }
};

AppData.prototype.getInfoDeposit= function () {
   // appData.deposit = confirm('Есть ли у вас депозит в банке?');
    if (this.deposit) {
        do {
            this.percentDeposit = prompt('Какой годовой процент?', '10');
        }
        while (!isNumber(this.percentDeposit) || this.percentDeposit.trim() === '' || this.percentDeposit === null);

        do {
            this.moneyDeposit = prompt('Какая сумма заложена?', 200);

        } while (!isNumber(this.moneyDeposit));
    }
};

AppData.prototype.calcSavedMoney= function () {
    return this.budgetMonth * period.value;
};


AppData.prototype.eventListeners = function () {


btn1.addEventListener('click', this.start.bind(this) );
cancelBtn.addEventListener('click', this.reset.bind(this) );

expensesPlus.addEventListener('click', this.addExpensesBlock);
incomePlus.addEventListener('click', this.addIncomeBlock);
period.addEventListener('input', function () {
    periodValue.textContent = period.value;
});
    
};


const appData = new AppData ();
appData.eventListeners();

//console.log('appData: ', appData);


/*
for (let i = 0; i < appData.addExpenses.length; i++) {
   let s = appData.addExpenses[i];
   appData.addExpenses[i] = s[0].toUpperCase () + s.substr (1).toLowerCase ();   
}
*/

