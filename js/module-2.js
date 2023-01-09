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
