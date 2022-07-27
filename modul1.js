
// ## Example 1 - Запрос даних від користувача. if-else

// Написати код який запитає у користувача: 'Який ваш улюблений фільм Тарантіно?'
// Якщо відповідь "Pulp Fiction" - показати текст 'Вітаю фанатів класики!',
//  інакше - 'Передивіться Pulp Fiction!'
// Використайте prompt, alert
// Бажано щоб введена строка перевірялась незалежно від регістра літер(case-insensitive)


// const movieName = prompt('Який ваш улюблений фільм Тарантіно?');
// if (movieName.toLowerCase() === 'Pulp Fiction'.toLowerCase()) {
//   alert('Вітаю фанатів класики!');
// } else {
//   alert('Передивіться Pulp Fiction!');
// }

// default alert
// let response = 'Передивіться Pulp Fiction!';
// if (movieName.toLowerCase() === 'Pulp Fiction'.toLowerCase()) {
//   response = 'Вітаю фанатів класики!';
// }
// alert(response);

// ternary
// let response = movieName.toLowerCase() === 'Pulp Fiction'.toLowerCase()
    // ? 'Вітаю фанатів класики!'
//     : 'Передивіться Pulp Fiction!'


// const daysTillDeadline = 1;

// switch (daysTillDeadline) {
//   case 0:
//     console.error('Deadline is TODAY');
//     break;
//   case 1:
//     console.warn('Deadline is tomorrow');
//     break;
//   case 2:
//     console.log('2 days before deadline');
//     break;

//   default:
//     console.log('Relax, deadline is not there');
//     break;
// }
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.leavingArea =  60;
// apartment.countRooms = 3;
// apartment.locationCity = ["Jamaica"];
// apartment.locationCountry = ["Kingston"];
// console.log(apartment.leavingArea);
// console.log(apartment.countRooms);
// console.log(apartment.locationCity);
// console.log(apartment.locationCountry);


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// apartment.pageCount = 836;
// apartment.originalLanguage = "en";
// apartment.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment){
// keys.push(key);

// }
// for (const value in apartment){
// values.push(apartment[value]);
// }
// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const value of keys){
//   values.push(apartment[value]);
// }

// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
  
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;

//     } 
//   }
//   return propCount;
 
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
// }
// for (const color of colors) {
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

// for (const product of products){
//   if (productName === product.name){
//     return product.price;
//     console.log(product.price);
//   }
  
