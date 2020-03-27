let num = 266219;
let ar = [];
let m = 1;


for (let i = 0; i < 6; i++) {
    ar[i] = num % 10;
    num = Math.trunc( num / 10 );        
}

for (let i = 0; i < 6; i++) {
  m*=ar[i];     
}

console.log('Произведение чисел числа 266219: ', m);

m**=3;
console.log('Возвела в степень 3: ', m);


m = m + ''; 
console.log('Первые 2 цифры числа: ', m.substring(0 , 2) );

