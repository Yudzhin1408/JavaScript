// ======================Массивы==============

// /*
//  * Посчитать общую сумму покупок в корзине
//  */
// // const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // let total = 0;

// // *------var-1

// // for (let i = 0; i < cart.length; i += 1){
// //     console.log(cart[i]);
// //     total += cart[i];
// // }
// // console.log('Total', total);

// // ------var-2

// // for (const value of cart) {
// //     total += value;
// // }

// // console.log('Total', total);

// // ------var-3

// //Добавить такс
// // for (let i = 0; i < cart.length;i+=1 ){
// //     cart[i] = Math.round(cart[i] * 1.1);
// // }
// // console.log(cart);
// // console.table(cart);

// // ============================================================
// /*
//  * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
//  */

// // const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// // let total = 0;

// // ------var-1

// // for (let i = 0; i < numbers.length; i += 1){
// //     const number = numbers[i];
// //     console.log(number);
// //     if (number % 2 === 0) {
// //         console.log('четное');
// //         total += number;
// //     }
// // }
// // console.log('Total:', total);

// // ------var-2

// // for (const number of numbers) {
// //     console.log(number);

// //      if (number % 2 === 0) {
// //         console.log('четное');
// //         total += number;
// //     }
// // }
// // console.log('Total:', total);


// // ============================================================

// /*
//  * Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
//  *
//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором
//  */


// // const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// // const loginToFind = 'aj4xth3m4n';
// // let message = `Пользователь ${loginToFind} не найден.`;

// // ------var-1

// // for (let i = 0; i < logins.length; i += 1){
// //     const login = logins[i];
// //     // console.log(logins[i]);
// //     if (login === loginToFind) {
// //         console.log('Ура, равны!!!');
// //         message = `Пользователь ${loginToFind} найден.`
// //         break;
// //     }
// // }
// // console.log(message);

// // ------var-2

// // for (const login of logins) {
// //     if (login === loginToFind) {
// //         console.log('Ура, равны!!!');
// //         message = `Пользователь ${loginToFind} найден.`
// //         break;
// //     }
// // }
// // console.log(message);

// // ------var-2

// const messageNev = logins.includes(loginToFind)?`Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// console.log(messageNev);

// ============================================================

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19,1];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//       }
// }

// console.log('smallestNumber',smallestNumber);

// ============================================================

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
 
// // ------var-1

// // for (const friend of friends) {
// //     string += friend + ',';
// // }
// // string = string.slice(0, string.length - 1);
// // console.log(string);

// // ------var-2

// const stringNev = friends.join(',');
// console.log(friends);
// console.log(stringNev);

// ==============================================================


//  * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
//  * Например, если строка «JavaScript», то на выходе
//  должена быть строка «jAVAsCRIPT».
//  */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// ------var-1

// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('Эта буква в нижнем регистре!!! - ', letter);
//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('Эта буква в верхнет регистре!!! - ', letter);
//         invertedString += letter.toLowerCase();
// }

// }
// console.log('invertedString', invertedString);


// ------var-2

// for (const letter of letters) {
//     console.log(letter);
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ?letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('invertedString', invertedString);

// ==============================================================

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
//  */

// const title = 'Top 10 benefits of React framework';

// // ------var-1
// const normaLizedTitele = title.toLowerCase();
// console.log(normaLizedTitele);

// const words = normaLizedTitele.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// // ------var-2
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// ==============================================================

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers);

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// ==============================================================
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);
/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'Обновленаная карточка-4');
// console.table(cards);

