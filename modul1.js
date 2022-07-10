
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

const atTheOldToad = {
 potions: [],

  getPotions() {
    return potions;
  },

  addBook(this) {
    potions.push(this);
  },
  removeBook(this) {
    const potionIndex = this.potions.indexOf(this);
    this.potions.splice(potionIndex, 1);
  },

};

console.log(atTheOldToad.potions);



