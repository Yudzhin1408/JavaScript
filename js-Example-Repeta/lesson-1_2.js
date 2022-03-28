console.log('Модуль 1');

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

//  1 вары
let balance = 10000;
const payment = 2000;
console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`)

if (payment <= balance) {
    console.log('ok')

    balance -= payment;
    console.log('Все хорошо, снимаем деньги... Спасибо за покупку!')
    console.log(`На счету осталось ${balance} кредитов`)
}else{
    console.log('На счету недостаточно средств для проведения операции!')



}
console.log('Операция завершена');
    

// ===============================================================================
console.log('Модуль 1');

/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */
// let totalSpent = 2000;
// let payment =500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;

// } else if(totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебрянный партнер, скидка 5%');
//     discount = 0.05;

// } else if(totalSpent >= 5000) {
//     console.log('Золотой партнер, скидка 10%');
//     discount = 0.1;

// } else {
//     console.log('Не партнёр, скидка 0%');
    
// }

// payment -= payment * discount;

// console.log(` «Оформляем заказ на сумму ${payment} со скидкой
//  ${discount * 100}%`)

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);

// --------------------------------------------------



// const btnAdd = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outrotEl=document.querySelector('.js-output span')

// let total = 0;

// btnAdd.addEventListener('click', function() {
//     console.log('click heheheheheh');

//     const value = Number(valueInput.value);

    

//     total += value;
//     outrotEl.textContent = total;
    
//     valueInput.value = '';
// })

// resetBtn.addEventListener('click', function () {
//     outrotEl.textContent = 0;
// })



