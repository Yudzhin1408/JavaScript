// =============Модуль 2. Занятие 3. Массивы==============================

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива.
// Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.



// const genres = ['Jazz', 'Blues'];
// console.log(genres);

// genres.push('Рок-н-ролл');
// console.log(genres);

// console.log(genres[0], genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres);

// genres.unshift('Country', 'Reggy');
// console.log(genres);


// ====================================================================

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const numders = values.split(' ');
// console.log(numders);

// const a = Number(numders[0]);
// const b = Number(numders[1]);

// const s = a * b;
// console.log('s=', s,);
// ====================================================================
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
//  Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1){
//     console.log(`${i+1}:${fruits[i]}`);
// }

// ====================================================================

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1){
//     console.log(`${namesArr[i]} ${phonesArr[i]}`);
    
// }
// ====================================================================
 // Example 5 - Массивы и строки
 // Напиши скрипт который выводит в консоль все слова
//  строки кроме первого и последнего.
//  Результирующая строка не должна начинаться или заканчиваться пробельным
// символом.Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

// const stringArr = string.split(' ');
// console.log(stringArr);

// stringArr.shift();
// console.log(stringArr);

// stringArr.pop();
// console.log(stringArr);

// console.log(stringArr.join(' '));
// ====================================================================

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// const stringArr = string.split('');
// console.log(stringArr);

// const stringRevers = stringArr.reverse();
// console.log(stringRevers);

// const stringJoin = stringRevers.join('');
// console.log(stringJoin);


// ====================================================================


// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.


// *****var-1
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);

// for (let i = 0; i < langs.length; i += 1){
//     for (let j = i + 1; j < langs.length; j += 1){
//         const a = langs[i];
//         const b = langs[j];
//         const temp = a;
//         if (b[0] < a[0]) {
//             langs[i] = langs[j];
//             langs[j] = temp;
//         }
//     }

// }
//   console.log(langs);



// *****var-2

// const numbers = [9, 8, 7, 6, 1, 2, 3, 4, 5, 11, 10];
// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1){
//     for (let j = i + 1; j < numbers.length; j += 1){
//         const a = numbers[i];
//         const b = numbers[j];
//         const temp = a;
//         if (b < a) {
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }

// }
//   console.log(numbers);

// ====================================================================
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }

//     for (const number of numbers) {
//         if (number > max) {
//             max = number;
//         }


//     }
   
// }

// console.log(min); // 1
//     console.log(max); // 1
    