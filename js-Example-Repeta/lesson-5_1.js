// /*
//  * Методы объекта и this при обращении к свойствам в методах
//  *
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
//  *
//  * - changeName
//  * - addTrack
//  * - updateRating
//  * - getTrackCount
//  */
// const playList = {
//     name: 'Мой супер лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],

//     changeName(nevName) {
//         console.log('this внутри changeName: ', this);
//         this.name = nevName;
//     },

//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },

// };

// console.log(playList.getTrackCount());

// playList.changeName('Новое имя');

// playList.addTrack('Новый трек 1');
// console.log(playList.getTrackCount());

// playList.addTrack('Новый трек 2');
// console.log(playList.getTrackCount());

// playList.updateRating(4);

// console.log(playList);


// ==================================================================


/*
 * Перебор через for...in и Object.keys|values|entries
 */

// ----var 1

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
    
// }
// console.log('totalFeedback: ', totalFeedback);

// ----var 2

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
//     totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);


// ==================================================================

/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);
/*
 * Ищем друга по имени
 */

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {

    //     console.log(friend);
    // console.log(friend.name);

//         if (friend.name === friendName) {
//             return `Нашли -${friendName}`;
//         }
//     }
//     return `Не нашли!!!-${friendName}`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


/*
 * Получаем имена всех друзей
 */


// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friends of allFriends) {
//         console.log(friends.name);

//         names.push(friends.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends));


/*
 * Получаем имена только друзей которые онлайн
 */
// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of friends) {
//         // console.log(friend);
//         // console.log(friend.online);
//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// };
// console.log(getOnlineFriends(friends));


/*
 * создать 2 массива онлайн и офлайн?
если тру - в первый, если нет - во второй
 */

// const getFriendsByStatus = function (allFriends) {
//     const friendsByAtatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByAtatus.online.push(friend);
//             continue;
//         }
//         friendsByAtatus.offline.push(friend);
//     }
//     return friendsByAtatus;
// };

// console.log(getFriendsByStatus(friends));


// ==================================================================