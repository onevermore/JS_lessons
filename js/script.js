'use strict';

//Два класса, First и Second, Second наследует от First .

class First {

   hello () {
       console.log('Привет я метод родителя!');
   } 
}


class Second extends First {

    hello () {
        super.hello();
        console.log('А я наследуемый метод!');
    } 
}


const sec= new Second();
sec.hello();