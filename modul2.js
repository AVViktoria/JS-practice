//  *     1

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"]},
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//   { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"]},
// ];

//  * фильтруем книги по наличию "Harry Potter"
//  * в консоле должно получиться:
// Книга Гарі Потер є в: 
// 1 Anna 
// 2 Oliksii

// const filteredFriends = friends.filter(friend => friend.books.includes("Harry Potter")).
// reduce((acc, friend, index, array) => acc += `${index + 1} ${friend.name}\n`, 'Книга Гарі Потер є в:\n' );

// console.log(filteredFriends);


//  * reduce можем переписать так

// const namesFriends = friends.reduce((acc, friend) => {

//   if (friend.books.includes("Harry Potter")){
//     return acc += `${index + 1} $(friend.name)`;
//   }
//   return acc;
// }, 'Книга Гарі Потер є в:');
// console.log(namesFriends);


//  *     2


// сonst str = 'aafsgasgwqwcvevw';
// str1 = str.split('');
// console.log(str1);


// const allString = str1.reduce((acc, letter)=>{

//   if(acc.hasOwnProperty(letter)){
//   acc[letter]+=1;
// }else 
//  {
//   acc[letter] = 1;
// }
//  return acc;

// }, {})

// console.log(allString);

//  *     3
//  * Потрібно створити функцію яка буде приймати 2 параметри(значення з промпту)
//  * 1 промпт значення від якої суми робити пошук
//  * 2 промпт значення до якої суми робити пошук
//  * Повертає список автомобілів які підпадають під наш пошук
//  * Повертає стрінгу з знаденимим авто
//  * Кількість знайдених автомобілів 2:
//  * 1. Honda Accord, ціна 20000
//  * 2. Honda Civic, ціна 12000
//  * Якщо не було знайдено жодного авто ми маємо вивести
//  * Вибачте але за вашим пошуком жодного авто не було знайдено.



// const cars = [{
//   car: 'Honda',
//   type: 'Civic',
//   price: 12000
// },
// {
//   car: 'Audi',
//   type: 'Q7',
//   price: 40000,
// }, {
//   car: 'BMW',
//   type: '5 siries',
//   price: 9000,
// }, {
//   car: 'Honda',
//   type: 'Accord',
//   price: 20000,
// }, {
//   car: 'Volvo',
//   type: 'XC60',
//   price: 7000,
// }
// ];

// const minPrice = prompt('value from');
// const maxPrice = prompt('value to');
// const filteredCars = function (minPrice, maxPrice){
//   const carsFind = cars.filter((car)=> car.price >=minPrice && car.price <=maxPrice);
//   return carsFind.reduce (( acc, {car, type, price}, index) =>{
// return acc += `${index+1} ${car} ${type}, price ${price}\n`


//   }, carsFind.length? `Кількість знайдених автомобілів ${carsFind.length}:\n`: `Вибачте але за вашим пошуком жодного авто не було знайдено`
//   );
// };
// console.log(filteredCars(minPrice, maxPrice));

//  *     4

// const films = [{
//   "title": "Interceptor",
//   "genre_ids": [
//       28,
//       53,
//       12
//   ],
// },
// {
//   "title": "Fantastic Beasts: The Secrets of Dumbledore",
//   "genre_ids": [
//       14,
//       12,
//       28
//   ],
// },
// {
//   "title": "Last Seen Alive",
//   "genre_ids": [
//       28,
//       53
//   ],
// },
// {
//   "title": "Jurassic World Dominion",
//   "genre_ids": [
//       878,
//       28,
//       12,
//       53
//   ],
// },
// ];


// const genres = [{
//   id: 28,
//   name: "Action"
// }, {
//   id: 12,
//   name: "Adventure"
// }, {
//   id: 14,
//   name: "Fantasy"
// }, {
//   id: 878,
//   name: "Science Fiction"
// }, {
//   id: 53,
//   name: "Thriller"
// }, {
//   id: 10752,
//   name: "War"
// }, {
//   id: 37,
//   name: "Western"
// }]

//  * 1. перебрать массив фильмов
//  * 2. на каждой итерации получаем объект тайтл
//  * 3. на каждой итерации мепа мы перебираем ключи по genre_ids
//  * 4. возвращаем массив с именами
//  * 5. создаем ключ в films и с соответствием имен 

// films.forEach((film)=> {
//   const names = film.genre_ids.map((value)=>{
// const findGenre = genres.find(genre => genre.id ===value);
// return findGenre.name;

//   });
//  film.genre_names = names;
// });

//  *or

// films.forEach((film) => {
//   film.genres_names = film.genre_ids.map(
//     (value) => genres.find(({ id }) => id === value).name
//   );
// });
// console.log(films);
