// Модуль 5. Занятие 10. Прототипы и классы


// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// // Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.
// class User{
//     constructor({ name, age, numberOfPosts, topics }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//       return  `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
        
//     }
    
//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }

// };
// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ====================================================================================

// Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
// class Storage{
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
    
//     }

//     removeItem(removeItem) {
//        this.items= this.items.filter(item=>item!==removeItem)
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// // ====================================================================================

// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.
// class User{
//     #login;
//     #email;

//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(value) {
//         this.#login = value;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(value) {
//         this.#email = value;
//     }
    


// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ====================================================================================

// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };
//     constructor(items) {
//         this.items = items;
//     }
//     addNote(item) {
//         this.items.push(item);
//     }

//     removeNote(value) {
//         this.items = this.items.filter(({ text }) => text !== value);
//     }

//     updateNote(value, newPriority) {
//         this.items = this.items.map(item =>
//             item.text === value ?
//                 { ...item, priority: newPriority, } : item);
            
    
//     }

// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// // ====================================================================================

// Example 5 - Toggle
// Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). По умолчанию значение свойства on должно быть false.

// class Toggle{
//     constructor({isOpen=false}={}){
//         this.on = isOpen;
//     }

//     toggle() {
//         this.on = !this.on;
//     }
// }


// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// // ====================================================================================



// class Storage {
//     constructor(items ) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//      this.items.push(newItem);
//     }
    
//     removeItem(itemToRemove) {
//         this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
 
// };



// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// ====================================================================================
// class StringBuilder{
//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value;
//     }

//     padEnd(str) {
//         this.value+=str;
//     }

//     padStart(str) {
//         this.value=str+this.value
//     }

//     padBoth(str) {
//         this.value = str + this.value + str;

//     }
// }
     
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ====================================================================================
// class Car {
//   // Change code below this line
//   #price;
//     static MAX_PRICE= 50000;


//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//    set price(newPrice) {
//        if (newPrice >Car.MAX_PRICE) {
//            return ;
//        }
//        this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// console.log(Car.Roles.MAX_PRICE);
// ====================================================================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     };
    
//      blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//     blacklist(email) {
//    this.blacklistedEmails.push(email);
      
//     }
    
//     isBlacklisted(email) {
//         return this.blacklistedEmails.some(emai => emai === email);
      
//     }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



// ====================================================================================

