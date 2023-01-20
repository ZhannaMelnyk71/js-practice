// Завдання 7
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

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// Завдання 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }

//     // Якщо це невласна властивість - нічого не робимо
//   }
//   // Change code above this line
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 });

// Завдання 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key]);
//   console.log(values);
// }

//Завдання 14

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 });

// Завдання 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//     console.log(value);
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);

// Завдання 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   console.log(colors);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// Завдання 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     // console.log(product.name);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// getProductPrice("Radar");
// getProductPrice("Engine");

// Завдання 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let result = [];

//   for (const product of products) {
//     console.log(product);
//     if (product[propName]) {
//       result.push(product[propName]);
//     }
//   }

//   // Change code above this line
//   console.log(result);
//   return result;
// }
// getAllPropValues("quantity");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;

//   for (const product of products){
//     if (product.name === productName){
//       totalPrice = product.price*product.quantity;
//     }
//   }

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice("Radar")

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  const { hex, rgb } = color;
  hexColors.push(hex);
  rgbColors.push(rgb);

  console.log(hexColors);
}