// }
// }
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {total = [];
//   for (const product of products){
//    if ( propName in product){  
//     console.log(product[propName]);
//    }
  
//     } return total;
//   }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   const total = 0;
//   for (const product of products) {
//     if (productName in product){
//       console.log(product[productName]);
//        total+= product.price * product.quantity;
//     }
//   }
//   console.log('total', total) 
//   } 

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
  
//   return  {
//       category: category,
//       priority: priority,
//       ...data,
//       completed: completed,
//     };
//   }
  
//   console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
//   console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//   console.log(makeTask({})); 
//{ category: "General", priority: "Normal", completed: false }

// Change code below this line
// function findMatches(args1, ...args2) {
//   const matches = []; 
//   for (const arg in args1){
//    if (args2.includes(args1[arg])){ 
//     matches.push(args1[arg]);
    
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// function getCommonElements(array1, array2) {
//   let commonElements = [];
//   for (let i=0; i <= array1.length; i+=1){
//     if (array2.includes(array1[i])){
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }
// const bookShelf = {
 
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
   
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(bookName1, bookName2) {
//     return `Updating book ${bookName1} to  ${bookName2}`;
//   },
//   }


// console.log(bookShelf.getBooks());//"Returning all books"
// console.log(bookShelf.addBook());//"Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset"));
// // "Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// //"Updating book Sands of dune to Dune"

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
   
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
   
//     return this.books;
   
//    }

// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//["The last kingdom", "Dungeon chronicles", "The guardian of dreams"];

// const atTheOldToad = {
//  potions: [],

//   getPotions() {
//     return potions;
//   },

//   addBook(this) {
//     potions.push(this);
//   },
//   removeBook(this) {
//     const potionIndex = this.potions.indexOf(this);
//     this.potions.splice(potionIndex, 1);
//   },

// };

// console.log(atTheOldToad.potions);


// let i = 10;

//  if (true){
//     i = 15;
//  }


//  console.log(i);
// let i = 10;

// if (true) {
//     let i = 15;
//     if (true) {
//         i = 25;
//     }
// }


// console.log(i);
// let c = 45;
// if (true) {
//   let i = 15
//   b = 22
//   console.log(c);
//   let c = 15
//   if (true) {
//       i = 22
//       b = 30
//       let c = 40
//   }
//   b = 24
// }





// потрібно  порахувати за скільки днів Равлик зможе виповзти з колодязя
// в день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// 1. Cтворюємо змінні const daySpeed = 7; const nightSpeed = 2; days = 0; 

// 2. Робимо перевірку умови while

// let depth = 17;
// const daySpeed = 7;
// const nightSpeed = 2;
// const speed = 5;
// let days = 0;
// let totalPass = 0;

// while (0 < depth){
//   depth -= daySpeed;
//   days += 1;
//   if (0 < depth){
//     depth += nightSpeed;
//   }
// }

// console.log(days);

// const all = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const boys = ['Artem', 'Maksim', 'David', 'Roman'];

// function getCommonElements(all, boys) {
//   let commonElements = [];
//   for (const item in all){
//     if (!boys.includes(item){
//       commonElements.push(item);
//     }
    
//   }
//   return commonElements;}
//   console.log(getCommonElements(all, boys));

//мой вариант не сделан
  // Потрібно створити функцію яка буде находити в масиві 
  //елементи що дублюються і потім ці елменти добавляти в 
  //новий масив
// const items = [1, 2, 3, 2, 1, 17, 19];
// let commonEl = [];
// function findElements(items) {
// for (let i=0; i < items.length; i+=1){ 
//    if (items.include(i) === True){
//       commonEl.push(i);
//   }
// }
// return commonEl;
// }
// console.log(commonEl);


// 1. const items = [1, 2, 3, 2, 1, 1, 1, 1, 17, 19];
// // 1. перебираємо масив
// // 2. порівнюємо елемент з наступними елементами масиву
// // 3. якщо масив містить елемент додаємо в новий масив

// function findElements(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     for (let j = i + 1; j < items.length; j += 1) {
//       if (items[i] === items[j]) {
//         items.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
//   return items;
// }
// console.log(findElements(items));


// Зробіть функцію, яка бере масив імен людей, які поставили лайки. Вона має повернути текст, 
//як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// total = [];
// function findElements(items) {
//   let message = `no one likes this`;
// switch(items.length){
//   case 0:
//   break;
//   case 1:
//     message =`${items[0]} likes this`;
//     break;
//     case 2:
//       message =`${items[0]} and ${items[1]} like this`;
//       break;
//       case 3:
//         message =`${items[0]}, ${items[1]} and ${items[2]} like this`;
//       break;
//     default:
//       message =`${items[0]}, ${items[1]} and (items.length - 2) others like this`;
      

// }return message;

// console.log(findElements([]));
// console.log(findElements(["Peter"]));
// console.log(findElements(["Jacob", "Alex"]));
// console.log(findElements(["Max", "John", "Mark"]));


// function nameLike(names) {
//   let message = 'no one likes this';
//   switch (names.length) {
//     case 0:
//       break;
    
//     case 1:
//       message = `${names[0]} likes this`;
//       break;
    
//     case 2:
//       message = `${names[0]} and ${names[1]} likes this`;
//       break;
//     case 3:
//       message = `${names[0]}, ${names[1]} and ${names[2]} likes this`;
//       break;

//     default: message = `${names[0]}, ${names[1]} and ${names.length - 2} likes this`;
      
//   }
//   return message;
// }
// console.log(nameLike([]));
// console.log(nameLike(["Peter"]));
// console.log(nameLike(["Jacob", "Alex"]));
// console.log(nameLike(["Max", "John", "Mark"]));
// console.log(nameLike(["Alex", "Jacob", "Mark", "Max"]));
// console.log(nameLike(["Alex", "Jacob", "Mark", "Max", "Marta", "Olha"]));

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newNumbers = [];
//   numbers.forEach(number =>{
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     }
//     else{
//       newNumbers.push(number);}
//   });
//     return newNumbers;

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  // Change code above this line
// };
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const friendName = "Briana Decker";
// const getUsersWithFriend = (users, friendName) => {
//   // const allFriends = users.flatMap(user => user.friends);
//  const checkFriends = users.filter(user => user.friends.includes(friendName))
//  ;
//  return checkFriends;
// };

// console.log(getUsersWithFriend(users, friendName));
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const sortByName = users => {
//   const sortedName = [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
//   return sortedName;
// };
// //sortByName();
// console.log(sortByName(users));

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
 
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
    
  },
  order(pizzaName) {
    const isPizzaAvailable = pizzaPalace.checkPizza(this);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${this.pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
 
};console.log(pizzaPalace.order("Four meats"));
