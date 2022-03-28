console.log('Модуль 1');
// Репета
// ---------------------------------------------------------
// напеши скрип, який просить користувача вести число і степень

// let base = prompt('Число');
// base = Number(base);
// console.log(base);

// let power = prompt('степнь');
// power = Number(power);
// console.log(power);

// console.log(base ** power);

// ---------------------------------------------------------
// генеруємо псевдо випадкове число

// const max = 100;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// ---------------------------------------------------------
// змінюємо фон рондомно

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length-1;
// const min = 0;
// const index= Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// document.body.style.backgroundColor = color;
// console.log(color);

// ---------------------------------------------------------
// опеатор ветления if .... else

// if (5> 30) {
//     console.log('x > y');
// }
// else { console.log('x < y'); }


// ---------------------------------------------------------
// опеатор ветления else....if

// const salary = 100;
// if (salary <= 500) {
//     console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('Уровень 2');
// } else if (salary > 1500 && salary <= 3000) {
//     console.log('Уровень 3');

// } else {
//     console.log('Уровень 4');
// }
// ---------------------------------------------------------
// тернанрний оператор

// const balance = -1000;

// const message = balance >= 0?"Позитивний баланс": 'Негативний баланс';
// console.log(message);
// ---------------------------------------------------------
// switch

// const stars =5;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//      case 2:
//         price = 30;
//         break;
    
//      case 3:
//         price = 50;
//         break;
    
//      case 4:
//         price = 70;
//         break;
    
//      case 5:
//         price = 1200;
//         break;
    
//     default:
//         console.log("Такого кол-ва звезд нет");
// }
// console.log(price);


// ---------------------------------------------------------
// switch

// const stars =4;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
     
//     case 3:
//     case 4:
//         price = 50;
//         break;
    
//      case 5:
//         price = 1200;
//         break;
    
//     default:
//         console.log("Такого кол-ва звезд нет");
// }
// console.log(price);

// ---------------------------------------------------------
// const option = 3;
// let message;


// switch (option) {
//     case 1:
//         message = 'Вы сможите забрать товар завтра с 12:00 в нашем офисе';
//         break;
//       case 2:
//         message = 'Курьер доставит заказа завтра';
//         break;
//       case 3:
//         message = 'Посилка будет отрпавлена сегодня';
//         break;
//     default:
//         message='Вам перезвонит менеджер'
// }

// console.log(message);

// ---------------------------------------------------------
//  цикл for
// for (let i = 0; i <= 100; i += 1){
//     console.log(i);

// }
// console.log("qweqwe");


// ---------------------------------------------------------
//  * Напиши скрипт который подсчитывает общую сумму зарплат работников.
//  * Кол-во работников хранится в перемнной employees.
//  * Зарплата каждого работника это случайное число от 500 до 5000
//  * Записать сумму в переменную totalSalary и вывести в консоль
 
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );

//     console.log(`Зп роботника номер ${i}-${salary}`);

//     totalSalary += salary;
   
// }
// console.log('totalSalary:', totalSalary);
 
// ---------------------------------------------------------

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1){
//     if (i % 2 !== 0) {
//         console.log('Не чётное:', i)
//         continue;
//     }
//     console.log('чётное:', i)
//     total += i;
// }

//         console.log('total:',total)

// ---------------------------------------------------------