//
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
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);
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

// ======================================================================

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

// ======================================================================

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

// ======================================================================

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

/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */
// const numders = [1, 2, 3].concat([4, 5, 6,], [7, 8,9]);

// const numders=[1000,...[1,2,3],5000,...[4,5,6],7000,...[7,8,9],9000,]

// console.log(numders);

/*
 * Поиск самой маленькой или большой температуры (числа)
//  */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(Math.min(...temps));
// console.log(temps);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a:', a);
// console.log('b:', b);

// console.log(a[0] === b[0]);
// console.log(a === b);


// a[0].x = 1000;

// console.log('a:', a);
// console.log('b:', b);


// ======================================================================

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// ======================================================================

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };


// const c = Object.assign({}, a, b);

// const c = { ...a, x: 10, ...b, y: 20, };

// console.log(c);
// // -----------------------------

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// ==================================================================


/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { rating, tracks, name, trackCount,autor='user'} = playlist;

// console.log(rating, tracks, name, trackCount,autor);

// ======================================================================

/*
 * Глубокая деструктуризация
 */



// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   locations: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   locations,
//   avatar,
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag,  avatar, followers, views, likes,locations);

// ==================================================================


/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);


// ---------------------



// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };


// const entries = Object.entries(authors);
// ***вар-1
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

// ***вар-2
// for (const entry of entries) {
//   const [name, rating] = entry;

//   console.log(name, rating);
// }

// ***вар-3
// for (const entry of entries) {
//   const name = entry[0];
//   const rating = entry[1];

//   console.log(name, rating);
// }
// ======================================================================

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location_1: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location_1, ...restProps } = profile;

// console.log(name, tag, location_1);
// console.log(restProps);
// console.log(profile);

// ======================================================================
/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */
// const showProfileInfo = function (userProfile) {
//   const { name, tag, location1, ...restProps } = userProfile;

//   console.log(name, tag, location1);
//   console.log(restProps);
// }


// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location1: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// ======================================================================
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const makeProfileMarkup = function (userProfile) {
//   const {
//     avatar = 'https://i.pravatar.cc/400?img=6',
//     name,
//     tag,
//     location = 'Planet Earth',
//     stats: { followers, views, likes },
//   } = userProfile;

//   return `<div>
//     <img src="${avatar}" alt="user avatar">
//     <p>${name}<span>@${tag}</span></p>
//     <p>Location: ${location}</p>
//     <ul>
//       <li>Followers: ${followers}</li>
//       <li>Views: ${views}</li>
//       <li>Likes: ${likes}</li>
//     </ul>
//   </div>`;
// };

// const markup = makeProfileMarkup(profile);

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);


// =======================================================================

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
  }
    }
    const newProduct = {
      ...product,
      quantity:1,
    }

    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      
      const { name } = items[i];

      if (productName === name) {
        console.log('нашли такой продукт', productName);
        console.log(i);
        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price,quantity } of items) {
      total += price*quantity;
    }
    return total;
  },

  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

cart.remove('🍎');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.clear();
console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());