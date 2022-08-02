//*******      OBJECTS      ******** */

//  * PRACTICE-1   
//  * PRACTICE-2   
//  * PRACTICE-3   
//  * PRACTICE-4   
//  * PRACTICE-5   
//  * PRACTICE-6   
//  * PRACTICE-7   
//  * PRACTICE-8   
//  * PRACTICE-9   
//  * PRACTICE-10   

//***************************************** */


//  * PRACTICE-1   isArray объект или массив  ({ a: 1 }) => true, ([1, 2, 3]) => false
/**
  * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
  * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
  * Сложность задачи: 1 of 5
  * @param element - элемент для проверки
  * @returns {boolean}
*/

// const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;

// const data = { a: 1 };
// console.log(isPlainObject(data)); // true

//  * PRACTICE-2   Object.entries из объекта в массив ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
/**
  * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
  * Сложность задачи: 1 of 5
  * @param {Object} object - любой объект для трансформации
  * @returns {Array} - вложенный массив
*/

// const makePairs = (object) => Object.entries(object);

// //  * OR
// const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);

// //  * OR
// const makePairs3 = (object) => {
//   const result = [];

//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       result.push([prop, object[prop]]);
//     }
//   }

//   return result;
// };

// const data = { a: 1, b: 2 };
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]
// console.log(makePairs2(data)); // [['a', 1], ['b', 2]]
// console.log(makePairs3(data)); // [['a', 1], ['b', 2]]

//  * PRACTICE-3   forEach новый объект без указанных значений ({ a: 1, b: 2 }, 'b') => { a: 1 } 
/**
  * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
  * Сложность задачи: 2 of 5
  * @param {Object} object - любой объект
  * @param {?} args - список значений для удаления
  * @returns {Object} - новый объект без удаленных значений
*/

// const without = (object, ...args) => {
//   const newObject = { ...object };

//   args.forEach((arg) => {
//     delete newObject[arg];
//   });

//   return newObject;
// };

// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, 'b', 'c')); // { a: 1 }

//  * PRACTICE-4   filter проверку объекта на пустоту ({}) => true,  ({ a: undefined }) => true, ({ a: 1 }) => false
/**
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

// const isEmpty = (object) => {
//   const objectKeys = Object.keys(object);
//   if (objectKeys.length === 0) {
//     return true;
//   }

//   return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
// };

// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

//  * PRACTICE-5   Object.keys сравнивает два объекта  ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
/**
  * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
  * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
  * Сложность задачи: 2 of 5
  * @param {Object<string | number>} firstObj - объект с примитивами
  * @param {Object<string | number>} secondObj - объект с примитивами
  * @returns {boolean}
*/

// const isEqual = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   const secondObjKeys = Object.keys(secondObj);

//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   }

//   return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
// };

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

//  * OR

// const isEqual2 = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   const secondObjKeys = Object.keys(secondObj);

//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   }

//   for (const prop in firstObj) {
//     if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
//       return false;
//     }
//   }

//   return true;
// };

//  * PRACTICE-6   ({ a: { b: [1, 2, 3] } }, 'a.b', splice,[1,2]) => [2,3]
/**
  * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
  * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
  * Сложность задачи: 3 of 5
  * @param {Object} object
  * @param {String} path - путь в объекте
  * @param {String} func - метод массива для исполнения
  * @param {Array} [args] - список аргументов
  * @returns {?}
*/

// const invoke = (object, path, func, args) => {
//   const splittedPath = path.split('.');

//   const target = splittedPath.reduce((acc, key) => {
//     acc = acc[key] ? acc[key] : object[key];
//     return acc;
//   }, {});

//   return Array.prototype[func].apply(target, args);
// };

// data = { a: { b: [1, 2, 3] } };
// console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

//  * PRACTICE-7   11111     глубокую проверку на пустоту объекта ({}) => true  ({ a: { b: [] } }) => true
/**
  * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
  * Пустые значения: '', null, NaN, undefined, [], {}
  * Ожидаемый результат: ({}) => true,
      ({ a: { b: undefined } }) => true,
      ({ a: { b: [] } }) => true
  * Сложность задачи: 3 of 5
  * @param {Object} object - любой объект
  * @returns {boolean}
*/

