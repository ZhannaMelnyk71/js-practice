// Приклад
// const age = 20;
// const userName = "Mango";
// const socialProfileTag = "@gluck";
// const totalWorkerSalary = 4052;

// Завдання 1
// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName);
// ("Droid");

// console.log(pricePerItem);
// 2000;

// Завдпння 2
// let pricePerItem = 2000;
// pricePerItem = 3500;

// let productName = "Droid";
// productName = "Repair droid";

// console.log(pricePerItem);
// console.log(productName);

// Завдання 3

// Числа
// const age = 20;
// const salary = 3710.84;

// // Рядки
// const name = "Mango";
// const description = "JavaSript essentials";

// // Булі
// const isModalOpen = true;
// const isLoggedIn = false;

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isLoggedIn = false;

// Завдання 4

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// Завдання 5
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// Завдання 6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// Завдання 7
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// Завдання 8

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Завдання 9
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Завдання 10

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   console.log(message);
//   return message;
// }

// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// Завдання 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// Завдання 12

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   console.log(message);
//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// Завдання 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   console.log(passed);

//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);

// Завдання 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   console.log(isMatch);

//   // Change code above this line
//   return isMatch;
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// Завдання 15

// function checkAge(age) {
//   let message;
//   // const newAge = age>=18

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   console.log(message);

//   return message;
// }
// checkAge(20);
// checkAge(8);

// Завдання 16
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     // Change this line
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code below this line

//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const left = customerCredits - totalPrice;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${left} credits left`;
//   }
//   console.log(message);

//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000);

//Завдання 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   console.log(message);

//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// Завдання 21

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end; // Change this line
//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);

// Завдання 23

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";

//   console.log(canAccessContent);

//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");

// Завдання 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount);

//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);

// Завдання 25

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// Завдання 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

// Завдання 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// Change code below this line

// if (password === null) {
//   message = "Canceled by user!";
// } else if (password === ADMIN_PASSWORD) {
//   message = "Welcome!";
// } else {
//   message = "Access denied, wrong password!";
// }

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// Завдання 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;

//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;

//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;

//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }

//   // Change code above this line
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
