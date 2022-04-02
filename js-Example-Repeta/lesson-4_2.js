/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//     console.log(('number', number));

// });
//     console.log((numbers));
// ===============================================================

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(numbers => {
//     return numbers * 3;
// });
// console.log('numbers', numbers);
// console.log('doubledNums',doubledNums);

// ================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
 /*
 * Получаем массив имён всех игроков
 */
// console.table(players);

// const playerNames = players.map(player => {
//     console.log(players);
//     return player.name;
// });
// console.log('playerNames',playerNames);


// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);


// const res = players.map(({ name, points }) => ({ name, points }));
// console.log('res',res);
/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */


// const upatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
// }));
// console.log(upatedPlayers );

// ============================================================
/*
 * Увеличиваем кол-во часов игрока по id
 */
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     }
//         return player;
// });
// // const updatedPlayers = players.map(player =>
// //   playerIdToUpdate === player.id
// //     ? { ...player, timePlayed: player.timePlayed + 100 }
// //     : player,
// // );/
// console.table(updatedPlayers);
// ======================================================
/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log('filteredNumbers',filteredNumbers);
// console.log('numbers',numbers);




// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Получаем массив всех онлайн игроков
 */

// const onlinePlayers = players.filter(player => player.online);
// console.log(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */


// const offlinePlayers = players.filter(player => !player.online);
// console.log(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.log(hardcorePlayers);
// console.table(hardcorePlayers);


// ====================================================================
/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */


// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(number => number === 10);
// console.log(number);
// ====================================================================

/*
 * Ищем игрока по id
 */

// const playerIdToFind = 'player-3';
// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);



/*
 * Ищем игрока по имени
 */

// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);


// =====================================================


// const finPlayerById = (allPlayers, playerId) => {
//     return allPlayers.find(({ id }) => id === playerId);
// };
// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));
// =======================================================





// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */
// const isAllOnline = players.every(({id}) => id.online);
// console.log(isAllOnline);


/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

// const isAnyOnline = players.some(players => players.online);
// console.log(isAnyOnline);



// const anyHardcorePlayers  = players.some(players => players.timePlayed>400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
// ==================================================================

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */
// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);

// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];


// const totalTimePlayed = players.reduce(
//     (totalTime, player) => totalTime + player.timePlayed,
//     0);
// console.log(totalTimePlayed);
// ===========================================================

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce(
//     (total,{ price, quantity })=> total + price * quantity,
//         0,);
// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], [])

// console.log(allTags);

/*
 * Ведём статистику тегов
 */
// *********var-1;
// const tagsStats = allTags.reduce((acc, tag) => {


//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }

//     acc[tag] = 1;
//     return acc;

// }, {});
// console.log(tagsStats);

// *********var-2;

// const tagsStats = allTags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1
// --------------------------------------------------
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73]
// const evenNumbers = numbers.filter(number=>number % 2===0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
// =================================================================
// const users = 
//   [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];
// length


// const getTotalBalanceByGender = (users, gender) =>
//   users.filter(a=>a.gender===gender)
// .reduce((index,user)=>user.balance+index,0)

// ;

      

// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));
// =================================================================