// const isEmptyDeep = (element) => {
//   if (element === null) {
//     return true;
//   }
//   if (Array.isArray(element)) {
//     if (element.length === 0) {
//       return true;
//     }

//     let result;
//     for (let i = 0; i < element.length; i += 1) {
//       if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
//         || (typeof element[i] === 'string' && element[i] !== '')) {
//         result = false;
//         break;
//       }
//       if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
//         result = isEmptyDeep(element[i]);
//         break;
//       }

//       result = true;
//     }

//     return result;
//   }
//   if (typeof element === 'object') {
//     const objectKeys = Object.keys(element);
//     if (objectKeys.length === 0) {
//       return true;
//     }

//     let result;
//     for (let i = 0; i < objectKeys.length; i += 1) {
//       const value = element[objectKeys[i]];

//       if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
//         || (typeof value === 'string' && value !== '')) {
//         result = false;
//         break;
//       }
//       if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
//         result = isEmptyDeep(value);
//         break;
//       }

//       result = true;
//     }

//     return result;
//   }
// };

// const data = { a: { b: undefined } };
// const data2 = { a: { b: 1 } };
// console.log(isEmptyDeep(data)); // true
// console.log(isEmptyDeep(data2)); // false

//  * PRACTICE-8   глубокое сравнение объектов ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
/**
  * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
  * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
  * @param {Object} firstObj - Объект с любыми значениями
  * @param {Object} secondObj - Объект с любыми значениями
  * @returns {boolean}
*/
// const isEqualDeep = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   const secondObjKeys = Object.keys(secondObj);

//   if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
//     return true;
//   }

//   const compareList = firstObjKeys.map((key) => {
//     const valueOfFirstObject = firstObj[key];
//     const valueOfSecondObject = secondObj[key];
//     if ((Number.isNaN(valueOfFirstObject) && Number.isNaN(valueOfSecondObject))
//       || (valueOfFirstObject === null && valueOfSecondObject === null)) {
//       return true;
//     }
//     if (valueOfFirstObject === valueOfSecondObject) {
//       return true;
//     }
//     if (Array.isArray(valueOfFirstObject) && Array.isArray(valueOfSecondObject)) {
//       return isArraysEqualDeep(valueOfFirstObject, valueOfSecondObject);
//     }
//     if (typeof valueOfFirstObject === 'object' && typeof valueOfSecondObject === 'object') {
//       return isEqualDeep(valueOfFirstObject, valueOfSecondObject);
//     }

//     return false;
//   });

//   return !compareList.includes(false) && !compareList.includes(undefined);
// };

// const isArraysEqualDeep = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   const compared = firstArray.map((el, id) => {
//     if (Array.isArray(el) && Array.isArray(secondArray[id])) {
//       return isArraysEqualDeep(el, secondArray[id]);
//     }
//     if (typeof el === 'object' && typeof secondArray[id] === 'object') {
//       return isEqualDeep(el, secondArray[id]);
//     }

//     return secondArray[id] === el;
//   });

//   return !compared.includes(false);
// };

// const data = { a: 1, b: { c: 1 } };
// const data2 = { a: 1, b: { c: 1 } };
// const data3 = { a: 1, b: { c: 2 } };
// console.log(isEqualDeep(data, data2)); // true
// console.log(isEqualDeep(data, data3)); // false



//  * PRACTICE-9   пересечения объектов ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
/**
  * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
  * @param {Object<string | number>} firstObj - объект с примитивными значениями
  * @param {Object<string | number>} secondObj - объект с примитивными значениями
  * @returns {Object}
*/

// const intersection = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc = {}, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     }

//     return acc;
//   }, {});
// };

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }

//  * PRACTICE-10   глубоко находит пересечения объектов ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
/**
  * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
  * @param {Object} firstObj - объект любых значений
  * @param {Object} secondObj - объект любых значений
  * @returns {Object}
*/

// const intersectionDeep = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc = {}, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     }
//     if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
//       const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

//       if (isEqualArrays) {
//         acc = {
//           ...acc,
//           [key]: firstObj[key],
//         };
//       }
//     } else if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
//       const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

