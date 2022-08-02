//*******      МАССИВЫ      ******** */

//  * PRACTICE-1   (3, 'a') => ['a', 'a', 'a']
//  * PRACTICE-2   reverse [1, 2, 3] => [3, 2, 1]
//  * PRACTICE-3   чистим от false [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//  * PRACTICE-4   создаем объект { a: 1, b: 2 }
//  * PRACTICE-5   массив без повторений [1, 2, 3, 1, 2] без 1, 2 => [3]
//  * PRACTICE-6   уникальные эл-ты [1, 2, 3, 1, 2] => [1, 2, 3]
//  * PRACTICE-7   сравнить массивы ([1, 2, 3], [1, 2, 3]) => true
//  * PRACTICE-8   глубокий массив в одномерный [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
//  * PRACTICE-9   разделить на части ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//  * PRACTICE-10   массив из уник значений всех массивов ([1, 2], [2, 3]) => [2]

//***************************************** */


//  * PRACTICE-1   (3, 'a') => ['a', 'a', 'a']

/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */


//   const fill = (arraySize, value) => new Array(arraySize).fill(value);
 
//  const data = 3;
//  const valueToFill = 'a';
//  console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

//  * PRACTICE-2   reverse [1, 2, 3] => [3, 2, 1]
/**
  * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
// const reverse = (array) => {
//   const reversed = [];

//   for (let i = array.length - 1; i >= 0; i -= 1) {
//     reversed.push(array[i]);
//   }

//   return reversed;
// };
// data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1];

//  * OR
/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
// const reverse2 = (array) => array.map((el, id, givenArr) => givenArr[givenArr.length - id - 1]);
// data = [1, 2, 3];
// console.log(reverse2(data)); // [3, 2, 1];

//  * PRACTICE-3   чистим от false [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
/**
  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
// const compact = (array) => array.filter((el) => el);
//  data = [0, 1, false, 2, undefined, '', 3, null];
//  console.log(compact(data)) // [1, 2, 3]

//  * PRACTICE-4   создаем объект { a: 1, b: 2 }

/**
  * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
  * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  * Сложность задачи: 2 of 5
  * @param {Array} array - массив, значения которого массивы пар
  * @returns {Array}
*/
// const fromPairs = (array) => array.reduce((acc, value) => {
//   if (Array.isArray(value)) {
//     acc[value[0]] = value[1];
//   }
//   return acc;
// }, {});
 
//  data = [['a', 1], ['b', 2]];
//  console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

//  * PRACTICE-5   массив без повторений [1, 2, 3, 1, 2] без 1, 2 => [3]

/**
  * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
  * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
  * Сложность задачи: 2 of 5
  * @param {Array} array - Массив с примитивными значениями
  * @param {?} args - лист значений для удаления
  * @returns {Array}
*/
// const without = (array, ...args) => {
//   let filteredArray = [...array];

//   for (let i = 0; i < args.length; i += 1) {
//     filteredArray = filteredArray.filter((el) => el !== args[i]);
//   }

//   return filteredArray;
// };
 
//  const data = [1, 2, 3, 1, 2];
//  console.log(without(data, 1, 2)); // [3]
//  * OR

// function without2(array) {
//   let filteredArray = [...array];

//   for (let i = 1; i < arguments.length; i += 1) {
//     filteredArray = filteredArray.filter((el) => el !== arguments[i]);
//   }

//   return filteredArray;
// }
//  const data = [1, 2, 3, 1, 2];
//  console.log(without(data, 1, 2)); // [3]



//  * PRACTICE-6   уникальные эл-ты [1, 2, 3, 1, 2] => [1, 2, 3]
/**
  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * Сложность задачи: 2 of 5
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}
*/
// const unique = (array) => Array.from(new Set(array));
// const unique2 = (array) => array.filter((element, id) => array.indexOf(element) === id);


//  const data = [1, 2, 1, 2, 3];
// console.log(unique(data)); // [1, 2, 3]
// console.log(unique2(data)); // [1, 2, 3]

//  * PRACTICE-7   сравнить массивы ([1, 2, 3], [1, 2, 3]) => true
/**
  * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
  * Сложность задачи: 2 of 5
  * @param {Array} firstArray - Массив с примитивными значениями
  * @param {Array} secondArray - Массив с примитивными значениями
  * @returns {boolean}
*/
// const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }
//   const compared = firstArray.map((el, id) => secondArray[id] === el);

//   return !compared.includes(false);
// };

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false


//  * PRACTICE-8   глубокий массив в одномерный [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
/**
  * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
  * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Глубокий массив
  * @returns {Array}
*/
// const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
//  const data = [1, 2, [3, 4, [5]]];
//  console.log(flatten(data)); // [1, 2, 3, 4, 5]

 //  * PRACTICE-9   разделить на части ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 /**
  * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
  * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Массив элементов
  * @param {number} size - Размер чанков
  * @returns {Array}
*/
// const chunk = (array, size) => {
//   const chunkedArr = [];
//   let index = 0;
//   while (index < array.length) {
//     chunkedArr.push(array.slice(index, size + index));
//     index += size;
//   }
//   return chunkedArr;
// };
 
//  const data = [1, 2, 3, 4, 5, 6, 7];
//  console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
//  console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

//  * PRACTICE-10   массив из уник значений всех массивов ([1, 2], [2, 3]) => [2]

/**
  * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
  * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
  * Сложность задачи: 4 of 5
  * @param {?} arrays - Массив примитивных значений
  * @returns {Array}
*/
// const intersection = (...arrays) => {
//   const result = arrays[0].filter((element) => {
//     const indexOfElement = arrays[1].indexOf(element);
//     if (indexOfElement >= 0) {
//       return element;
//     }
//   });
//   if (arrays.length > 2) {
//     intersection(result, ...arrays.slice(2, arrays.length));
//   }
//   return Array.from(new Set(result));
// };
 
//  const arr1 = [1, 2];
//  const arr2 = [2, 3];
//  const arr3 = ['a', 'b'];
//  const arr4 = ['b', 'c'];
//  const arr5 = ['b', 'e', 'c'];
//  const arr6 = ['b', 'b', 'e'];
//  const arr7 = ['b', 'c', 'e'];
//  const arr8 = ['b', 'e', 'c'];
//  console.log(intersection(arr1, arr2)) // [2]
//  console.log(intersection(arr3, arr4, arr5)) // ['b']
//  console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']