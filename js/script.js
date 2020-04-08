'use strict';

//Кнопку "Рассчитать" через id
const btn1 = document.getElementById('start');
console.log('btn1: ', btn1);

//Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
const plus1 = document.getElementsByTagName('button')[0];
console.log('plus1: ', plus1);
const plus2 = document.getElementsByTagName('button')[1];
console.log('plus2: ', plus2);

//Чекбокс по id через querySelector
const checkBox = document.querySelector('#deposit-check');
console.log('checkBox: ', checkBox);

//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const addIncome1 = document.querySelectorAll('.additional_income-item')[0];
console.log('addIncome1: ', addIncome1);
const addIncome2 = document.querySelectorAll('.additional_income-item')[1];
console.log('addIncome2: ', addIncome2);

//Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value"
const budgetMonth = document.querySelector('.budget_month-value');
console.log('budgetMonth: ', budgetMonth);
const budgetDay =  document.querySelector('.budget_day-value'); 
console.log('budgetDay: ', budgetDay);
const expenses =  document.querySelector('.expenses_month-value'); 
console.log('expenses: ', expenses);
const income =  document.querySelector('.additional_income-value'); 
console.log('income: ', income);
const addExpense =  document.querySelector('.additional_expenses-value'); 
console.log('addExpense: ', addExpense);
const incomePeriod =  document.querySelector('.income_period-value'); 
console.log('incomePeriod: ', incomePeriod);
const targetMonth =  document.querySelector('.target_month-value'); 
console.log('targetMonth: ', targetMonth);

//Оставшиеся поля через querySelector каждый в отдельную переменную:
//поля ввода (input) с левой стороны и не забудьте про range.

const incItems = document.querySelector('.income-items');
const incomeTitle = incItems.querySelector('.income-title');
console.log('incomeTitle: ', incomeTitle);

const incomeAmount = document.querySelector('.income-amount');
console.log('incomeAmount: ', incomeAmount);

const expensesTitle = document.querySelector('.expenses-title');
console.log('expensesTitle: ', expensesTitle);
const expensesAmount = document.querySelector('.expenses-amount');
console.log('expensesAmount: ', expensesAmount);

const addExpenses = document.querySelector('.additional_expenses-item');
console.log('addExpenses: ', addExpenses);
const targetAmount = document.querySelector('.target-amount');
console.log('targetAmount: ', targetAmount);

const period = document.querySelector('[type="range"]');
console.log('period: ', period);




