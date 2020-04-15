'use strict';

/*
1) Сделать класс DomElement, который
   содержит свойства
  - selector, 
  - height, 
  - width, 
  - bg, 
  - fontSize */

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

//содержит метод, который создает элемент на странице в зависимости от условия:  
//- если строка selector начинается с точки, создаем div с классом
//- если строка selector  начинается с решетки # то создаем параграф с id

DomElement.prototype.createElem = function () {

    if (this.selector[0] === '.') {
        const div = document.createElement('div');
        div.classList.add(this.selector.substr(1));

        div.style.cssText = ' background-color:' + this.bg + ';' +
            'width: ' + this.width + ';' +
            'height: ' + this.height + ';' +
            'font-size: ' + this.fontSize + ';';

        div.innerHTML = 'This is div';
        document.body.append(div);

    } else if (this.selector[0] === '#') {
        const p = document.createElement('p');
        p.setAttribute('id', this.selector.substr(1) );
        p.style.cssText = ' background-color:' + this.bg + ';' +
            'width: ' + this.width + ';' +
            'height: ' + this.height + ';' +
            'font-size: ' + this.fontSize + ';';

        p.innerHTML = 'This is p';
        document.body.append(p);
    }
};

// Создать новый объект на основе класса DomElement
let elem1 = new DomElement('#elem', '50px', '100px', 'blue', '16px');

//Вызвать его метод чтобы получить элемент на странице
elem1.createElem();