//       if (Object.keys(hasIntersection).length !== 0) {
//         acc = {
//           ...acc,
//           [key]: hasIntersection,
//         };
//       }
//     }
//     return acc;
//   }, {});
// };


// const data = { a: 1, b: { c: 3 } };
// const data2 = { c: 1, b: { c: 3 } };
// console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }


//  * PRACTICE-11  CODEWARS   MAKE OBJECTS

// class Human {
//   #name;
//   #surname;
//   #birthday;  

//   constructor ( name = 'Jhon', surname = 'Doe' , birthday = new Date().toISOString().split`T`[0]) {
//       this.#name = name
//       this.#surname = surname
//       this.#birthday = birthday
//   }

//   get name () {
//       return this.#name
//   }

//   get surname () {
//       return this.#surname
//   }
  
//   set name ( newName = 'Jhon' ) {
//       this.#name = newName
//   }
  
//   set surname ( newSurname = 'Doe' ) {
//       this.#surname = newSurname
//   }

//   get birthday () {
//      return this.#birthday
//   }

//   getAge () {
//       return `I'm ${(new Date() - new Date(this.#birthday))/1000/60/60/24/365|0} years old`
//     }

//   greeting () {
//       return `Hello, my name is ${this.#name} ${this.#surname}`
//   }

// }



// class Worker extends Human {
//   #totalDays = 0
//   #hoursPerWeek = 0
//   #profession;

//   constructor( name, surname, profession = 'Developer' ){
//       super()
//       super.name = name
//       super.surname = surname
//       this.#profession = profession
//   }

//   get profession () {
//     return this.#profession
//   }

//   get stats () {
//       return {
//           totalDays: this.#totalDays,
//           hoursPerWeek: this.#hoursPerWeek
//       }
//   }

//   doWork (hours = 8) {
//       if (!(this.#totalDays % 7) && this.#totalDays) 
//           this.#hoursPerWeek = hours
//       this.#hoursPerWeek += hours
//       this.#totalDays += 1
//       return this
//   }

//   changeProfession ( newProfession ) {
//     if ( !newProfession ) throw Error('The profession was not transferred!')
//     if ( typeof newProfession !== 'string' ) throw TypeError('Incorrect new profession type!')
//     this.#profession = newProfession
//     this.#hoursPerWeek = 0
//     this.#totalDays = 0
//     return this
//   }

// }

//  * PRACTICE-12  CODEWARS  REDUCE

// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

// const arr = [
//   '',
//   'src/main.js',
//   'src/second.js',
//   'src/components/header.js',
//   'src/components/helpers/sidebar.js'
// ];

// const result = {
//   "src": {
//       "main.js": "file",
//       "second.js": "file",
//       "components": {
//           "header.js": "file",
//           "helpers": {
//             "sidebar.js": "file",
//           },
//       }    
//   }
// }

// function getTree(strings) {
//   const tree = {};
//   strings.forEach(path => {
//     path && path.split("/").reduce((acc, cur, idx, src) => {
//       if (idx >= src.length - 1) {
//         acc[cur] = 'file';
//       } else {
//         acc[cur] = acc[cur] || {};
//       }
//       return acc[cur];
//     }, tree);
//   });
//   return tree;
// }

// console.log(getTree(arr));

//  * PRACTICE-13  CODEWARS  REDUCE  сумму чисел

// const sumOfElements = (arr=[]) => arr.reduce((sum, currentValue) => sum + currentValue,0)

// console.log(sumOfElements([1,2,3]));//, 6, "Wrong"

//  * PRACTICE-14  CODEWARS  REDUCE  найти дубликаты числа
// const duplicates = a => a.reduce((r, v, i, l) => !r.includes(v) && l.indexOf(v) !== i ? [...r, v] : r, []);

// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).toString, [1,3,4].toString, "Sorry, your array does not have the correct contents");
// console.log(duplicates([0, 1, 2, 3, 4, 5]).toString, [].toString, "Sorry, your array does not have the correct contents");
// console.log(duplicates.toString().indexOf("for"), -1, "You can't use for loops");
// console.log(duplicates.toString().indexOf("forEach"), -1, "You can't use for loops");
// console.log(duplicates.toString().indexOf("reduce"), -1, "You should be using reduce in your solution");