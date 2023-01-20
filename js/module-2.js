// Завдання 1
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// Завдання 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }

// Завдання 3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// Завдання 5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// Завдання 6
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// Завдання 8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// Завдання 9

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const results = [firstElement, lastElement];

//   console.log(firstElement);
//   console.log(lastElementIndex);
//   console.log(lastElement);
//   console.log(results);

//   return results;
// }
// getExtremeElements([1, 2, 3, 4, 5]);

// Завдання 10

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   // Change code below this line

//   // Change code above this line
//   return words;
// }

// Завдання 11
// function calculateEngravingPrice(message, pricePerWord) {
//   let words;
//   words = message.split(" ");

//   const messageLength = words.length;
//   console.log(messageLength);

//   const results = messageLength * pricePerWord;
//   console.log(results);
//   return results;
//   // Change code below this line

//   // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);

// Завдання 12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   // Change code below this line

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// Завдання 13

// function slugify(title) {
//   const normalizedTitle = title.toLowerCase();
//   //   console.log(normalizedTitle);

//   const words = normalizedTitle.split(" ");
//   console.log(words);

//   const slug = words.join("-");
//   console.log(slug);

//   return slug;
// }
// slugify("Arrays for begginers");

// повертає "arrays-for-begginers"

// Завдання 16
// function makeArray(firstArray, secondArray, maxLength) {
//   let result;
//   const allArrays = firstArray.concat(secondArray);
//   console.log(allArrays);
//   const length = allArrays.length;
//   console.log(length);
//   const startLength = [0];

//   if (length > maxLength) {
//     result = allArrays.slice(0, maxLength);
//   } else {
//     result = allArrays;
//   }
//   console.log(result);
//   return result;
//   // Change code below this line

//   // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);

// Завдання 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// Завдання 18

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     // Change this line
//     total += i;
//     console.log(i);
//   }

//   return total;
//   // Change code above this line
// }

// calculateTotal(3);

// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
//   console.log(i);
// }
// // i = i + 1;
// // sum = sum + i;

// console.log(sum);

// Завдання 19

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Завдання 20

// function calculateTotalPrice(order) {
//   let total = 0;

//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     console.log(i);
//     console.log(order.length);
//   }
//   console.log(total);
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// Завдання 21

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// Давайте спробуємо скласти алгоритм наших дій...
// Отримали масив
// Створили зміну, де будемо тримати найдовше слово і записали туди пусте значення.
// Далі в циклі, для кожного елемента масива перевіряємо чи довжина  елемента масиву бульше ніж довжина слова яке зберігається зараз в змінній.
// Якщо елемент масиву довший, то записуємо в змінну. якщо = або менше нічого не робимо.
// Після виконання циклу найдовше слово буде зберігатися в змінній  яку ми оголосили в пункті 2

// function findLongestWord(string) {

//   let words = string.split(" ");
//   // console.log(words);
//   // console.log(words.length);
//   let longestWord = words[0];
//   // console.log(longestWord);

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");

// Завдання 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);

// Завдання 23
// function filterArray(numbers, value) {
//   let numbersPart = [];

//   for (let number of numbers) {
//     if (number > value) {
//       numbersPart.push(number);
//     }
//   }
//   console.log(numbersPart);
//   return numbersPart;
// }

// filterArray([1, 2, 3, 4, 5], 3);

// Завдання 24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
//   // Change this line
// }

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");

// Завдання 25

// function getCommonElements(array1, array2) {
//   let numbers = [];

//   for (let number of array1) {
//     if (array2.includes(number)) {
//       numbers.push(number);
//     }
//   }

//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// getCommonElements([1, 2, 3], [2, 4]);

// Завдання 28

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 1.33;

// console.log(d);

// Завдання 29

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let numbers = [];

//   for (let i = start; i <= end; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }

//   console.log(numbers);
//   return numbers;

//   // Change code above this line
// }
// getEvenNumbers(2, 5);

// function includes(array, value) {
//   // Change code below this line
//   let a = array[0];
//   for (let i of array) {
//     if (i === value) {
//       a = true;
//       break;
//     }
//     a = false;
//   }
//   return a;
// }

// includes([1, 2, 3, 4, 5], 3);
