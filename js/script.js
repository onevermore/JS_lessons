'use strict';

const books = document.querySelectorAll('.book');

//Восстановить порядок книг.
books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);

console.log('books: ', books);

//Заменить картинку заднего фона на другую из папки image

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

let header = document.querySelectorAll('h2 a')[2];
header.textContent = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы
const adv = document.querySelector('.adv');
adv.remove();

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

let book2 = document.querySelectorAll('ul')[1];
let book2Menu = book2.querySelectorAll("li");

book2Menu[2].before(book2Menu[3]);
book2Menu[2].before(book2Menu[6]);
book2Menu[2].before(book2Menu[8]);
book2Menu[2].before(book2Menu[4]);
book2Menu[9].after(book2Menu[2]);

let book5 = document.querySelectorAll('ul')[4];
let book5Menu = book5.querySelectorAll("li");

book5Menu[1].after(book5Menu[9]);
book5Menu[4].after(book5Menu[2]);
book5Menu[7].after(book5Menu[5]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

 const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

let book6 = document.querySelectorAll('ul')[5];
let book6Menu = book6.querySelectorAll("li");

book6Menu[8].after(newChapter);




